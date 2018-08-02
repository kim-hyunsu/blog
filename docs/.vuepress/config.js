module.exports = {
    base: '/blog/',
    title: 'For Dirac',
    head: [
        ['link', { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }],
        ['link', { rel: 'icon', href: '/favicon.ico', type: 'image/x-icon' }]
    ],
    ga: undefined,
    serviceWorker: true,
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        sidebar: [
            {
                title: 'Paper Reviews',
                children: [
                    'paper-reviews/one'
                ]
            }
        ]
    }
}
