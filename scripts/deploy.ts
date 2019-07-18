#!/usr/bin/env ts-node

import * as path from 'path'
import * as fs from 'fs'
import { execSync } from 'child_process'
import genBinFile from 'bin-file-gen'

const OUTPUT_DIRECTORY: string = `../libs`
const PACKAGE_CONFIG: string = `../package.json`

export default function main(): void {
    execSync(`npm run build`)
    const output: string = path.resolve(__dirname, OUTPUT_DIRECTORY)
    fs.copyFileSync(
            path.resolve(__dirname, PACKAGE_CONFIG), 
            path.resolve(output, `package.json`)
    )
    genBinFile({ output })
}

main()