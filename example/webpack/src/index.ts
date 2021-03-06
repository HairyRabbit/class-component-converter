import Vue from 'vue'
import Component  from 'vue-class-component'
import { Prop, Emit, Inject, Provide, Watch } from 'vue-property-decorator'

@Component
class YourComponent extends Vue {
    @Prop(Number) readonly propsA: number | undefined

    @Emit()
    test () {
        this.data1++
    }

    @Emit('testtest')
    testt () {
        this.data1++
    }

    @Emit()
    test1 (v: number) {
        this.data1++
    }

    @Emit()
    test2 (v: number) {
        this.data1++
        return v + 1
    }

    @Inject() readonly foo: string = `foo`
    @Inject('bar') readonly injectionBar: string = `bar`
  
    @Provide() provideFoo = 'foo'
    @Provide('baz') provideBaz = 'baz'

    data1 = 123
    data2 = 234

    get what() {
        return this.data1
    }

    get why() {
        return this.data2 + this.propsA! + 1
    }

    set why (value) {
        this.data2 = value - 1
        // console.log(this.foo, this.bar)
    }

    hehe() {
        this.data1++
        console.log(this.data1, this.propsA)

        this.$emit('123', this.data1)
    }

    fooo () {
        const foo = () => ({ fff: 42 })
        const { propsA, data1, data2, what, why, hehe } = this
        const { fff } = foo()

        console.log(propsA, data1, data2, what, why, hehe, fff)
    }

    @Watch('propsA')
    handlePropsAChanged(value: number, oldValue: number) {
        console.log(this.propsA, value, oldValue)
    }

    @Watch('data1')
    handleData1Changed() {
        console.log(this.propsA, this.data1, this.data2, this.what, this.why, this.hehe())
    }

    mounted () {
        if (this.$slots.default) {
            // this.$slots.defalult(this.$refs.node)
        }
        console.log(123)
    }
}

export default YourComponent