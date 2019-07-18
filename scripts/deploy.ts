#!/usr/bin/env ts-node

import * as path from 'path'
import * as fs from 'fs'
import { execSync } from 'child_process'
import genBinFile from 'bin-file-gen'

const OUTPUT_DIRECTORY: string = `../libs`
const PACKAGE_CONFIG: string = `../package.json`

function copyFile(from: string, output: string) {
    const fileName: string = path.basename(from)
    return fs.copyFileSync(
        path.resolve(__dirname, from), 
        path.resolve(output, fileName)
    )
}

export default function main(): void {
    const output: string = path.resolve(__dirname, OUTPUT_DIRECTORY)
    copyFile(PACKAGE_CONFIG, output)
    genBinFile({ output })
    execSync(`npm publish`, { cwd: output })
}

main()