var app = new Vue({
    el: '#portfolio',
    data: {
        items: [
            { id: 'vrcave-web', format: 'jpg', tags: ['all', 'web', 'video', 'branding','ux'], alt: 'vrCAVE - Website Redesign' },
            { id: 'arnet-web', format: 'jpg', tags: ['all', 'web', 'branding','ux'], alt: 'ARNET - Website Redesign' },
            { id: 'alignvr-web', format: 'jpg', tags: ['all', 'web'], alt: 'AlignVR - Website Design' },
            { id: 'qa-bakery', format: 'jpg', tags: ['all', 'graphic'], alt: 'QA Bakery Infographic - Internal Communications' },
            { id: 'carna-awards', format: 'jpg', tags: ['all', 'web', 'graphic', 'branding', 'video'], alt: 'CARNA Awards - Event Marketing Campaign' },
            { id: 'carna-annual-report', format: 'jpg', tags: ['all', 'graphic', 'video', 'branding'], alt: 'CARNA Annual Report' },
            { id: 'tasko-parking', format: 'png', tags: ['all', 'graphic', 'branding'], alt: 'Tasko Parking - Logo Design' },
            { id: 'gamification-poster', format: 'jpg', tags: ['all', 'graphic'], alt: 'The Gamification of Jurisprudence research poster' },
            { id: 'bear-beer', format: 'jpg', tags: ['all', 'graphic', 'branding'], alt: 'Bear Beer - Contest Marketing Campaign' },
            { id: 'world-junior-team1260', format: 'jpg', tags: ['all', 'graphic', 'branding'], alt: '2012 World Junior Championship coverage advertisements' },
            { id: 'cars-with-stars', format: 'jpg', tags: ['all', 'graphic', 'branding'], alt: 'Cars with Stars - Contest Marketing Campaign' },
            { id: 'love-ya-party', format: 'jpg', tags: ['all', 'graphic', 'branding'], alt: '"Love Ya!" Party - Event Marketing Campaign' },
            { id: 'make-a-better-city', format: 'jpg', tags: ['all', 'graphic'], alt: 'Make A Better City Classroom Program' }
        ],
        currentTag: 'all'
    },
    computed: {
        filteredItems: function () {
            var filter = this.currentTag;
            return this.items.filter(function (item) {
                return item.tags.indexOf(filter) !== -1;
            });
        }
    },
    methods: {
        filter: function (tag) {
            this.currentTag = tag;
        },
        itemHasTag: function (tags, tag) {
            return tags.indexOf(tag) !== -1;
        }
    }
})