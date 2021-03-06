routes.$inject = ['$stateProvider'];

export default function routes($stateProvider) {
    $stateProvider.state('index', {
        url: '/admin',
        views: {
            'header': {
                templateUrl: 'pages/sample/views/layouts/header.html'
            },
            'footer': {
                templateUrl: 'pages/sample/views/layouts/footer.html'
            },
            'contents': {
                templateUrl: 'pages/sample/views/layouts/main-content.html'
            }
        }
    }).state('route1', {
        abstract: true,
        url: '/admin/:contentName/:subContentName',
        views: {
            'header': {
                templateUrl: 'pages/sample/views/layouts/header.html'
            },
            'footer': {
                templateUrl: 'pages/sample/views/layouts/footer.html'
            },
            'contents': {
                templateUrl: 'pages/sample/views/layouts/sub-contents.html'
            }
        }
    }).state('route1.body', {
        url: "",
        templateUrl: function ($stateParams) {
            var contentName = $stateParams.contentName;
            if ($stateParams.contentName != 'route1' && $stateParams.contentName != 'route2') {
                contentName = "otherwise";
            }
            return '/pages/sample/views/contents/' + contentName + '.html';
        }
    });
}
