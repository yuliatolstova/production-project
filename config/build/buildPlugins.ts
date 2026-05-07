import HtmlWebpackPlugin from "html-webpack-plugin";
import webpack, { DefinePlugin, HotModuleReplacementPlugin } from "webpack";
import {BuildOptions} from "./types/config";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
const ReactRefreshPlugin = require( 'react-refresh-webpack-plugin' )

export function buildPlugins({paths, isDev}: BuildOptions): webpack.WebpackPluginInstance[] {

    const plugins =  [
        new HtmlWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css',
        }),
        new DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]

    if(isDev) {
        plugins.push(new ReactRefreshPlugin())
        plugins.push(new HotModuleReplacementPlugin())
    }

    return plugins
}
