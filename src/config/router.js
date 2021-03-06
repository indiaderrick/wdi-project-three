import exhibitionIndexCtrl from '../controllers/exhibitions/exhibitionIndexCtrl';
import exhibitionShowCtrl from '../controllers/exhibitions/exhibitionShowCtrl';
import exhibitionNewCtrl from '../controllers/exhibitions/exhibitionNewCtrl';
import galleryIndexCtrl from '../controllers/galleries/galleryIndexCtrl';
import galleryShowCtrl from '../controllers/galleries/galleryShowCtrl';
import galleryNewCtrl from '../controllers/galleries/galleryNewCtrl';
import galleryEditCtrl from '../controllers/galleries/galleryEditCtrl';
import registerCtrl from '../controllers/auth/registerCtrl';
import loginCtrl from '../controllers/auth/loginCtrl';
import homeCtrl from '../controllers/homeCtrl';
import userProfileCtrl from '../controllers/auth/userProfileCtrl';
import exhibitionEditCtrl from '../controllers/exhibitions/exhibitionEditCtrl';
// import mapCtrl from '../controllers/mapCtrl';

// NOTE: This function runs before the state is loaded IF the state has
// resolve: { secureRoute } on it.
function secureRoute($auth, $state, Flash) {
  if (!$auth.isAuthenticated()) {
    Flash.create('info', 'Please log in');
    $state.go('login');
  }
}


//INDIA:
function Router($urlRouterProvider, $stateProvider) {
  $stateProvider
    .state('login', {
      templateUrl: './views/auth/login.html',
      url: '/login',
      controller: loginCtrl
    })
    .state('register', {
      templateUrl: './views/auth/register.html',
      url: '/register',
      controller: registerCtrl
    })
    .state('home', {
      templateUrl: './views/home.html',
      url: '/',
      controller: homeCtrl
    })
    .state('exhibitionIndex', {
      templateUrl: './views/exhibitions/exhibitionIndex.html',
      url: '/exhibitions',
      controller: exhibitionIndexCtrl
    })
    //INDIA:
    .state('exhibitionShow', {
      templateUrl: './views/exhibitions/exhibitionShow.html',
      url: '/exhibitions/:id',
      controller: exhibitionShowCtrl
    })
    .state('galleryIndex', {
      templateUrl: './views/galleries/galleryIndex.html',
      url: '/galleries',
      controller: galleryIndexCtrl
    })
    .state('galleryShow', {
      templateUrl: './views/galleries/galleryShow.html',
      url: '/galleries/:id',
      controller: galleryShowCtrl
    })
    .state('galleryNew', {
      templateUrl: './views/galleries/galleryNew.html',
      url: '/galleries/new',
      controller: galleryNewCtrl,
      resolve: { secureRoute }
    })
    .state('galleryEdit', {
      templateUrl: './views/galleries/galleryEdit.html',
      url: '/galleries/:id/edit',
      controller: galleryEditCtrl,
      resolve: { secureRoute }
    })
    .state('exhibitionEdit', {
      templateUrl: './views/exhibitions/exhibitionEdit.html',
      url: '/exhibitions/:id/edit',
      controller: exhibitionEditCtrl,
      resolve: { secureRoute }
    })
    .state('exhibitionNew', {
      templateUrl: './views/exhibitions/exhibitionNew.html',
      url: '/galleries/:galleryId/new',
      controller: exhibitionNewCtrl,
      resolve: { secureRoute }
    })
    .state('userProfile',{
      templateUrl: './views/auth/userProfile.html',
      url: '/users/:id',
      controller: userProfileCtrl,
      resolve: { secureRoute }
    });

  // NOTE: Redirect to home whenever the url is invalid.
  //       This also adds the #! for us if it's not there!
  $urlRouterProvider.otherwise('/');

}

export default Router;
