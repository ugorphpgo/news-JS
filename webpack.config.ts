import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { merge } from 'webpack-merge';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from'clean-webpack-plugin';
import DotenvWebpackPlugin from 'dotenv-webpack';

import webpackProdConfig from './webpack.prod.config.js';
import webpackDevConfig from './webpack.dev.config.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const baseConfig = {
    entry: './src/index.ts',
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
                exclude: /node_modules/,
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, './dist'),
    },
    plugins: [
        new DotenvWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html',
        }),
        new CleanWebpackPlugin(),
    ],
};

export default ({ mode }: { mode: 'development' | 'prod'}) => {
    const isProductionMode = mode === 'prod';
    const envConfig = isProductionMode ? webpackProdConfig : webpackDevConfig;

    return merge(baseConfig, envConfig);
};
