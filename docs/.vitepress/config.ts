import { defineConfig } from 'vitepress'
import { readFileSync, readdirSync } from 'fs'
type SidebarItem = {
    text: string
    collapsible?: boolean
    collapsed?: boolean
    items: {
        text: string
        link: string
        items?: { text: string; link: string }[]
    }[]
}[]
export default async () =>
    defineConfig({
        base: '/',
        lang: 'zh',
        title: 'Polyverse',
        description: '次时代 WebGPU 引擎, 简单易用，永久开源，为 Web3D 提供完善开发工具',
        lastUpdated: true,
        ignoreDeadLinks: true,
        appearance: 'dark',
        head: [
            ['link', { rel: 'shortcut icon', type: 'image/png', href: '/images/icons/cropped-POLYVERSE_ICON_COLOR-32x32.png' }],
            ['link', { rel: 'dns-prefetch', href: 'https://npm.elemecdn.com' }],
            // ['link', { rel: 'dns-prefetch', href: 'https://cdn.orillusion.com' }],
            ['script', { async: 'true', src: 'https://www.googletagmanager.com/gtag/js?id=G-0H9189CS0W' }],
            ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' }],
            ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
            ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
            ['link', { rel: 'apple-touch-icon', href: '/images/icons/icon512.png' }],
            ['meta', { name: 'theme-color', content: '#242424' }],
            ['link', { rel: 'manifest', href: '/manifest.json' }]
        ],
        locales: {
            root: { label: '简体中文' },
            en: { label: 'English', link: '' }
        },
        themeConfig: {
            logo: {
                light: '/images/logo512.png',
                dark: '/images/logo512.png'
            },
            outlineTitle: '本页内容',
            outline: [2, 3],
            nav: nav(),
            sidebar: {
                '/guide/': sidebarGuide(),
                '/api/': sidebar('', 'api'),
                // '/physics/': sidebar('', 'physics'),
                // '/stats/': sidebar('', 'stats'),
                // '/media-extention/': sidebar('', 'media-extention'),
                // '/particle/': sidebar('', 'particle'),
                '/example/': sidebarExample(),
            },

            editLink: {
                pattern: 'https://github.com/poly-engine/poly-engine.github.io/edit/master/docs/:path',
                text: '为此页提供修改建议'
            },

            socialLinks: [
                {
                    icon: 'github',
                    link: 'https://github.com/poly-engine/poly-engine'
                },
                {
                    icon: {
                        svg: '<svg viewBox="0 0 1024 1024"><path d="M490.338 592.738c11.816 11.816 29.539 11.816 41.354 0L976.738 179.2c7.877-15.754 5.908-41.354-25.6-41.354l-880.246 1.97c-23.63 0-43.323 21.66-25.6 41.353l445.046 411.57z m494.277-252.061c0-19.692-23.63-31.508-39.384-17.723L596.677 643.938c-23.63 21.662-53.17 33.477-84.677 33.477s-61.046-11.815-84.677-31.507L80.738 322.954c-15.753-13.785-39.384-3.939-39.384 17.723-1.97-5.908-1.97 447.015-1.97 447.015 0 43.323 35.447 78.77 78.77 78.77h787.692c43.323 0 78.77-35.447 78.77-78.77V340.677z"></path></svg>'
                    },
                    link: 'mailto:huodianyan@163.com'
                }
            ],

            footer: {
                message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2021027896号</a>',
                copyright: 'Copyright © 2021-Present <a href="mailto:huodianyan@163.com">Polyverse</a>'
            },
            // search: {
            //     provider: 'local',
            //     options: {
            //         translations: {
            //             button: {
            //                 buttonText: '搜索文档',
            //                 buttonAriaLabel: '搜索文档'
            //             },
            //             modal: {
            //                 noResultsText: '无法找到相关结果',
            //                 resetButtonTitle: '清除查询条件',
            //                 footer: {
            //                     selectText: '选择',
            //                     navigateText: '切换',
            //                     closeText: '关闭'
            //                 }
            //             }
            //         }
            //     }
            // },

            algolia: {
                appId: 'A4SU9IUJ2M',
                apiKey: '1a3b57b41821e82cafdd80621f042c9c',
                indexName: 'orillusion',
                searchParameters: {
                    facetFilters: ['tags:latest']
                },
                placeholder: '搜索文档',
                translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        searchBox: {
                            resetButtonTitle: '清除查询条件',
                            resetButtonAriaLabel: '清除查询条件',
                            cancelButtonText: '取消',
                            cancelButtonAriaLabel: '取消'
                        },
                        startScreen: {
                            recentSearchesTitle: '搜索历史',
                            noRecentSearchesText: '没有搜索历史',
                            saveRecentSearchButtonTitle: '保存至搜索历史',
                            removeRecentSearchButtonTitle: '从搜索历史中移除',
                            favoriteSearchesTitle: '收藏',
                            removeFavoriteSearchButtonTitle: '从收藏中移除'
                        },
                        errorScreen: {
                            titleText: '无法获取结果',
                            helpText: '你可能需要检查你的网络连接'
                        },
                        footer: {
                            selectText: '选择',
                            navigateText: '切换',
                            closeText: '关闭',
                            searchByText: '搜索提供者'
                        },
                        noResultsScreen: {
                            noResultsText: '无法找到相关结果',
                            suggestedQueryText: '你可以尝试查询',
                            reportMissingResultsText: '你认为该查询应该有结果？',
                            reportMissingResultsLinkText: '点击反馈'
                        }
                    }
                }
            },

            lastUpdatedText: '最后更新',

            docFooter: {
                prev: '上一篇',
                next: '下一篇'
            }
        },
        markdown: {
            lineNumbers: true,
            attrs: { disable: true }
        }
    })

