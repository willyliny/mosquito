module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/mosquito/' : '/',
  outputDir: 'docs'  // 使用 'docs' 而不是默認的 'dist'
}