function nav() {
    return [
        {
            text: '文档',
            items: [
                {
                    text: '简介',
                    link: '/guide/'
                },
                {
                    text: '快速入门',
                    link: '/guide/getting_start/install'
                },
            ]
        },
        {
            text: '示例',
            items: [
                {
                    text: 'Basic',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Mesh',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Material',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Texture',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Camera',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Light',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Scene',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Input',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Animation',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Particle',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Physics',
                    link: '/example/Animation/sample1'
                },
                {
                    text: 'Toolkit',
                    link: '/example/Animation/sample1'
                },
            ]
        },
        {
            text: 'API',
            items: [
                {
                    text: 'PolyEngine',
                    items: [
                        { text: 'Core', link: '/api/core/' },
                        { text: 'Transform', link: '/api/transform/' },
                        { text: 'Asset', link: '/api/asset/' },
                        { text: 'Input', link: '/api/input/' },
                        { text: 'Render', link: '/api/render/' },
                        { text: 'Controls', link: '/api/controls/' }
                    ]
                },
                {
                    text: 'WebGPU',
                    items: [
                        {
                            text: '规范标准',
                            link: 'https://www.orillusion.com/zh/webgpu.html'
                        },
                        {
                            text: '着色器语言',
                            link: 'https://www.orillusion.com/zh/wgsl.html'
                        },
                        {
                            text: '说明',
                            link: 'https://www.orillusion.com/zh/explainer.html'
                        }
                    ]
                }
            ]
        },
        // {
        //   text: '3DHub',
        //   link: 'https://3dhub.orillusion.com'
        // },
        // {
        //     text: '论坛',
        //     link: 'https://forum.orillusion.com'
        // },
        {
            text: 'v0.2',
            items: [
                {
                    text: '更新日志',
                    link: 'https://github.com/poly-engine/poly-engine/releases'
                },
                {
                    text: 'NPM',
                    link: 'https://www.npmjs.com/package/@poly-engine/core'
                },
                {
                    text: '贡献代码',
                    link: 'https://github.com/poly-engine/poly-engine/blob/main/.github/contributing.md'
                }
            ]
        }
    ]
}

function sidebarGuide(): SidebarItem {
    return [
        {
            text: '简介',
            collapsible: true,
            items: [
                { text: 'Why poly?', link: '/guide/index.md' },
                { text: '引擎特点', link: '/guide/index.md' },
                { text: '比较', link: '/guide/getting_start/install.md' },
            ]
        },
        {
            text: '快速入门',
            collapsible: true,
            items: [
                { text: '引擎特点', link: '/guide/index.md' },
                { text: '安装', link: '/guide/getting_start/install.md' },
                {
                    text: '初始化引擎',
                    link: '/guide/getting_start/initialization.md'
                },
                {
                    text: '绘制立方体',
                    link: '/guide/getting_start/draw_cube.md'
                },
                {
                    text: '加载3D模型',
                    link: '/guide/getting_start/load_model.md'
                },
                {
                    text: '第一个脚本组件',
                    link: '/guide/getting_start/script.md'
                }
            ]
        },
        {
            text: '核心',
            collapsible: true,
            items: [
                { text: 'ECS', link: '/guide/core/component.md' },
                { text: '实体Entity', link: '/guide/core/object.md' },
                { text: '组件Component', link: '/guide/core/scene.md' },
                { text: '系统System', link: '/guide/core/transform.md' },
                { text: '查询Query', link: '/guide/core/script.md' },
                { text: '模块Module', link: '/guide/core/engine.md' },
                { text: 'Archetype', link: '/guide/core/config.md' }
            ]
        },
        {
            text: 'Transform',
            collapsible: true,
            items: [
                { text: '摄像机', link: '/guide/graphics/camera.md' },
            ]
        },
        {
            text: '图形',
            collapsible: true,
            items: [
                { text: '摄像机', link: '/guide/graphics/camera.md' },
                { text: '光照', link: '/guide/graphics/lighting.md' },
                { text: '阴影', link: '/guide/graphics/shadow.md' },
                { text: '网格', link: '/guide/graphics/mesh.md' },
                { text: '材质', link: '/guide/graphics/materials.md' },
                { text: '纹理', link: '/guide/graphics/texture.md' }
            ]
        },
        {
            text: '交互',
            collapsible: true,
            items: [
                { text: '触控', link: '/guide/interaction/pointer.md' },
                { text: '键盘', link: '/guide/interaction/keyboard.md' },
                { text: '拾取事件', link: '/guide/interaction/pickfire.md' },
                { text: '自定义事件', link: '/guide/interaction/event.md' }
            ]
        },
        {
            text: '资源',
            collapsible: true,
            items: [
                { text: '资源加载', link: '/guide/resource/Readme.md' },
                { text: 'GLTF', link: '/guide/resource/gltf.md' }
            ]
        },
        {
            text: '动画',
            collapsible: true,
            items: [
                { text: 'TBD', link: '' },
            ]
        },
        {
            text: '粒子',
            collapsible: true,
            items: [
                { text: 'TBD', link: '' },
            ]
        },
        {
            text: '物理',
            collapsible: true,
            items: [
                { text: 'TBD', link: '' },
            ]
        },
        {
            text: '用户界面',
            collapsible: true,
            items: [
                { text: 'TBD', link: '' },
            ]
        },
        {
            text: '性能调试',
            collapsible: true,
            items: [
                { text: 'TBD', link: '' },
            ]
        },
        {
            text: '工具库',
            collapsible: true,
            items: [
                { text: '数学', link: '/guide/tools/math.md' }
            ]
        },
        {
            text: '高级功能',
            collapsible: true,
            items: [
                {
                    text: 'WebGL Shader',
                    link: '/guide/advanced/shader/shader_intro.md',
                    items: [
                        {
                            text: 'RenderShader',
                            link: '/guide/advanced/shader/shader_material.md'
                        },
                        {
                            text: '代码引用',
                            link: '/guide/advanced/shader/shader_include.md'
                        },
                        {
                            text: '代码宏',
                            link: '/guide/advanced/shader/shader_define.md'
                        },
                        {
                            text: '着色器变体',
                            link: '/guide/advanced/shader/shader_variants.md'
                        },
                        {
                            text: '着色器内置变量',
                            link: '/guide/advanced/shader/shader_internal.md'
                        },
                        {
                            text: '自定义材质示例',
                            link: '/guide/advanced/shader/shader_unlit.md'
                        },
                    ]
                },
                {
                    text: 'WebGPU Shader',
                    link: '/guide/advanced/shader/shader_intro.md',
                    items: [
                        {
                            text: 'RenderShader',
                            link: '/guide/advanced/shader/shader_material.md'
                        },
                        {
                            text: '代码引用',
                            link: '/guide/advanced/shader/shader_include.md'
                        },
                        {
                            text: '代码宏',
                            link: '/guide/advanced/shader/shader_define.md'
                        },
                        {
                            text: '着色器变体',
                            link: '/guide/advanced/shader/shader_variants.md'
                        },
                        {
                            text: '着色器内置变量',
                            link: '/guide/advanced/shader/shader_internal.md'
                        },
                        {
                            text: '自定义材质示例',
                            link: '/guide/advanced/shader/shader_unlit.md'
                        },
                        {
                            text: 'ComputeShader',
                            link: '/guide/advanced/shader/shader_compute.md'
                        }
                    ]
                },
                {
                    text: '后处理特效',
                    link: '/guide/advanced/posteffect.md',
                    items: [
                        {
                            text: 'DepthOfFieldPost',
                            link: '/guide/advanced/post_depthOfField.md'
                        },
                        {
                            text: 'SSRPost',
                            link: '/guide/advanced/post_ssr.md'
                        },
                        {
                            text: 'OutlinePost',
                            link: '/guide/advanced/post_outline.md'
                        },
                        {
                            text: 'GlobalFog',
                            link: '/guide/advanced/post_globalfog.md'
                        },
                        {
                            text: 'HDRBloomPost',
                            link: '/guide/advanced/post_bloom.md'
                        },
                        {
                            text: 'GTAOPost',
                            link: '/guide/advanced/post_gtao.md'
                        },
                        { text: 'TAAPost', link: '/guide/advanced/post_taa.md' }
                    ]
                }
            ]
        }
    ]
}

function sidebar(root: string = '', packages: string) {
    const index: { [key: string]: { text: string; link: string }[] } = {}
    const mds = readFileSync(`${__dirname}/../${packages}/index.md`, 'utf-8').match(/.*.(\n|\r)/g) as string[]
    let lastTitle = ''
    for (let line of mds) {
        if (line.match(/# @/)) continue
        else if (line.match(/##\s\w+/)) {
            lastTitle = line.slice(3, -1).trim()
            index[lastTitle] = []
        } else {
            let text = line.match(/\w+/)
            let md = line.match(/\w+\/\w+\.md/)
            if (md && text) {
                index[lastTitle].push({
                    text: text[0],
                    link: `${root}/${packages}/${md[0]}`
                })
            }
        }
    }
    const sidebar: SidebarItem = [
        {
            text: 'Packages',
            items: [
                {
                    text: '@poly-engine/core',
                    link: '/api/core/'
                },
                {
                    text: '@poly-engine/asset',
                    link: '/api/asset/'
                },
                {
                    text: '@poly-engine/input',
                    link: '/api/input/'
                },
                {
                    text: '@poly-engine/transform',
                    link: '/api/transform/'
                },
                {
                    text: '@poly-engine/render',
                    link: '/api/render/'
                },
                {
                    text: '@poly-engine/controls',
                    link: '/api/controls/'
                }
            ]
        }
    ]
    for (let i in index) {
        sidebar.push({
            text: i,
            collapsible: true,
            collapsed: false,
            items: index[i]
        })
    }
    return sidebar
}
function sidebarExample(root: string = '') {
    const index: { [key: string]: string[] } = {
        Animation: [],
        Camera: [],
        Light: [],
        Material: [],
        Texture: [],
        Benchmark: [],
        Advance: []
    }

    const examples: SidebarItem = []
    for (let i in index) {
        const mds = readdirSync(__dirname + '/../example/' + i, 'utf-8').filter((v) => /\.md$/.test(v))
        examples.push({
            text: i,
            collapsible: true,
            collapsed: false,
            items: mds.map((v: string) => {
                return {
                    text: v.slice(0, -3),
                    link: `${root}/example/${i}/${v}`
                }
            })
        })
    }
    return examples
}
