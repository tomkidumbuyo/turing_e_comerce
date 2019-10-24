(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div id=\"site-loader\"></div>\n<div id=\"site-container\">\n<div id=\"site-content\">\n<app-header></app-header>\n<router-outlet></router-outlet>\n</div>\n<app-footer></app-footer>\n<div class=\"progress-section\"></div>\n</div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/cart/cart.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN CONTENT ========== -->\n  <main id=\"content\" role=\"main\"  *ngIf=\"products.length > 0\">\n    <!-- Cart Section -->\n    <div class=\"container space-1 space-md-2\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 mb-7 mb-lg-0\">\n          <!-- Title -->\n          <div class=\"d-flex justify-content-between align-items-end border-bottom pb-3 mb-7\">\n            <h1 class=\"h4 mb-0\">Shopping cart</h1>\n            <span>{{products.length}} items</span>\n          </div>\n          <!-- End Title -->\n\n          <form>\n            <!-- Product Content -->\n            <div class=\"border-bottom pb-5 mb-5\" *ngFor=\"let product of products\">\n              <div class=\"row\">\n                <div class=\"col-md-6 mb-3 mb-md-0\">\n                  <div class=\"media\">\n                    <div class=\"max-width-15 w-100 mr-3\">\n                      <img class=\"img-fluid\" src=\"../../assets/img/product_images/{{product.image}}\" alt=\"Image Description\">\n                    </div>\n                    <div class=\"media-body\">\n                      <h2 class=\"h6\">{{product.name}}</h2>\n                      <div class=\"text-secondary font-size-1 mb-1\">\n                        <p>{{product.description| slice:0:40}}</p>\n                      </div>\n                      <div class=\"text-secondary font-size-1 mb-1\">\n                        <span>Price each: </span>\n                        <span>{{product.price}}</span>\n                      </div>\n                      <div class=\"text-secondary font-size-1 mb-1\">\n                        <span>Attributes: </span>\n                        <span>{{product.attributes}}</span>\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n                <div class=\"col-5 col-md-3 offset-md-1\">\n                  <input type=\"number\" class=\"form-control mb-3\" (change)=\"updateCartProduct(product)\" [(ngModel)]=\"product.quantity\" #ctrl=\"ngModel\"  [ngModelOptions]=\"{standalone: true}\" />\n\n\n\n                  <a class=\"d-block text-secondary font-size-1 mb-1\" (click)=\"removeFromCart(product.item_id)\">\n                    <span class=\"far fa-trash-alt mr-1\"></span>\n                    <span>Remove</span>\n                  </a>\n\n                  <!--<a class=\"d-block text-secondary font-size-1\" href=\"javascript:;\">\n                    <span class=\"far fa-heart mr-1\"></span>\n                    <span>Save for later</span>\n                  </a>-->\n                </div>\n\n                <div class=\"col-6 col-md-2 text-md-right\">\n                  <span class=\"font-weight-medium\">${{product.price * product.quantity}}</span>\n                </div>\n              </div>\n            </div>\n            <!-- End Product Content -->\n\n\n\n            <div class=\"d-flex justify-content-end\">\n              <a href=\"/\">\n                <small class=\"fas fa-arrow-left mr-1\"></small>\n                Continue shopping\n              </a>\n            </div>\n          </form>\n        </div>\n\n        <div class=\"col-lg-4\">\n          <div class=\"pl-lg-4\">\n            <!-- Order Summary -->\n            <div class=\"border shadow-soft rounded p-5 mb-4\">\n              <!-- Title -->\n              <div class=\"border-bottom pb-4 mb-4\">\n                <h2 class=\"h5 mb-0\">Order summary</h2>\n              </div>\n              <!-- End Title -->\n\n              <div class=\"border-bottom pb-4 mb-4\">\n                <div class=\"media align-items-center mb-3\">\n                  <h3 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Item subtotal ({{products.length}})</h3>\n                  <div class=\"media-body text-right\">\n                    <span class=\"font-weight-medium\">${{total}}</span>\n                  </div>\n                </div>\n                <!--\n                <div class=\"media align-items-center mb-3\">\n                  <h4 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Delivery</h4>\n                  <div class=\"media-body text-right\">\n                    <span class=\"font-weight-medium\">Free</span>\n                  </div>\n                </div>-->\n\n                <!-- Checkbox --\n                <div class=\"card border-0 mb-3\">\n                  <div class=\"card-body p-0\">\n                    <div class=\"custom-control custom-radio d-flex align-items-center small\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"deliveryRadio1\" name=\"deliveryRadio\" checked>\n                      <label class=\"custom-control-label ml-1\" for=\"deliveryRadio1\">\n                        <span class=\"d-block font-size-1 font-weight-medium mb-1\">Free - Standard delivery</span>\n                        <span class=\"d-block text-muted\">Shipment may take 5-6 business days.</span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <!-- End Checkbox -->\n\n                <!-- Checkbox --\n                <div class=\"card border-0\">\n                  <div class=\"card-body p-0\">\n                    <div class=\"custom-control custom-radio d-flex align-items-center small\">\n                      <input type=\"radio\" class=\"custom-control-input\" id=\"deliveryRadio2\" name=\"deliveryRadio\">\n                      <label class=\"custom-control-label ml-1\" for=\"deliveryRadio2\">\n                        <span class=\"d-block font-size-1 font-weight-medium mb-1\">$7.99 - Express delivery</span>\n                        <span class=\"d-block text-muted\">Shipment may take 2-3 business days.</span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <!-- End Checkbox -->\n              </div>\n\n              <div class=\"media align-items-center mb-3\">\n                <h4 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Estimated tax</h4>\n                <div class=\"media-body text-right\">\n                  <span class=\"font-weight-medium\">--</span>\n                </div>\n              </div>\n\n              <div class=\"media align-items-center mb-4\">\n                <h4 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Total</h4>\n                <div class=\"media-body text-right\">\n                  <span class=\"font-weight-medium\">${{total}}</span>\n                </div>\n              </div>\n\n              <a class=\"btn btn-primary btn-pill transition-3d-hover\" href=\"/checkout\">Checkout</a>\n              <!--<button type=\"submit\" class=\"btn btn-soft-warning btn-pill transition-3d-hover\">\n                <img src=\"../../assets/img/logos/paypal.png\" width=\"70\" alt=\"PayPal logo\">\n              </button>-->\n            </div>\n            <!-- End Order Summary -->\n\n            <!-- Accordion --\n            <div id=\"shopCartAccordion\" class=\"accordion rounded shadow-soft mb-4\">\n              <!-- Card --\n              <div class=\"card rounded\">\n                <div class=\"card-header card-collapse\" id=\"shopCartHeadingOne\">\n                  <h3 class=\"mb-0\">\n                    <button type=\"button\" class=\"btn btn-link btn-block card-btn font-weight-medium collapsed\"\n                            data-toggle=\"collapse\"\n                            data-target=\"#shopCartOne\"\n                            aria-expanded=\"false\"\n                            aria-controls=\"shopCartOne\">\n                      Promo code?\n                      <span class=\"far fa-question-circle text-secondary ml-1\" data-container=\"body\" data-toggle=\"popover\" data-placement=\"top\" data-trigger=\"hover\" title=\"Promo code\" data-content=\"Valid on full priced items only. Some products maybe excluded.\"></span>\n                    </button>\n                  </h3>\n                </div>\n                <div id=\"shopCartOne\" class=\"collapse\" aria-labelledby=\"shopCartHeadingOne\" data-parent=\"#shopCartAccordion\">\n                  <form class=\"js-validate p-5\">\n                    <div class=\"input-group input-group-pill mb-3\">\n                      <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"Promo code\" aria-label=\"Promo code\">\n                      <div class=\"input-group-append\">\n                        <button type=\"submit\" class=\"btn btn-block btn-primary btn-pill\">Apply</button>\n                      </div>\n                    </div>\n                  </form>\n                </div>\n              </div>\n              <!-- End Card --\n            </div>\n            <!-- End Accordion -->\n\n            <!-- Help Link --\n            <div class=\"media align-items-center\">\n              <figure id=\"icon4\" class=\"svg-preloader ie-height-48 w-100 max-width-6 mr-2\">\n                <img class=\"js-svg-injector\" src=\"../../assets/svg/icons/icon-4.svg\" alt=\"SVG\"\n                     data-parent=\"#icon4\">\n              </figure>\n              <div class=\"media-body text-secondary small\">\n                <span class=\"font-weight-medium mr-1\">Need Help?</span>\n                <a class=\"link-muted\" href=\"cart.html#\">Chat now</a>\n              </div>\n            </div>\n            <!-- End Help Link -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Cart Section -->\n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->\n\n   <!-- ========== MAIN CONTENT ========== -->\n  <main id=\"content\" role=\"main\" *ngIf=\"products.length == 0\">\n    <!-- Cart Section -->\n    <div class=\"container space-2 space-lg-3\">\n      <div class=\"w-md-80 w-lg-50 text-center mx-md-auto\">\n        <figure id=\"iconEmptyCart\" class=\"svg-preloader ie-height-111 max-width-15 mx-auto mb-3\">\n          <img class=\"js-svg-injector\" src=\"../../assets/svg/icons/icon-66.svg\" alt=\"SVG\"\n               data-parent=\"#iconEmptyCart\">\n        </figure>\n        <div class=\"mb-5\">\n          <h1 class=\"h3 font-weight-medium\">Your cart is currently empty</h1>\n          <p>Before proceed to checkout you must add some products to your shopping cart. You will find a lot of interesting products on our \"Shop\" page.</p>\n        </div>\n        <a class=\"btn btn-primary btn-pill transition-3d-hover px-5\" href=\"/\">Start Shopping</a>\n      </div>\n    </div>\n    <!-- End Cart Section -->\n\n    <!-- Subscribe Section -->\n    <div class=\"bg-light\">\n      <div class=\"container space-2\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-9 col-lg-6\">\n            <!-- Title -->\n            <div class=\"text-center mb-4\">\n              <h2 class=\"h1 font-weight-medium\">Stay in the know</h2>\n              <p>Get special offers on the latest developments from Front.</p>\n            </div>\n            <!-- End Title -->\n\n            <!-- Subscribe Form -->\n            <form class=\"js-validate js-form-message w-lg-85 mx-lg-auto\">\n              <label class=\"sr-only\" for=\"subscribeSrEmail\">Email address</label>\n              <div class=\"input-group input-group-pill\">\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"subscribeSrEmail\" placeholder=\"Email address\" aria-label=\"Email address\" aria-describedby=\"subscribeButton\" required\n                       data-msg=\"Please enter a valid email address.\">\n                <div class=\"input-group-append\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm-wide\" id=\"subscribeButton\">Join</button>\n                </div>\n              </div>\n            </form>\n            <!-- End Subscribe Form -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Subscribe Section -->\n\n    <!-- Clients Section -->\n    <div class=\"container space-2\">\n      <div class=\"row justify-content-between text-center\">\n        <div class=\"col-4 col-lg-2 mb-5 mb-lg-0\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/hollister.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2 mb-5 mb-lg-0\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/levis.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2 mb-5 mb-lg-0\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/new-balance.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/puma.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/nike.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/tnf.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Clients Section -->\n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/categories/categories.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN CONTENT ========== -->\n  <main id=\"content\" role=\"main\">\n    <!-- Alert Info -->\n    <div class=\"alert bg-info text-center font-size-1 rounded-0 mb-0\" role=\"alert\">\n      <strong class=\"text-uppercase\">30% off</strong> orders above $50 - Use code FRONT30OFF at checkout.\n    </div>\n    <!-- End Alert Info -->\n\n    <!-- Hero Section -->\n    <div class=\"bg-img-hero\" style=\"background-image: url('../../assets/img/1920x800/img19.jpg');\">\n      <div class=\"container space-2 space-lg-3\">\n        <div class=\"w-md-65 w-lg-35\">\n          <div class=\"mb-4\">\n            <h1 class=\"font-weight-semi-bold\">It's never too late</h1>\n            <p class=\"text-dark\">Simplicity is iconic. Minimal design, maximum style. From glasses to street favorite.</p>\n          </div>\n          <a class=\"btn btn-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">Shop Now</a>\n        </div>\n      </div>\n    </div>\n    <!-- End Hero Section -->\n\n    <!-- Categories Section -->\n    <div class=\"container space-2 space-lg-3\">\n      <!-- Title -->\n      <div class=\"w-md-80 w-lg-40 text-center mx-md-auto mb-9\">\n        <h2 class=\"h3 font-weight-medium\">Shop by category</h2>\n      </div>\n      <!-- End Title -->\n\n      <div class=\"row\">\n        <div class=\"col-md-4 mb-5 mb-md-0\">\n          <!-- Card -->\n          <div class=\"card d-block\">\n            <div class=\"card-body d-flex align-items-center p-0\">\n              <div class=\"w-65 border-right\">\n                <img class=\"img-fluid\" src=\"../../assets/img/380x400/img3.jpg\" alt=\"Image Description\">\n              </div>\n              <div class=\"w-35\">\n                <div class=\"border-bottom\">\n                  <img class=\"img-fluid\" src=\"../../assets/img/380x360/img32.jpg\" alt=\"Image Description\">\n                </div>\n                <img class=\"img-fluid\" src=\"../../assets/img/380x360/img33.jpg\" alt=\"Image Description\">\n              </div>\n            </div>\n            <div class=\"card-footer text-center py-4\">\n              <h3 class=\"h5 mb-1\">T-shirts</h3>\n              <span class=\"d-block text-muted font-size-1 mb-3\">Starting from $29.99</span>\n              <a class=\"btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">View All T-shirts</a>\n            </div>\n          </div>\n          <!-- End Card -->\n        </div>\n\n        <div class=\"col-md-4 mb-5 mb-md-0\">\n          <!-- Card -->\n          <div class=\"card d-block\">\n            <div class=\"card-body d-flex align-items-center p-0\">\n              <div class=\"w-65 border-right\">\n                <img class=\"img-fluid\" src=\"../../assets/img/380x400/img4.jpg\" alt=\"Image Description\">\n              </div>\n              <div class=\"w-35\">\n                <div class=\"border-bottom\">\n                  <img class=\"img-fluid\" src=\"../../assets/img/380x360/img34.jpg\" alt=\"Image Description\">\n                </div>\n                <img class=\"img-fluid\" src=\"../../assets/img/380x360/img35.jpg\" alt=\"Image Description\">\n              </div>\n            </div>\n            <div class=\"card-footer text-center py-4\">\n              <h3 class=\"h5 mb-1\">Tech covers</h3>\n              <span class=\"d-block text-muted font-size-1 mb-3\">Starting from $399.99</span>\n              <a class=\"btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">View All Tech covers</a>\n            </div>\n          </div>\n          <!-- End Card -->\n        </div>\n\n        <div class=\"col-md-4\">\n          <!-- Card -->\n          <div class=\"card d-block\">\n            <div class=\"card-body d-flex align-items-center p-0\">\n              <div class=\"w-65 border-right\">\n                <img class=\"img-fluid\" src=\"../../assets/img/380x400/img5.jpg\" alt=\"Image Description\">\n              </div>\n              <div class=\"w-35\">\n                <div class=\"border-bottom\">\n                  <img class=\"img-fluid\" src=\"../../assets/img/380x360/img36.jpg\" alt=\"Image Description\">\n                </div>\n                <img class=\"img-fluid\" src=\"../../assets/img/380x360/img37.jpg\" alt=\"Image Description\">\n              </div>\n            </div>\n            <div class=\"card-footer text-center py-4\">\n              <h3 class=\"h5 mb-1\">Caps</h3>\n              <span class=\"d-block text-muted font-size-1 mb-3\">Starting from $13.99</span>\n              <a class=\"btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">View All Caps</a>\n            </div>\n          </div>\n          <!-- End Card -->\n        </div>\n      </div>\n    </div>\n    <!-- End Categories Section -->\n\n    <!-- Products Section -->\n    <div class=\"container space-bottom-2 space-bottom-lg-3\">\n      <!-- Title -->\n      <div class=\"w-md-80 w-lg-40 text-center mx-md-auto mb-9\">\n        <h2 class=\"h3 font-weight-medium\">What's trending</h2>\n      </div>\n      <!-- End Title -->\n\n      <div class=\"row\">\n        <div class=\"col-6 col-lg-3 mb-5 mb-lg-0\">\n          <!-- Card -->\n          <div class=\"card d-block\">\n            <img class=\"card-img-top\" src=\"../../assets/img/320x320/img6.jpg\" alt=\"Image Description\">\n            <div class=\"card-footer text-center py-4\">\n              <h3 class=\"h5 mb-1\">New releases</h3>\n              <span class=\"d-block text-muted font-size-1 mb-3\">Be well suited</span>\n              <a class=\"btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">View All</a>\n            </div>\n          </div>\n          <!-- End Card -->\n        </div>\n\n        <div class=\"col-6 col-lg-3 mb-5 mb-lg-0\">\n          <!-- Card -->\n          <div class=\"card d-block\">\n            <img class=\"card-img-top\" src=\"../../assets/img/320x320/img7.jpg\" alt=\"Image Description\">\n            <div class=\"card-footer text-center py-4\">\n              <h3 class=\"h5 mb-1\">Sale</h3>\n              <span class=\"d-block text-muted font-size-1 mb-3\">30% off orders $50+</span>\n              <a class=\"btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">View All</a>\n            </div>\n          </div>\n          <!-- End Card -->\n        </div>\n\n        <div class=\"col-6 col-lg-3\">\n          <!-- Card -->\n          <div class=\"card d-block\">\n            <img class=\"card-img-top\" src=\"../../assets/img/320x320/img5.jpg\" alt=\"Image Description\">\n            <div class=\"card-footer text-center py-4\">\n              <h3 class=\"h5 mb-1\">Best sellers</h3>\n              <span class=\"d-block text-muted font-size-1 mb-3\">Pole and interesting</span>\n              <a class=\"btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">View All</a>\n            </div>\n          </div>\n          <!-- End Card -->\n        </div>\n\n        <div class=\"col-6 col-lg-3\">\n          <!-- Card -->\n          <div class=\"card d-block\">\n            <img class=\"card-img-top\" src=\"../../assets/img/320x320/img4.jpg\" alt=\"Image Description\">\n            <div class=\"card-footer text-center py-4\">\n              <h3 class=\"h5 mb-1\">Casual</h3>\n              <span class=\"d-block text-muted font-size-1 mb-3\">Can you casual it?</span>\n              <a class=\"btn btn-sm btn-outline-primary btn-pill transition-3d-hover px-5\" href=\"categories.html#\">View All</a>\n            </div>\n          </div>\n          <!-- End Card -->\n        </div>\n      </div>\n    </div>\n    <!-- End Products Section -->\n\n    <!-- Hero Section -->\n    <div class=\"bg-img-hero-center\" style=\"background-image: url('../../assets/img/1920x800/img20.jpg');\">\n      <div class=\"container space-2 space-lg-3\">\n        <div class=\"w-md-65 w-lg-35\">\n          <div class=\"mb-4\">\n            <h2 class=\"h1 text-white font-weight-semi-bold\">Wear your pride</h2>\n            <p class=\"text-white\">Outdo the sun and refresh your workout with greys, whites and dark brights.</p>\n          </div>\n          <a class=\"btn btn-white btn-pill transition-3d-hover px-5\" href=\"categories.html#\">Shop the Collection</a>\n        </div>\n      </div>\n    </div>\n    <!-- End Hero Section -->\n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout-auth/checkout-auth.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout-auth/checkout-auth.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main id=\"content\" role=\"main\">\n  <!-- Checkout Section -->\n  <div class=\"container space-1 space-md-2\">\n    <div class=\"row\">\n      <div class=\"col-md-6\">\n          <form class=\"js-validate w-md-100 w-lg-75 mx-md-auto\" novalidate=\"novalidate\" [formGroup]=\"loginForm\" (ngSubmit)=\"onLoginSubmit()\">\n              <!-- Title -->\n              <div class=\"mb-7\">\n                <h1 class=\"h3 text-primary font-weight-normal mb-0\">Login</h1>\n                <p>Please log in first</p>\n              </div>\n              <!-- End Title -->\n\n              <!-- Form Group -->\n              <div class=\"js-form-message form-group\">\n                <label class=\"form-label\" for=\"signinSrEmail\">Email address</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"signinSrEmail\" placeholder=\"Email address\" aria-label=\"Email address\" required=\"\" data-msg=\"Please enter a valid email address.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\">\n              </div>\n              <!-- End Form Group -->\n\n              <!-- Form Group -->\n              <div class=\"js-form-message form-group\">\n                <label class=\"form-label\" for=\"signinSrPassword\">Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"signinSrPassword\" placeholder=\"********\" aria-label=\"********\" required=\"\" data-msg=\"Your password is invalid. Please try again.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\">\n              </div>\n              <!-- End Form Group -->\n\n\n\n\n\n              <!-- Button -->\n              <div class=\"row align-items-center mb-5\">\n                  <div class=\"col-12 col-sm-12 \">\n                      <button type=\"button\" class=\"btn btn-primary transition-3d-hover btn-block\" (click)=\"onLoginSubmit()\">Login</button>\n                    </div>\n                </div>\n              <!-- End Button -->\n            </form>\n      </div>\n      <div class=\"col-md-6\">\n          <form class=\"js-validate w-md-100 w-lg-75 mx-md-auto\" novalidate=\"novalidate\"  [formGroup]=\"registerForm\" (ngSubmit)=\"onRegisterSubmit()\">\n              <!-- Title -->\n              <div class=\"mb-7\">\n                <h1 class=\"h3 text-primary font-weight-normal mb-0\">Register</h1>\n                <p>Register if you don't have an account</p>\n              </div>\n              <!-- End Title -->\n\n              <!-- Form Group -->\n              <div class=\"js-form-message form-group\">\n                  <label class=\"form-label\" for=\"signinSrEmail\">Full Name</label>\n                  <input type=\"text\" class=\"form-control\" formControlName=\"name\" id=\"signinSrEmail\" placeholder=\"eg. John Doe\" aria-label=\"full Name\" required=\"\" data-msg=\"Please enter a full name.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\">\n              </div>\n              <!-- End Form Group -->\n\n              <!-- Form Group -->\n              <div class=\"js-form-message form-group\">\n                <label class=\"form-label\" for=\"signinSrEmail\">Email address</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\" id=\"signinSrEmail\" placeholder=\"Email address\" aria-label=\"Email address\" required=\"\" data-msg=\"Please enter a valid email address.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\">\n              </div>\n              <!-- End Form Group -->\n\n              <!-- Form Group -->\n              <div class=\"js-form-message form-group\">\n                <label class=\"form-label\" for=\"signinSrPassword\">Password</label>\n                <input type=\"password\" class=\"form-control\" formControlName=\"password\" id=\"signinSrPassword\" placeholder=\"********\" aria-label=\"********\" required=\"\" data-msg=\"Your password is invalid. Please try again.\" data-error-class=\"u-has-error\" data-success-class=\"u-has-success\">\n              </div>\n              <!-- End Form Group -->\n\n\n              <!-- Button -->\n              <div class=\"row align-items-center mb-5\">\n\n\n                <div class=\"col-12 col-sm-12 text-right\">\n                  <button type=\"button\" class=\"btn btn-primary transition-3d-hover btn-block\" (click) = \"onRegisterSubmit()\">Register</button>\n                </div>\n              </div>\n              <!-- End Button -->\n            </form>\n      </div>\n    </div>\n  </div>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/checkout/checkout.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN CONTENT ========== -->\n<script src=\"https://js.stripe.com/v3/\"></script>\n  <main id=\"content\" role=\"main\">\n    <!-- Checkout Section -->\n    <div class=\"container space-1 space-md-2\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 order-lg-2 mb-7 mb-lg-0\">\n          <div class=\"pl-lg-4\">\n            <!-- Order Summary -->\n            <div class=\"border shadow-soft rounded p-5 mb-4\">\n              <!-- Title -->\n              <div class=\"border-bottom pb-4 mb-4\">\n                <h2 class=\"h5 mb-0\">Order summary</h2>\n              </div>\n              <!-- End Title -->\n\n              <!-- Product Content -->\n              <div class=\"border-bottom pb-4 mb-4\" *ngFor=\"let product of products\">\n                <div class=\"media\">\n                  <div class=\"position-relative max-width-10 w-100 mr-3\">\n                    <img class=\"img-fluid\" src=\"/assets/img/product_images/{{product.image}}\" alt=\"Image Description\">\n                    <span class=\"badge badge-sm badge-primary badge-pos rounded-circle\">{{product.quantity}}</span>\n                  </div>\n                  <div class=\"media-body\">\n                    <h2 class=\"h6\">{{product.tittle}}</h2>\n                    <div class=\"text-secondary font-size-1\">\n                      <span>{{product.description | slice:0:30}}</span>\n\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <!-- End Product Content -->\n\n\n\n              <!-- Fees -->\n              <div class=\"border-bottom pb-4 mb-4\">\n                <div class=\"media align-items-center mb-3\">\n                  <h3 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Item subtotal ({{products.length}})</h3>\n                  <div class=\"media-body text-right\">\n                    <span class=\"font-weight-medium\">${{total}}</span>\n                  </div>\n                </div>\n\n                <div class=\"media align-items-center mb-3\">\n                  <h4 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Delivery</h4>\n                  <div class=\"media-body text-right\">\n                    <span class=\"font-weight-medium\">${{shipingSelectedPrice}}</span>\n                  </div>\n                </div>\n\n                <!-- Checkbox -->\n                <div class=\"card border-0 mb-3\" *ngFor=\"let shipping of shippings \">\n                  <div class=\"card-body p-0\">\n                    <div class=\"custom-control custom-radio d-flex align-items-center small\">\n                      <input type=\"radio\" id=\"a{{shipping.shipping_id}}\" class=\"custom-control-input\" [(ngModel)]=\"shipingSelected\" value=\"{{shipping.shipping_id}}\" (change)=\"shippingChange(shipping)\" checked>\n                      <label class=\"custom-control-label ml-1\" for=\"a{{shipping.shipping_id}}\">\n                        <span class=\"d-block font-size-1 font-weight-medium mb-1\">{{shipping.shipping_cost}} - Standard delivery</span>\n                        <span class=\"d-block text-muted\">{{shipping.shipping_type}}</span>\n                      </label>\n                    </div>\n                  </div>\n                </div>\n                <!-- End Checkbox -->\n\n                <div class=\"media align-items-center\">\n                  <h4 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Estimated tax</h4>\n                  <div class=\"media-body text-right\">\n                    <span class=\"font-weight-medium\">--</span>\n                  </div>\n                </div>\n              </div>\n              <!-- End Fees -->\n\n              <!-- Total -->\n              <div class=\"media align-items-center\">\n                <h4 class=\"text-secondary font-size-1 font-weight-normal mb-0 mr-3\">Total</h4>\n                <div class=\"media-body text-right\">\n                  <span class=\"font-weight-semi-bold\">${{total + shipingSelectedPrice}}</span>\n                </div>\n              </div>\n              <!-- End Total -->\n            </div>\n            <!-- End Order Summary -->\n\n\n          </div>\n        </div>\n\n        <div class=\"col-lg-8 order-lg-1\">\n          <form class=\"js-validate\" [formGroup]=\"checkoutForm\">\n            <div class=\"border-bottom pb-7 mb-7\">\n              <!-- Title -->\n              <div class=\"mb-4\">\n                <h2 class=\"h4\">Billing address</h2>\n              </div>\n              <!-- End Title -->\n\n              <!-- Billing Form -->\n              <div class=\"row\">\n\n                <div class=\"col-md-6\">\n                  <!-- Input -->\n                  <div class=\"js-form-message mb-6\">\n                    <label class=\"form-label\">\n                      Shiping Region\n                    </label>\n                    <select class=\"form-control custom-select\" required\n                            data-msg=\"Please select country.\"\n                            data-error-class=\"u-has-error\"\n                            data-success-class=\"u-has-success\" formControlName=\"shipping_region\" (change)=\"changeRegion()\">\n                            <option *ngFor=\"let region of regions\" value=\"{{region.shipping_region_id}}\">{{region.shipping_region}}</option>\n                          </select>\n                  </div>\n                  <!-- End Input -->\n                </div>\n\n                <div class=\"col-md-6\">\n                  <!-- Input -->\n                  <div class=\"js-form-message mb-6\">\n                    <label class=\"form-label\">\n                      Country\n                      <span class=\"text-danger\">*</span>\n                    </label>\n                    <select formControlName=\"country\" class=\"form-control custom-select\" required\n                            data-msg=\"Please select country.\"\n                            data-error-class=\"u-has-error\"\n                            data-success-class=\"u-has-success\">\n                      <option value=\"AF\">Afghanistan</option>\n                      <option value=\"AX\">Åland Islands</option>\n                      <option value=\"AL\">Albania</option>\n                      <option value=\"DZ\">Algeria</option>\n                      <option value=\"AS\">American Samoa</option>\n                      <option value=\"AD\">Andorra</option>\n                      <option value=\"AO\">Angola</option>\n                      <option value=\"AI\">Anguilla</option>\n                      <option value=\"AQ\">Antarctica</option>\n                      <option value=\"AG\">Antigua and Barbuda</option>\n                      <option value=\"AR\">Argentina</option>\n                      <option value=\"AM\">Armenia</option>\n                      <option value=\"AW\">Aruba</option>\n                      <option value=\"AU\">Australia</option>\n                      <option value=\"AT\">Austria</option>\n                      <option value=\"AZ\">Azerbaijan</option>\n                      <option value=\"BS\">Bahamas</option>\n                      <option value=\"BH\">Bahrain</option>\n                      <option value=\"BD\">Bangladesh</option>\n                      <option value=\"BB\">Barbados</option>\n                      <option value=\"BY\">Belarus</option>\n                      <option value=\"BE\">Belgium</option>\n                      <option value=\"BZ\">Belize</option>\n                      <option value=\"BJ\">Benin</option>\n                      <option value=\"BM\">Bermuda</option>\n                      <option value=\"BT\">Bhutan</option>\n                      <option value=\"BO\">Bolivia, Plurinational State of</option>\n                      <option value=\"BQ\">Bonaire, Sint Eustatius and Saba</option>\n                      <option value=\"BA\">Bosnia and Herzegovina</option>\n                      <option value=\"BW\">Botswana</option>\n                      <option value=\"BV\">Bouvet Island</option>\n                      <option value=\"BR\">Brazil</option>\n                      <option value=\"IO\">British Indian Ocean Territory</option>\n                      <option value=\"BN\">Brunei Darussalam</option>\n                      <option value=\"BG\">Bulgaria</option>\n                      <option value=\"BF\">Burkina Faso</option>\n                      <option value=\"BI\">Burundi</option>\n                      <option value=\"KH\">Cambodia</option>\n                      <option value=\"CM\">Cameroon</option>\n                      <option value=\"CA\">Canada</option>\n                      <option value=\"CV\">Cape Verde</option>\n                      <option value=\"KY\">Cayman Islands</option>\n                      <option value=\"CF\">Central African Republic</option>\n                      <option value=\"TD\">Chad</option>\n                      <option value=\"CL\">Chile</option>\n                      <option value=\"CN\">China</option>\n                      <option value=\"CX\">Christmas Island</option>\n                      <option value=\"CC\">Cocos (Keeling) Islands</option>\n                      <option value=\"CO\">Colombia</option>\n                      <option value=\"KM\">Comoros</option>\n                      <option value=\"CG\">Congo</option>\n                      <option value=\"CD\">Congo, the Democratic Republic of the</option>\n                      <option value=\"CK\">Cook Islands</option>\n                      <option value=\"CR\">Costa Rica</option>\n                      <option value=\"CI\">Côte d'Ivoire</option>\n                      <option value=\"HR\">Croatia</option>\n                      <option value=\"CU\">Cuba</option>\n                      <option value=\"CW\">Curaçao</option>\n                      <option value=\"CY\">Cyprus</option>\n                      <option value=\"CZ\">Czech Republic</option>\n                      <option value=\"DK\">Denmark</option>\n                      <option value=\"DJ\">Djibouti</option>\n                      <option value=\"DM\">Dominica</option>\n                      <option value=\"DO\">Dominican Republic</option>\n                      <option value=\"EC\">Ecuador</option>\n                      <option value=\"EG\">Egypt</option>\n                      <option value=\"SV\">El Salvador</option>\n                      <option value=\"GQ\">Equatorial Guinea</option>\n                      <option value=\"ER\">Eritrea</option>\n                      <option value=\"EE\">Estonia</option>\n                      <option value=\"ET\">Ethiopia</option>\n                      <option value=\"FK\">Falkland Islands (Malvinas)</option>\n                      <option value=\"FO\">Faroe Islands</option>\n                      <option value=\"FJ\">Fiji</option>\n                      <option value=\"FI\">Finland</option>\n                      <option value=\"FR\">France</option>\n                      <option value=\"GF\">French Guiana</option>\n                      <option value=\"PF\">French Polynesia</option>\n                      <option value=\"TF\">French Southern Territories</option>\n                      <option value=\"GA\">Gabon</option>\n                      <option value=\"GM\">Gambia</option>\n                      <option value=\"GE\">Georgia</option>\n                      <option value=\"DE\">Germany</option>\n                      <option value=\"GH\">Ghana</option>\n                      <option value=\"GI\">Gibraltar</option>\n                      <option value=\"GR\">Greece</option>\n                      <option value=\"GL\">Greenland</option>\n                      <option value=\"GD\">Grenada</option>\n                      <option value=\"GP\">Guadeloupe</option>\n                      <option value=\"GU\">Guam</option>\n                      <option value=\"GT\">Guatemala</option>\n                      <option value=\"GG\">Guernsey</option>\n                      <option value=\"GN\">Guinea</option>\n                      <option value=\"GW\">Guinea-Bissau</option>\n                      <option value=\"GY\">Guyana</option>\n                      <option value=\"HT\">Haiti</option>\n                      <option value=\"HM\">Heard Island and McDonald Islands</option>\n                      <option value=\"VA\">Holy See (Vatican City State)</option>\n                      <option value=\"HN\">Honduras</option>\n                      <option value=\"HK\">Hong Kong</option>\n                      <option value=\"HU\">Hungary</option>\n                      <option value=\"IS\">Iceland</option>\n                      <option value=\"IN\">India</option>\n                      <option value=\"ID\">Indonesia</option>\n                      <option value=\"IR\">Iran, Islamic Republic of</option>\n                      <option value=\"IQ\">Iraq</option>\n                      <option value=\"IE\">Ireland</option>\n                      <option value=\"IM\">Isle of Man</option>\n                      <option value=\"IL\">Israel</option>\n                      <option value=\"IT\">Italy</option>\n                      <option value=\"JM\">Jamaica</option>\n                      <option value=\"JP\">Japan</option>\n                      <option value=\"JE\">Jersey</option>\n                      <option value=\"JO\">Jordan</option>\n                      <option value=\"KZ\">Kazakhstan</option>\n                      <option value=\"KE\">Kenya</option>\n                      <option value=\"KI\">Kiribati</option>\n                      <option value=\"KP\">Korea, Democratic People's Republic of</option>\n                      <option value=\"KR\">Korea, Republic of</option>\n                      <option value=\"KW\">Kuwait</option>\n                      <option value=\"KG\">Kyrgyzstan</option>\n                      <option value=\"LA\">Lao People's Democratic Republic</option>\n                      <option value=\"LV\">Latvia</option>\n                      <option value=\"LB\">Lebanon</option>\n                      <option value=\"LS\">Lesotho</option>\n                      <option value=\"LR\">Liberia</option>\n                      <option value=\"LY\">Libya</option>\n                      <option value=\"LI\">Liechtenstein</option>\n                      <option value=\"LT\">Lithuania</option>\n                      <option value=\"LU\">Luxembourg</option>\n                      <option value=\"MO\">Macao</option>\n                      <option value=\"MK\">Macedonia, the former Yugoslav Republic of</option>\n                      <option value=\"MG\">Madagascar</option>\n                      <option value=\"MW\">Malawi</option>\n                      <option value=\"MY\">Malaysia</option>\n                      <option value=\"MV\">Maldives</option>\n                      <option value=\"ML\">Mali</option>\n                      <option value=\"MT\">Malta</option>\n                      <option value=\"MH\">Marshall Islands</option>\n                      <option value=\"MQ\">Martinique</option>\n                      <option value=\"MR\">Mauritania</option>\n                      <option value=\"MU\">Mauritius</option>\n                      <option value=\"YT\">Mayotte</option>\n                      <option value=\"MX\">Mexico</option>\n                      <option value=\"FM\">Micronesia, Federated States of</option>\n                      <option value=\"MD\">Moldova, Republic of</option>\n                      <option value=\"MC\">Monaco</option>\n                      <option value=\"MN\">Mongolia</option>\n                      <option value=\"ME\">Montenegro</option>\n                      <option value=\"MS\">Montserrat</option>\n                      <option value=\"MA\">Morocco</option>\n                      <option value=\"MZ\">Mozambique</option>\n                      <option value=\"MM\">Myanmar</option>\n                      <option value=\"NA\">Namibia</option>\n                      <option value=\"NR\">Nauru</option>\n                      <option value=\"NP\">Nepal</option>\n                      <option value=\"NL\">Netherlands</option>\n                      <option value=\"NC\">New Caledonia</option>\n                      <option value=\"NZ\">New Zealand</option>\n                      <option value=\"NI\">Nicaragua</option>\n                      <option value=\"NE\">Niger</option>\n                      <option value=\"NG\">Nigeria</option>\n                      <option value=\"NU\">Niue</option>\n                      <option value=\"NF\">Norfolk Island</option>\n                      <option value=\"MP\">Northern Mariana Islands</option>\n                      <option value=\"NO\">Norway</option>\n                      <option value=\"OM\">Oman</option>\n                      <option value=\"PK\">Pakistan</option>\n                      <option value=\"PW\">Palau</option>\n                      <option value=\"PS\">Palestinian Territory, Occupied</option>\n                      <option value=\"PA\">Panama</option>\n                      <option value=\"PG\">Papua New Guinea</option>\n                      <option value=\"PY\">Paraguay</option>\n                      <option value=\"PE\">Peru</option>\n                      <option value=\"PH\">Philippines</option>\n                      <option value=\"PN\">Pitcairn</option>\n                      <option value=\"PL\">Poland</option>\n                      <option value=\"PT\">Portugal</option>\n                      <option value=\"PR\">Puerto Rico</option>\n                      <option value=\"QA\">Qatar</option>\n                      <option value=\"RE\">Réunion</option>\n                      <option value=\"RO\">Romania</option>\n                      <option value=\"RU\">Russian Federation</option>\n                      <option value=\"RW\">Rwanda</option>\n                      <option value=\"BL\">Saint Barthélemy</option>\n                      <option value=\"SH\">Saint Helena, Ascension and Tristan da Cunha</option>\n                      <option value=\"KN\">Saint Kitts and Nevis</option>\n                      <option value=\"LC\">Saint Lucia</option>\n                      <option value=\"MF\">Saint Martin (French part)</option>\n                      <option value=\"PM\">Saint Pierre and Miquelon</option>\n                      <option value=\"VC\">Saint Vincent and the Grenadines</option>\n                      <option value=\"WS\">Samoa</option>\n                      <option value=\"SM\">San Marino</option>\n                      <option value=\"ST\">Sao Tome and Principe</option>\n                      <option value=\"SA\">Saudi Arabia</option>\n                      <option value=\"SN\">Senegal</option>\n                      <option value=\"RS\">Serbia</option>\n                      <option value=\"SC\">Seychelles</option>\n                      <option value=\"SL\">Sierra Leone</option>\n                      <option value=\"SG\">Singapore</option>\n                      <option value=\"SX\">Sint Maarten (Dutch part)</option>\n                      <option value=\"SK\">Slovakia</option>\n                      <option value=\"SI\">Slovenia</option>\n                      <option value=\"SB\">Solomon Islands</option>\n                      <option value=\"SO\">Somalia</option>\n                      <option value=\"ZA\">South Africa</option>\n                      <option value=\"GS\">South Georgia and the South Sandwich Islands</option>\n                      <option value=\"SS\">South Sudan</option>\n                      <option value=\"ES\">Spain</option>\n                      <option value=\"LK\">Sri Lanka</option>\n                      <option value=\"SD\">Sudan</option>\n                      <option value=\"SR\">Suriname</option>\n                      <option value=\"SJ\">Svalbard and Jan Mayen</option>\n                      <option value=\"SZ\">Swaziland</option>\n                      <option value=\"SE\">Sweden</option>\n                      <option value=\"CH\">Switzerland</option>\n                      <option value=\"SY\">Syrian Arab Republic</option>\n                      <option value=\"TW\">Taiwan, Province of China</option>\n                      <option value=\"TJ\">Tajikistan</option>\n                      <option value=\"TZ\">Tanzania, United Republic of</option>\n                      <option value=\"TH\">Thailand</option>\n                      <option value=\"TL\">Timor-Leste</option>\n                      <option value=\"TG\">Togo</option>\n                      <option value=\"TK\">Tokelau</option>\n                      <option value=\"TO\">Tonga</option>\n                      <option value=\"TT\">Trinidad and Tobago</option>\n                      <option value=\"TN\">Tunisia</option>\n                      <option value=\"TR\">Turkey</option>\n                      <option value=\"TM\">Turkmenistan</option>\n                      <option value=\"TC\">Turks and Caicos Islands</option>\n                      <option value=\"TV\">Tuvalu</option>\n                      <option value=\"UG\">Uganda</option>\n                      <option value=\"UA\">Ukraine</option>\n                      <option value=\"AE\">United Arab Emirates</option>\n                      <option value=\"GB\">United Kingdom</option>\n                      <option value=\"US\">United States</option>\n                      <option value=\"UM\">United States Minor Outlying Islands</option>\n                      <option value=\"UY\">Uruguay</option>\n                      <option value=\"UZ\">Uzbekistan</option>\n                      <option value=\"VU\">Vanuatu</option>\n                      <option value=\"VE\">Venezuela, Bolivarian Republic of</option>\n                      <option value=\"VN\">Viet Nam</option>\n                      <option value=\"VG\">Virgin Islands, British</option>\n                      <option value=\"VI\">Virgin Islands, U.S.</option>\n                      <option value=\"WF\">Wallis and Futuna</option>\n                      <option value=\"EH\">Western Sahara</option>\n                      <option value=\"YE\">Yemen</option>\n                      <option value=\"ZM\">Zambia</option>\n                      <option value=\"ZW\">Zimbabwe</option>\n                    </select>\n                  </div>\n                  <!-- End Input -->\n                </div>\n\n                <div class=\"col-md-6\">\n                  <!-- Input -->\n                  <div class=\"js-form-message mb-6\">\n                    <label class=\"form-label\">\n                      Street address\n                      <span class=\"text-danger\">*</span>\n                    </label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"streetAddress\" placeholder=\"470 Lucy Forks\" aria-label=\"470 Lucy Forks\" required\n                           data-msg=\"Please enter a valid address.\"\n                           data-error-class=\"u-has-error\"\n                           data-success-class=\"u-has-success\">\n                  </div>\n                  <!-- End Input -->\n                </div>\n\n                <div class=\"col-md-6\">\n                  <!-- Input -->\n                  <div class=\"js-form-message mb-6\">\n                    <label class=\"form-label\">\n                      City / Region\n                      <span class=\"text-danger\">*</span>\n                    </label>\n                    <input type=\"text\" class=\"form-control\" formControlName=\"region\" placeholder=\"London\" aria-label=\"London\" required\n                           data-msg=\"Please enter a valid address.\"\n                           data-error-class=\"u-has-error\"\n                           data-success-class=\"u-has-success\">\n                  </div>\n                  <!-- End Input -->\n                </div>\n\n                <div class=\"w-100\"></div>\n\n                <div class=\"col-12\">\n                  <!-- Checkbox --\n                  <div class=\"js-form-message\">\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center text-muted mb-2\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"termsCheckbox\" formControlName=\"termsCheckbox\" required checked\n                             data-msg=\"Please accept our Terms and Conditions.\">\n                      <label class=\"custom-control-label\" for=\"termsCheckbox\">\n                        <small>My billing and delivery information are the same.</small>\n                      </label>\n                    </div>\n\n                    <div class=\"custom-control custom-checkbox d-flex align-items-center text-muted\">\n                      <input type=\"checkbox\" class=\"custom-control-input\" id=\"subscribeCheckbox\" formControlName=\"subscribeCheckbox\" required checked\n                             data-msg=\"Please accept our Terms and Conditions.\">\n                      <label class=\"custom-control-label\" for=\"subscribeCheckbox\">\n                        <small>Please send me emails with exclusive gear offers, athlete info and expeditions updates from Front</small>\n                      </label>\n                    </div>\n                  </div>\n                  <!-- End Checkbox -->\n                </div>\n              </div>\n              <!-- End Billing Form -->\n            </div>\n\n            <!-- Payment -->\n            <div class=\"mb-7\">\n              <!-- Title -->\n              <div class=\"mb-4\">\n                <h2 class=\"h4\">Payment </h2>\n              </div>\n              <!-- End Title -->\n\n              <!-- Input -->\n              <div class=\"js-form-message mb-6\">\n                <label class=\"form-label\" for=\"card-element\">\n                  Card Information\n                </label>\n                <div id=\"card-element\">\n                    <!-- A Stripe Element will be inserted here. -->\n                  </div>\n                \n                       <small>Try it out using the test card number <b>4242 4242 4242 4242</b>, a random three-digit CVC number, any expiration date in the future, and a random five-digit U.S. ZIP code.</small>\n              </div>\n              <!-- End Input -->\n\n              \n\n              <!-- Button -->\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <a href=\"/cart\"><small class=\"fas fa-arrow-left mr-2\"></small> Return to cart</a>\n                <button type=\"submit\" class=\"btn btn-primary btn-sm-wide btn-pill transition-3d-hover\" (click)=\"placeOrder()\">Place order</button>\n              </div>\n              <!-- End Button -->\n            </div>\n            <!-- End Payment -->\n          </form>\n        </div>\n      </div>\n    </div>\n    <!-- End Checkout Section -->\n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN CONTENT ========== -->\n  <main id=\"content\" role=\"main\">\n    <!-- Hero Section -->\n    <div class=\"position-relative\">\n      <!-- Main Slider -->\n      <div id=\"heroSlider\" class=\"js-slick-carousel u-slick u-slick--equal-height bg-light\"\n           data-fade=\"true\"\n           data-infinite=\"true\"\n           data-autoplay-speed=\"7000\"\n           data-arrows-classes=\"d-none d-lg-inline-block u-slick__arrow u-slick__arrow--flat-white u-slick__arrow-centered--y shadow-soft rounded-circle\"\n           data-arrow-left-classes=\"fas fa-arrow-left u-slick__arrow-inner u-slick__arrow-inner--left ml-lg-5\"\n           data-arrow-right-classes=\"fas fa-arrow-right u-slick__arrow-inner u-slick__arrow-inner--right mr-lg-5\"\n           data-nav-for=\"#heroSliderNav\">\n        <!-- Slide -->\n        <div class=\"js-slide\">\n          <div class=\"container space-top-2 space-bottom-3\">\n            <div class=\"row align-items-lg-center\">\n              <div class=\"col-lg-5 order-lg-2 mb-7 mb-lg-0\">\n                <div class=\"mb-6\">\n                  <h1 class=\"display-4 font-size-md-down-5 font-weight-semi-bold mb-4\">Front original design cap</h1>\n                  <p>As well as being game-changers when it comes to technical innovation, Front has some of the bestselling cap in its locker.</p>\n                </div>\n                <a class=\"btn btn-primary btn-pill transition-3d-hover px-5 mr-2\" href=\"classic.html#\">$59 - Add to Cart</a>\n                <a class=\"btn btn-icon btn-outline-primary rounded-circle\" href=\"classic.html#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Save for later\">\n                  <span class=\"fas fa-heart btn-icon__inner\"></span>\n                </a>\n              </div>\n              <div class=\"col-lg-6 order-lg-1\">\n                <div class=\"w-85 mx-auto\">\n                  <img class=\"img-fluid\" src=\"../../assets/img/mockups/img5.png\" alt=\"Image Description\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- End Slide -->\n\n        <!-- Slide -->\n        <div class=\"js-slide\">\n          <div class=\"container space-top-2 space-bottom-3\">\n            <div class=\"row align-items-lg-center\">\n              <div class=\"col-lg-5 order-lg-2 mb-7 mb-lg-0\">\n                <div class=\"mb-6\">\n                  <h2 class=\"display-4 font-size-md-down-5 font-weight-semi-bold mb-4\">Apple iPad Pro</h2>\n                  <p>It's all new, all screen, and all powerful. Completely redesigned and packed with our most advanced technology, it will make you rethink what iPad is capable of.</p>\n                </div>\n                <a class=\"btn btn-primary btn-pill transition-3d-hover px-5 mr-2\" href=\"classic.html#\">$799 - Add to Cart</a>\n                <a class=\"btn btn-icon btn-outline-primary rounded-circle\" href=\"classic.html#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Save for later\">\n                  <span class=\"fas fa-heart btn-icon__inner\"></span>\n                </a>\n              </div>\n              <div class=\"col-lg-6 order-lg-1\">\n                <div class=\"w-85 mx-auto\">\n                  <img class=\"img-fluid\" src=\"../../assets/img/mockups/img6.png\" alt=\"Image Description\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- End Slide -->\n\n        <!-- Slide -->\n        <div class=\"js-slide\">\n          <div class=\"container space-top-2 space-bottom-3\">\n            <div class=\"row align-items-lg-center\">\n              <div class=\"col-lg-5 order-lg-2 mb-7 mb-lg-0\">\n                <div class=\"mb-6\">\n                  <h3 class=\"display-4 font-size-md-down-5 font-weight-semi-bold mb-4\">Celio hoodie</h3>\n                  <p>Founded in 1985, French label Celio channels 30 years of expertise into its contemporary menswear range. Expect fly style for a city or beach with its denim shorts, chinos and printed jersey.</p>\n                </div>\n                <a class=\"btn btn-primary btn-pill transition-3d-hover px-5 mr-2\" href=\"classic.html#\">$15 - Add to Cart</a>\n                <a class=\"btn btn-icon btn-outline-primary rounded-circle\" href=\"classic.html#\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Save for later\">\n                  <span class=\"fas fa-heart btn-icon__inner\"></span>\n                </a>\n              </div>\n              <div class=\"col-lg-6 order-lg-1\">\n                <div class=\"w-85 mx-auto\">\n                  <img class=\"img-fluid\" src=\"../../assets/img/mockups/img1.png\" alt=\"Image Description\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <!-- End Slide -->\n      </div>\n      <!-- End Main Slider -->\n\n      <!-- Slider Nav -->\n      <div class=\"position-absolute bottom-0 w-100\">\n        <div class=\"container space-bottom-1\">\n          <div id=\"heroSliderNav\" class=\"js-slick-carousel u-slick u-slick--transform-off max-width-27 mx-auto\"\n               data-slides-show=\"3\"\n               data-autoplay-speed=\"7000\"\n               data-infinite=\"true\"\n               data-is-thumbs=\"true\"\n               data-is-thumbs-progress=\"true\"\n               data-thumbs-progress-options='{\n                 \"color\": \"#377dff\",\n                 \"width\": 8\n               }'\n               data-thumbs-progress-container=\".js-slick-thumb-progress\"\n               data-nav-for=\"#heroSlider\">\n            <div class=\"js-slide p-1\">\n              <a class=\"js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1\" href=\"javascript:;\">\n                <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/100x100/img13.jpg\" alt=\"Image Description\">\n              </a>\n            </div>\n            <div class=\"js-slide p-1\">\n              <a class=\"js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1\" href=\"javascript:;\">\n                <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/100x100/img14.jpg\" alt=\"Image Description\">\n              </a>\n            </div>\n            <div class=\"js-slide p-1\">\n              <a class=\"js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1\" href=\"javascript:;\">\n                <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/100x100/img15.jpg\" alt=\"Image Description\">\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- End Slider Nav -->\n    </div>\n    <!-- End Hero Section -->\n\n    <!-- Features Section -->\n    <div class=\"border-bottom\">\n      <div id=\"featuresSVG\" class=\"svg-preloader container space-2\">\n        <div class=\"row\">\n          <div class=\"col-md-4 mb-7 mb-md-0\">\n            <!-- Contacts -->\n            <div class=\"media\">\n              <figure class=\"ie-height-56 w-100 max-width-8 mr-4\">\n                <img class=\"js-svg-injector\" src=\"../../assets/svg/icons/icon-4.svg\" alt=\"SVG\"\n                     data-parent=\"#featuresSVG\">\n              </figure>\n              <div class=\"media-body\">\n                <h4 class=\"h6 mb-1\">24/7 Support</h4>\n                <p class=\"font-size-1 mb-0\">Contact us 24 hours a day, 7 days a week.</p>\n              </div>\n            </div>\n            <!-- End Contacts -->\n          </div>\n\n          <div class=\"col-md-4 mb-7 mb-md-0\">\n            <!-- Contacts -->\n            <div class=\"media\">\n              <figure class=\"ie-height-56 w-100 max-width-8 mr-4\">\n                <img class=\"js-svg-injector\" src=\"../../assets/svg/icons/icon-64.svg\" alt=\"SVG\"\n                     data-parent=\"#featuresSVG\">\n              </figure>\n              <div class=\"media-body\">\n                <h4 class=\"h6 mb-1\">30 Days return</h4>\n                <p class=\"font-size-1 mb-0\">We offer you a full refund within 30 days of purchase.</p>\n              </div>\n            </div>\n            <!-- End Contacts -->\n          </div>\n\n          <div class=\"col-md-4\">\n            <!-- Contacts -->\n            <div class=\"media\">\n              <figure class=\"ie-height-56 w-100 max-width-8 mr-4\">\n                <img class=\"js-svg-injector\" src=\"../../assets/svg/icons/icon-65.svg\" alt=\"SVG\"\n                     data-parent=\"#featuresSVG\">\n              </figure>\n              <div class=\"media-body\">\n                <h4 class=\"h6 mb-1\">Free shipping</h4>\n                <p class=\"font-size-1 mb-0\">Automatically receive free standard shipping on every order.</p>\n              </div>\n            </div>\n            <!-- End Contacts -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Features Section -->\n\n    <!-- Categories Section -->\n    <div class=\"container space-2 space-lg-3\">\n      <!-- Title -->\n      <div class=\"w-md-80 w-lg-40 text-center mx-md-auto mb-9\">\n        <h2 class=\"h3 font-weight-medium\">The better way to shop with Front top-products</h2>\n      </div>\n      <!-- End Title -->\n\n\n\n      <div class=\"row\">\n        <div class=\"col-lg-6 mb-5 mb-lg-0\">\n          <!-- Promo -->\n          <div class=\"bg-img-hero rounded min-height-450 p-4 p-sm-8\" style=\"background-image: url('../../assets/img/900x900/img3.jpg');\">\n            <small class=\"d-block text-danger text-uppercase font-weight-semi-bold\">Limited time only</small>\n            <h2 class=\"display-4 font-weight-semi-bold mb-3\">70% OFF</h2>\n\n            <!-- Countdown -->\n            <div class=\"w-sm-60\">\n              <div class=\"js-countdown row mx-gutters-2 mb-3\"\n                   data-end-date=\"2020/11/30\"\n                   data-month-format=\"%m\"\n                   data-days-format=\"%D\"\n                   data-hours-format=\"%H\"\n                   data-minutes-format=\"%M\">\n                <div class=\"col-4 text-center\">\n                  <div class=\"border border-dark rounded p-2 mb-1\">\n                    <strong class=\"js-cd-days d-block font-size-2\"></strong>\n                  </div>\n                  <h5 class=\"h6 font-weight-normal\">Days</h5>\n                </div>\n                <div class=\"col-4 text-center\">\n                  <div class=\"border border-dark rounded p-2 mb-1\">\n                    <strong class=\"js-cd-hours d-block font-size-2\"></strong>\n                  </div>\n                  <h5 class=\"h6 font-weight-normal\">Hours</h5>\n                </div>\n                <div class=\"col-4 text-center\">\n                  <div class=\"border border-dark rounded p-2 mb-1\">\n                    <strong class=\"js-cd-minutes d-block font-size-2\"></strong>\n                  </div>\n                  <h5 class=\"h6 font-weight-normal\">Mins</h5>\n                </div>\n              </div>\n            </div>\n            <!-- End Countdown -->\n\n            <a class=\"btn btn-sm btn-white btn-pill transition-3d-hover px-5\" href=\"classic.html#\">Shop</a>\n          </div>\n          <!-- End Promo -->\n        </div>\n\n        <div class=\"col-lg-6\">\n          <!-- Promo -->\n          <div class=\"bg-img-hero rounded min-height-450 text-white p-4 p-sm-8\" style=\"background-image: url('../../assets/img/900x900/img4.jpg');\">\n            <div class=\"max-width-35\">\n              <div class=\"mb-4\">\n                <span class=\"d-block font-size-2\">$109.99</span>\n                <h3 class=\"font-weight-semi-bold mb-1\">Nakto 26 Bicycle</h3>\n                <p class=\"text-white\">NAKTO bicycles to save the environment and bring fun to our friends!</p>\n              </div>\n              <div class=\"d-block\">\n                <button type=\"button\" class=\"btn btn-sm btn-white btn-pill transition-3d-hover px-5\">Shop</button>\n              </div>\n            </div>\n          </div>\n          <!-- End Promo -->\n        </div>\n      </div>\n    </div>\n    <!-- End Promo Section -->\n\n    <!-- Products Section -->\n    <div class=\"container space-2 space-lg-3\">\n      <!-- Title -->\n      <div class=\"w-md-80 w-lg-40 text-center mx-md-auto mb-9\">\n        <h2 class=\"h3 font-weight-medium\">What's trending</h2>\n      </div>\n      <!-- End Title -->\n\n      <!-- Products -->\n      <div class=\"row mx-n2 mx-sm-n3 mb-7\">\n        \n        <div *ngFor=\"let product of products\" class=\"col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5\">\n          <!-- Product -->\n          <div class=\"card text-center h-100\">\n            <div class=\"position-relative\">\n              <img class=\"card-img-top\" src=\"../../assets/img/product_images/{{product.image}}\" alt=\"{{product.name}}\">\n\n              <!--<div class=\"position-absolute top-0 left-0 pt-3 pl-3\">\n                <span class=\"badge badge-success badge-pill\">New arrival</span>\n              </div>\n              <div class=\"position-absolute top-0 right-0 pt-3 pr-3\">\n                <button type=\"button\" class=\"btn btn-sm btn-icon btn-outline-secondary rounded-circle\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Save for later\">\n                  <span class=\"fas fa-heart btn-icon__inner\"></span>\n                </button>\n              </div>-->\n            </div>\n\n            <div class=\"card-body pt-4 px-4 pb-0\">\n              <div class=\"mb-2\">\n                <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"classic.html#\">{{product.name}}</a>\n                <h3 class=\"font-size-1 font-weight-normal\">\n                  <a class=\"text-secondary\" href=\"single-product.html\">{{product.description | slice:0:30}}</a>\n                </h3>\n                <div class=\"d-block font-size-1\">\n                  <span class=\"font-weight-medium\">${{product.price}}</span>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"card-footer border-0 pt-0 pb-4 px-4\">\n              \n              <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover\">Add to Cart</button>\n            </div>\n          </div>\n          <!-- End Product -->\n        </div>\n\n       \n      </div>\n      <!-- End Products -->\n\n      <div class=\"text-center\">\n        <a class=\"btn btn-primary btn-pill transition-3d-hover px-5\" href=\"classic.html#\">View Products</a>\n      </div>\n    </div>\n    <!-- End Products Section -->\n\n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/not-found/not-found.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN ========== -->\n  <main id=\"content\" role=\"main\">\n    <!-- Hero Section -->\n    <div class=\"d-lg-flex\">\n      <div class=\"container d-lg-flex align-items-lg-center min-height-lg-100vh space-4\">\n        <div class=\"w-lg-60 w-xl-50\">\n          <!-- Title -->\n          <div class=\"mb-5\">\n            <h1 class=\"text-primary font-weight-normal\">Page not <span class=\"font-weight-semi-bold\">found</span></h1>\n            <p class=\"mb-0\">Oops! Looks like you followed a bad link.</p>\n            <p>If you think this is a problem with us, please <a href=\"error-404.html#\">tell us</a>.</p>\n          </div>\n          <!-- End Title -->\n\n          <a class=\"btn btn-primary btn-wide transition-3d-hover\" href=\"../home/index.html\">Go Back</a>\n        </div>\n      </div>\n    </div>\n    <!-- End Hero Section -->\n  </main>\n  <!-- ========== END MAIN ========== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/partials/footer/footer.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/partials/footer/footer.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- ========== FOOTER ========== -->\n  <footer class=\"container\">\n \n\n    <hr class=\"my-0\">\n\n    <div class=\"row align-items-md-center space-1\">\n      <div class=\"col-md-4 mb-4 mb-lg-0\">\n        <!-- Social Networks -->\n        <ul class=\"list-inline mb-0\">\n          <li class=\"list-inline-item\">\n            <a class=\"btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent\" href=\"facebook.com\">\n              <span class=\"fab fa-facebook-f btn-icon__inner\"></span>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a class=\"btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent\" href=\"google.com\">\n              <span class=\"fab fa-google btn-icon__inner\"></span>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a class=\"btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent\" href=\"twitter.com\">\n              <span class=\"fab fa-twitter btn-icon__inner\"></span>\n            </a>\n          </li>\n          <li class=\"list-inline-item\">\n            <a class=\"btn btn-sm btn-icon btn-soft-secondary btn-bg-transparent\" href=\"github.com\">\n              <span class=\"fab fa-github btn-icon__inner\"></span>\n            </a>\n          </li>\n        </ul>\n        <!-- End Social Networks -->\n      </div>\n\n      <div class=\"col-md-8 text-md-right\">\n        <!-- Links -->\n        <ul class=\"list-inline list-group-flush list-group-borderless mb-0\">\n          <li class=\"list-inline-item pl-3\">\n            <a class=\"list-group-item-action font-size-1\" href=\"\">Privacy &amp; policy</a>\n          </li>\n          <li class=\"list-inline-item pl-3\">\n            <a class=\"list-group-item-action font-size-1\" href=\"\">Terms &amp; conditions</a>\n          </li>\n          <li class=\"list-inline-item pl-3\">\n            <a class=\"list-group-item-action font-size-1\" href=\"\">Careers</a>\n          </li>\n        </ul>\n        <!-- End Links -->\n      </div>\n    </div>\n  </footer>\n  <!-- ========== END FOOTER ========== -->\n\n\n  <script>\n    $(window).on('load', function () {\n\n      console.log('footer initialized');\n\n      // initialization of HSMegaMenu component\n      $('.js-mega-menu').HSMegaMenu({\n        event: 'hover',\n        pageContainer: $('.container'),\n        breakpoint: 767.98,\n        hideTimeOut: 0\n      });\n\n      // initialization of svg injector module\n      $.HSCore.components.HSSVGIngector.init('.js-svg-injector');\n    });\n\n    $(document).on('ready', function () {\n      // initialization of header\n      $.HSCore.components.HSHeader.init($('#header'));\n\n      // initialization of unfold component\n      $.HSCore.components.HSUnfold.init($('[data-unfold-target]'), {\n        afterOpen: function () {\n          $(this).find('input[type=\"search\"]').focus();\n        }\n      });\n\n      // initialization of malihu scrollbar\n      $.HSCore.components.HSMalihuScrollBar.init($('.js-scrollbar'));\n\n      // initialization of forms\n      $.HSCore.components.HSFocusState.init();\n\n      // initialization of form validation\n      $.HSCore.components.HSValidation.init('.js-validate', {\n        rules: {\n          confirmPassword: {\n            equalTo: '#signupPassword'\n          }\n        }\n      });\n\n      // initialization of show animations\n      $.HSCore.components.HSShowAnimation.init('.js-animation-link');\n\n      // initialization of slick carousel\n      $.HSCore.components.HSSlickCarousel.init('.js-slick-carousel');\n\n      // initialization of countdowns\n      var countdowns = $.HSCore.components.HSCountdown.init('.js-countdown', {\n        yearsElSelector: '.js-cd-years',\n        daysElSelector: '.js-cd-days',\n        hoursElSelector: '.js-cd-hours',\n        minutesElSelector: '.js-cd-minutes',\n        secondsElSelector: '.js-cd-seconds'\n      });\n\n      // initialization of go to\n      $.HSCore.components.HSGoTo.init('.js-go-to');\n    });\n  </script>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/partials/header/header.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/partials/header/header.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <!-- ========== HEADER ========== -->\n  <header id=\"header\" class=\"u-header\">\n    <!-- Search -->\n    <div id=\"searchPushTop\" class=\"u-search-push-top\">\n      <div class=\"container position-relative\">\n        <div class=\"u-search-push-top__content\">\n          <!-- Close Button -->\n          <button type=\"button\" class=\"close u-search-push-top__close-btn\"\n                  aria-haspopup=\"true\"\n                  aria-expanded=\"false\"\n                  aria-controls=\"searchPushTop\"\n                  data-unfold-type=\"jquery-slide\"\n                  data-unfold-target=\"#searchPushTop\">\n            <span aria-hidden=\"true\">&times;</span>\n          </button>\n          <!-- End Close Button -->\n\n          <!-- Input -->\n          <form class=\"js-focus-state input-group\" #login = \"ngForm\" (ngSubmit) = \"onClickSubmit(login.value)\">\n            <input type=\"search\" class=\"form-control\" placeholder=\"Search Front\" aria-label=\"Search Front\" name=\"search\" ngModel>\n            <div class=\"input-group-append\">\n              <button type=\"submit\" class=\"btn btn-primary\" >Search</button>\n            </div>\n          </form>\n          <!-- End Input -->\n\n          <!-- Content --\n          <div class=\"row d-none d-md-flex mt-7\">\n            <div class=\"col-sm-6\">\n              <strong class=\"d-block mb-2\">Quick Links</strong>\n\n              <div class=\"row\">\n                <!-- List Group --\n                <div class=\"col-6\">\n                  <div class=\"list-group list-group-transparent list-group-flush list-group-borderless\">\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      Search Results List\n                    </a>\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      Search Results Grid\n                    </a>\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      About\n                    </a>\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      Services\n                    </a>\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      Invoice\n                    </a>\n                  </div>\n                </div>\n                <!-- End List Group --\n\n                <!-- List Group --\n                <div class=\"col-6\">\n                  <div class=\"list-group list-group-transparent list-group-flush list-group-borderless\">\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      Profile\n                    </a>\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      User Contacts\n                    </a>\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      Reviews\n                    </a>\n                    <a class=\"list-group-item list-group-item-action\" href=\"classic.html#\">\n                      <span class=\"fas fa-angle-right list-group-icon\"></span>\n                      Settings\n                    </a>\n                  </div>\n                </div>\n                <!-- End List Group --\n              </div>\n            </div>\n\n            <div class=\"col-sm-6\">\n              <!-- Banner --\n              <div class=\"rounded u-search-push-top__banner\">\n                <div class=\"d-flex align-items-center\">\n                  <div class=\"u-search-push-top__banner-container\">\n                    <img class=\"img-fluid u-search-push-top__banner-img\" src=\"../../assets/img/mockups/img3.png\" alt=\"Image Description\">\n                    <img class=\"img-fluid u-search-push-top__banner-img\" src=\"../../assets/img/mockups/img2.png\" alt=\"Image Description\">\n                  </div>\n\n                  <div>\n                    <div class=\"mb-4\">\n                      <strong class=\"d-block mb-2\">Featured Item</strong>\n                      <p>Create astonishing web sites and pages.</p>\n                    </div>\n                    <a class=\"btn btn-xs btn-soft-success transition-3d-hover\" href=\"https://htmlstream.com/preview/front-v2.9.2/html/shop/index.html\">Apply Now <span class=\"fas fa-angle-right ml-2\"></span></a>\n                  </div>\n                </div>\n              </div>\n              <!-- End Banner --\n            </div>\n          </div>\n          <!-- End Content -->\n        </div>\n      </div>\n    </div>\n    <!-- End Search -->\n\n    <div class=\"u-header__section\">\n      <div id=\"logoAndNav\" class=\"container\">\n        <!-- Nav -->\n        <nav class=\"js-mega-menu navbar navbar-expand-md u-header__navbar u-header__navbar--no-space\">\n          <!-- Logo -->\n          <a class=\"navbar-brand u-header__navbar-brand u-header__navbar-brand-center\" href=\"/\" aria-label=\"Front\">\n            \n            <span class=\"u-header__navbar-brand-text\">Turing eCommerce</span>\n          </a>\n          <!-- End Logo -->\n\n          <!-- Responsive Toggle Button -->\n          <button type=\"button\" class=\"navbar-toggler btn u-hamburger\"\n                  aria-label=\"Toggle navigation\"\n                  aria-expanded=\"false\"\n                  aria-controls=\"navBar\"\n                  data-toggle=\"collapse\"\n                  data-target=\"#navBar\">\n            <span id=\"hamburgerTrigger\" class=\"u-hamburger__box\">\n              <span class=\"u-hamburger__inner\"></span>\n            </span>\n          </button>\n          <!-- End Responsive Toggle Button -->\n\n          <!-- Navigation -->\n          <div id=\"navBar\" class=\"collapse navbar-collapse u-header__navbar-collapse\">\n            <ul class=\"navbar-nav u-header__navbar-nav\">\n\n                <li  class=\"nav-item u-header__nav-item\">\n                  <a  class=\"nav-link u-header__nav-link \" href=\"/cart\">Cart</a>\n                </li>\n                   \n              <!--\n                <li *ngFor=\"let department of departments\" class=\"nav-item u-header__nav-item\">\n                  <a  class=\"nav-link u-header__nav-link \" href=\"javascript:;\">{{department.name}}</a>\n                </li>\n\n              <!-- Home --\n              <li class=\"nav-item hs-has-mega-menu u-header__nav-item\"\n                  data-event=\"hover\"\n                  data-animation-in=\"slideInUp\"\n                  data-animation-out=\"fadeOut\"\n                  data-position=\"left\">\n                <a id=\"homeMegaMenu\" class=\"nav-link u-header__nav-link u-header__nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\">Home</a>\n\n                <!-- Home - Mega Menu --\n                <div class=\"hs-mega-menu w-100 u-header__sub-menu\" aria-labelledby=\"homeMegaMenu\">\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-lg-6\">\n                      <!-- Banner Image --\n                      <div class=\"u-header__banner\" style=\"background-image: url('../../assets/img/750x750/img1.jpg');\">\n                        <div class=\"u-header__banner-content\">\n                          <div class=\"mb-4\">\n                            <span class=\"u-header__banner-title\">Branding Works</span>\n                            <p class=\"u-header__banner-text\">Experience a level of our quality in both design &amp; customization works.</p>\n                          </div>\n                          <a class=\"btn btn-primary btn-sm btn-pill transition-3d-hover\" href=\"classic.html#\">Learn More <span class=\"fas fa-angle-right ml-2\"></span></a>\n                        </div>\n                      </div>\n                      <!-- End Banner Image --\n                    </div>\n\n                    <div class=\"col-lg-6\">\n                      <div class=\"row u-header__mega-menu-wrapper\">\n                        <div class=\"col-sm-6 mb-3 mb-sm-0\">\n                          <span class=\"u-header__sub-menu-title\">Classic</span>\n                          <ul class=\"u-header__sub-menu-nav-group mb-3\">\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/index.html\">Classic Agency</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/classic-business.html\">Classic Business</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/classic-marketing.html\">Classic Marketing</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/classic-consulting.html\">Classic Consulting</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/classic-start-up.html\">Classic Start-up</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/classic-studio.html\">Classic Studio <span class=\"badge badge-success badge-pill ml-1\">New</span></a></li>\n                          </ul>\n\n                          <span class=\"u-header__sub-menu-title\">Corporate</span>\n                          <ul class=\"u-header__sub-menu-nav-group mb-3\">\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/corporate-agency.html\">Corporate Agency</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/corporate-start-up.html\">Corporate Start-Up</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/corporate-business.html\">Corporate Business</a></li>\n                          </ul>\n\n                          <span class=\"u-header__sub-menu-title\">Portfolio</span>\n                          <ul class=\"u-header__sub-menu-nav-group\">\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/portfolio-agency.html\">Portfolio Agency</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/portfolio-profile.html\">Portfolio Profile</a></li>\n                          </ul>\n                        </div>\n\n                        <div class=\"col-sm-6\">\n                          <span class=\"u-header__sub-menu-title\">App</span>\n                          <ul class=\"u-header__sub-menu-nav-group mb-3\">\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/app-ui-kit.html\">App UI kit</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/app-saas.html\">App SaaS</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/app-workflow.html\">App Workflow</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/app-payment.html\">App Payment</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/app-software.html\">App Software</a></li>\n                          </ul>\n\n                          <span class=\"u-header__sub-menu-title\">Onepages</span>\n                          <ul class=\"u-header__sub-menu-nav-group mb-3\">\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/onepage-corporate.html\">Corporate <span class=\"badge badge-success badge-pill ml-1\">New</span></a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/onepage-creative.html\">Creative</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/onepage-saas.html\">SaaS</a></li>\n                          </ul>\n\n                          <span class=\"u-header__sub-menu-title\">Blog</span>\n                          <ul class=\"u-header__sub-menu-nav-group\">\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/blog-agency.html\">Blog Agency</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/blog-start-up.html\">Blog Start-Up</a></li>\n                            <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../home/blog-business.html\">Blog Business</a></li>\n                          </ul>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n                <!-- End Home - Mega Menu --\n              </li>\n              <!-- End Home -->\n\n              <!-- Pages --\n              <li class=\"nav-item hs-has-sub-menu u-header__nav-item\"\n                  data-event=\"hover\"\n                  data-animation-in=\"slideInUp\"\n                  data-animation-out=\"fadeOut\">\n                <a id=\"pagesMegaMenu\" class=\"nav-link u-header__nav-link u-header__nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"pagesSubMenu\">Pages</a>\n\n                <!-- Pages - Submenu --\n                <ul id=\"pagesSubMenu\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"pagesMegaMenu\" style=\"min-width: 230px;\">\n                  <!-- Account --\n                  <li class=\"hs-has-sub-menu\">\n                    <a id=\"navLinkPagesAccount\" class=\"nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"navSubmenuPagesAccount\">Account</a>\n\n                    <ul id=\"navSubmenuPagesAccount\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"navLinkPagesAccount\" style=\"min-width: 230px;\">\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/dashboard.html\">Dashboard</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/profile.html\">Profile</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/my-tasks.html\">My tasks</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/projects.html\">Projects</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/members.html\">Members</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/edit-profile.html\">Edit profile</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/change-password.html\">Change password</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/notifications.html\">Notifications</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/activity.html\">Activity</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/payment-methods.html\">Payment methods</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/invite-friends.html\">Invite friends</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/plans.html\">Plans</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../account/api-token.html\">API Token</a></li>\n                    </ul>\n                  </li>\n                  <!-- End Account --\n\n                  <!-- Company --\n                  <li class=\"hs-has-sub-menu\">\n                    <a id=\"navLinkPagesCompany\" class=\"nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"navSubmenuPagesCompany\">Company</a>\n\n                    <ul id=\"navSubmenuPagesCompany\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"navLinkPagesCompany\" style=\"min-width: 230px;\">\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/about-agency.html\">About Agency</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/services-agency.html\">Services Agency</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/customers.html\">Customers</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/customer-story.html\">Customer story</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/careers.html\">Careers</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/careers-single.html\">Careers Single</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/hire-us.html\">Hire Us</a></li>\n                    </ul>\n                  </li>\n                  <!-- Company --\n\n                  <!-- Portfolio --\n                  <li class=\"hs-has-sub-menu\">\n                    <a id=\"navLinkPagesPortfolio\" class=\"nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"navSubmenuPagesPortfolio\">Portfolio</a>\n\n                    <ul id=\"navSubmenuPagesPortfolio\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"navLinkPagesPortfolio\" style=\"min-width: 230px;\">\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../portfolio/boxed-classic.html\">All layouts</a></li>\n                      <li class=\"dropdown-divider\"></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../portfolio/case-studies-simple.html\">Case Studies Simple</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../portfolio/case-studies-modern.html\">Case Studies Modern</a></li>\n                      <li class=\"dropdown-divider\"></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../portfolio/single-page-simple.html\">Single Page Simple</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../portfolio/single-page-grid.html\">Single Page Grid</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../portfolio/single-page-masonry.html\">Single Page Masonry</a></li>\n                    </ul>\n                  </li>\n                  <!-- End Portfolio -->\n\n                  <!-- Login --\n                  <li class=\"hs-has-sub-menu\">\n                    <a id=\"navLinkPagesLogin\" class=\"nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"navSubmenuPagesLogin\">Login &amp; Signup</a>\n\n                    <ul id=\"navSubmenuPagesLogin\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"navLinkPagesLogin\" style=\"min-width: 230px;\">\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/login.html\">Login</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/signup.html\">Signup</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/recover-account.html\">Recover Account</a></li>\n                      <li class=\"dropdown-divider\"></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/login-simple.html\">Login Simple</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/signup-simple.html\">Signup Simple</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/recover-account-simple.html\">Recover Account Simple</a></li>\n                    </ul>\n                  </li>\n                  <!-- Signup --\n\n                  <!-- Contacts --\n                  <li class=\"hs-has-sub-menu\">\n                    <a id=\"navLinkContactsServices\" class=\"nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"navSubmenuContactsServices\">Contacts</a>\n\n                    <ul id=\"navSubmenuContactsServices\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"navLinkContactsServices\" style=\"min-width: 230px;\">\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/contacts-agency.html\">Contacts Agency</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/contacts-start-up.html\">Contacts Start-Up</a></li>\n                    </ul>\n                  </li>\n                  <!-- Contacts --\n\n                  <!-- Utilities --\n                  <li class=\"hs-has-sub-menu\">\n                    <a id=\"navLinkPagesUtilities\" class=\"nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"navSubmenuPagesUtilities\">Utilities</a>\n\n                    <ul id=\"navSubmenuPagesUtilities\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"navLinkPagesUtilities\" style=\"min-width: 230px;\">\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/pricing.html\">Pricing</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/faq.html\">FAQ</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/terms.html\">Terms &amp; Conditions</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/privacy.html\">Privacy &amp; Policy</a></li>\n                    </ul>\n                  </li>\n                  <!-- Utilities --\n\n                  <!-- Specialty --\n                  <li class=\"hs-has-sub-menu\">\n                    <a id=\"navLinkPagesSpecialty\" class=\"nav-link u-header__sub-menu-nav-link u-header__sub-menu-nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-controls=\"navSubmenuPagesSpecialty\">Specialty</a>\n\n                    <ul id=\"navSubmenuPagesSpecialty\" class=\"hs-sub-menu u-header__sub-menu\" aria-labelledby=\"navLinkPagesSpecialty\" style=\"min-width: 230px;\">\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/cover-page.html\">Cover Page</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/coming-soon.html\">Coming Soon</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/maintenance-mode.html\">Maintenance Mode</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/status.html\">Status</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/invoice.html\">Invoice</a></li>\n                      <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../pages/error-404.html\">Error 404</a></li>\n                    </ul>\n                  </li>\n                  <!-- Specialty --\n                </ul>\n                <!-- End Pages - Submenu --\n              </li>\n              <!-- End Pages --\n\n              <!-- Blog --\n              <li class=\"nav-item hs-has-sub-menu u-header__nav-item\"\n                  data-event=\"hover\"\n                  data-animation-in=\"slideInUp\"\n                  data-animation-out=\"fadeOut\">\n                <a id=\"blogMegaMenu\" class=\"nav-link u-header__nav-link u-header__nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\" aria-labelledby=\"blogSubMenu\">Blog</a>\n\n                <!-- Blog - Submenu --\n                <ul id=\"blogSubMenu\" class=\"hs-sub-menu u-header__sub-menu u-header__sub-menu--spacer\" aria-labelledby=\"blogMegaMenu\" style=\"min-width: 230px;\">\n                  <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../blog/card-style.html\">Card Style</a></li>\n                  <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../blog/listing.html\">Listing</a></li>\n                  <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../blog/blog-profile.html\">Blog Profile</a></li>\n                  <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"../blog/single-article.html\">Single Article</a></li>\n                </ul>\n                <!-- End Submenu --\n              </li>\n              <!-- End Blog --\n\n              <!-- Shop --\n              <li class=\"nav-item hs-has-mega-menu u-header__nav-item\"\n                  data-event=\"hover\"\n                  data-animation-in=\"slideInUp\"\n                  data-animation-out=\"fadeOut\"\n                  data-max-width=\"440px\"\n                  data-position=\"right\">\n                <a id=\"shopMegaMenu\" class=\"nav-link u-header__nav-link u-header__nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\">Shop</a>\n\n                <!-- Shop - Mega Menu --\n                <div class=\"hs-mega-menu u-header__sub-menu u-header__mega-menu-position-right-fix--md\" aria-labelledby=\"shopMegaMenu\">\n                  <div class=\"u-header__mega-menu-wrapper\">\n                    <span class=\"u-header__sub-menu-title\">Shop Elements</span>\n\n                    <div class=\"row\">\n                      <div class=\"col-sm-6\">\n                        <ul class=\"u-header__sub-menu-nav-group\">\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"classic.html\">Classic</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"categories.html\">Categories</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"categories-sidebar.html\">Categories Sidebar</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"products-grid.html\">Products Grid</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"products-list.html\">Products List</a></li>\n                        </ul>\n                      </div>\n\n                      <div class=\"col-sm-6\">\n                        <ul class=\"u-header__sub-menu-nav-group\">\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"single-product.html\">Single Product</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"empty-cart.html\">Empty Cart</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"cart.html\">Cart</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"checkout.html\">Checkout</a></li>\n                          <li><a class=\"nav-link u-header__sub-menu-nav-link\" href=\"order-completed.html\">Order Completed</a></li>\n                        </ul>\n                      </div>\n                    </div>\n                  </div>\n\n                  <!-- Mega Menu Banner --\n                  <div class=\"u-header__product-banner\">\n                    <div class=\"d-flex align-items-end\">\n                      <img class=\"img-fluid mr-4\" src=\"../../assets/img/mockups/img4.png\" alt=\"Image Description\">\n                      <div class=\"u-header__product-banner-content\">\n                        <div class=\"mb-4\">\n                          <span class=\"u-header__product-banner-title\">Win T-shirt</span>\n                          <p class=\"u-header__product-banner-text\">Win one of our Front brand T-shirts.</p>\n                        </div>\n                        <a class=\"btn btn-sm btn-soft-primary btn-pill transition-3d-hover\" href=\"classic.html\">Learn More <span class=\"fas fa-angle-right ml-2\"></span></a>\n                      </div>\n                    </div>\n                  </div>\n                  <!-- End Mega Menu Banner --\n                </div>\n                <!-- End Shop - Mega Menu --\n              </li>\n              <!-- End Shop --\n\n              <!-- Demos --\n              <li class=\"nav-item hs-has-mega-menu u-header__nav-item\"\n                  data-event=\"hover\"\n                  data-animation-in=\"slideInUp\"\n                  data-animation-out=\"fadeOut\"\n                  data-max-width=\"900px\"\n                  data-position=\"right\">\n                <a id=\"demosMegaMenu\" class=\"nav-link u-header__nav-link u-header__nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\">Demos</a>\n\n                <!-- Demos - Mega Menu --\n                <div class=\"hs-mega-menu w-100 u-header__sub-menu\" aria-labelledby=\"demosMegaMenu\">\n                  <div class=\"row no-gutters\">\n                    <div class=\"col-lg-8\">\n                      <div class=\"u-header__promo-card-deck\">\n                        <!-- Promo Item --\n                        <div class=\"u-header__promo-card u-header__promo-item\">\n                          <a class=\"u-header__promo-link\" href=\"../app-marketplace/index.html\">\n                            <div class=\"media align-items-center\">\n                              <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-45.svg\" alt=\"SVG\">\n                              <div class=\"media-body\">\n                                <span class=\"u-header__promo-title\">App Marketplace <span class=\"badge badge-success badge-pill ml-1\">New</span></span>\n                                <small class=\"u-header__promo-text\">Marketplace app demo</small>\n                              </div>\n                            </div>\n                          </a>\n                        </div>\n                        <!-- End Promo Item --\n\n                        <!-- Promo Item --\n                        <div class=\"u-header__promo-card u-header__promo-item\">\n                          <a class=\"u-header__promo-link\" href=\"../house/index.html\">\n                            <div class=\"media align-items-center\">\n                              <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-13.svg\" alt=\"SVG\">\n                              <div class=\"media-body\">\n                                <span class=\"u-header__promo-title\">House</span>\n                                <small class=\"u-header__promo-text\">Real estate demo</small>\n                              </div>\n                            </div>\n                          </a>\n                        </div>\n                        <!-- End Promo Item --\n                      </div>\n\n                      <div class=\"u-header__promo-card-deck\">\n                        <!-- Promo Item --\n                        <div class=\"u-header__promo-card u-header__promo-item\">\n                          <a class=\"u-header__promo-link\" href=\"../job/index.html\">\n                            <div class=\"media align-items-center\">\n                              <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-19.svg\" alt=\"SVG\">\n                              <div class=\"media-body\">\n                                <span class=\"u-header__promo-title\">Job</span>\n                                <small class=\"u-header__promo-text\">Job vacancy demo</small>\n                              </div>\n                            </div>\n                          </a>\n                        </div>\n                        <!-- End Promo Item --\n\n                        <!-- Promo Item --\n                        <div class=\"u-header__promo-card u-header__promo-item\">\n                          <a class=\"u-header__promo-link\" href=\"../help-desk/index.html\">\n                            <div class=\"media align-items-center\">\n                              <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-4.svg\" alt=\"SVG\">\n                              <div class=\"media-body\">\n                                <span class=\"u-header__promo-title\">Help Desk</span>\n                                <small class=\"u-header__promo-text\">Help desk demo</small>\n                              </div>\n                            </div>\n                          </a>\n                        </div>\n                        <!-- End Promo Item --\n                      </div>\n\n                      <div class=\"u-header__promo-card-deck\">\n                        <!-- Promo Item --\n                        <div class=\"u-header__promo-card u-header__promo-item\">\n                          <a class=\"u-header__promo-link\" href=\"../crypto/index.html\">\n                            <div class=\"media align-items-center\">\n                              <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-5.svg\" alt=\"SVG\">\n                              <div class=\"media-body\">\n                                <span class=\"u-header__promo-title\">Crypto Landing</span>\n                                <small class=\"u-header__promo-text\">Cryptocurrency demo</small>\n                              </div>\n                            </div>\n                          </a>\n                        </div>\n                        <!-- End Promo Item --\n\n                        <!-- Promo Item --\n                        <div class=\"u-header__promo-card u-header__promo-item\">\n                          <div class=\"u-header__promo-link\">\n                            <div class=\"media align-items-center\">\n                              <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-23.svg\" alt=\"SVG\">\n                              <div class=\"media-body\">\n                                <span class=\"u-header__promo-title text-secondary\">New demos</span>\n                                <small class=\"u-header__promo-text\">coming soon ...</small>\n                              </div>\n                            </div>\n                          </div>\n                        </div>\n                        <!-- End Promo Item --\n                      </div>\n                    </div>\n\n                    <!-- Promo --\n                    <div class=\"col-lg-4 u-header__promo d-none d-lg-block\">\n                      <a class=\"d-block u-header__promo-inner\" href=\"classic.html#\">\n                        <div class=\"position-relative\">\n                          <img class=\"img-fluid rounded mb-3\" src=\"../../assets/img/380x227/img6.jpg\" alt=\"Image Description\">\n                        </div>\n                        <span class=\"text-secondary font-size-1\">Front makes you look at things from a different perspectives.</span>\n                      </a>\n                    </div>\n                    <!-- End Promo --\n                  </div>\n                </div>\n                <!-- End Demos - Mega Menu --\n              </li>\n              <!-- End Demos --\n\n              <!-- Docs --\n              <li class=\"nav-item hs-has-mega-menu u-header__nav-item\"\n                  data-event=\"hover\"\n                  data-animation-in=\"slideInUp\"\n                  data-animation-out=\"fadeOut\"\n                  data-max-width=\"260px\"\n                  data-position=\"right\">\n                <a id=\"docsMegaMenu\" class=\"nav-link u-header__nav-link u-header__nav-link-toggle\" href=\"javascript:;\" aria-haspopup=\"true\" aria-expanded=\"false\">Docs</a>\n\n                <!-- Docs - Submenu --\n                <div class=\"hs-mega-menu u-header__sub-menu\" aria-labelledby=\"docsMegaMenu\" style=\"min-width: 330px;\">\n                  <!-- Promo Item --\n                  <div class=\"u-header__promo-item\">\n                    <a class=\"u-header__promo-link\" href=\"../../documentation/index.html\">\n                      <div class=\"media align-items-center\">\n                        <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-2.svg\" alt=\"SVG\">\n                        <div class=\"media-body\">\n                          <span class=\"u-header__promo-title\">\n                            Documentation\n                            <span class=\"badge badge-primary badge-pill ml-1\">v2.9</span>\n                          </span>\n                          <small class=\"u-header__promo-text\">Development guides</small>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                  <!-- End Promo Item --\n\n                  <!-- Promo Item --\n                  <div class=\"u-header__promo-item\">\n                    <a class=\"u-header__promo-link\" href=\"../../starter/index.html\">\n                      <div class=\"media align-items-center\">\n                        <img class=\"js-svg-injector u-header__promo-icon\" src=\"../../assets/svg/icons/icon-1.svg\" alt=\"SVG\">\n                        <div class=\"media-body\">\n                          <span class=\"u-header__promo-title\">Get started</span>\n                          <small class=\"u-header__promo-text\">Components and snippets</small>\n                        </div>\n                      </div>\n                    </a>\n                  </div>\n                  <!-- End Promo Item --\n\n                  <div class=\"u-header__promo-footer\">\n                    <!-- List --\n                    <div class=\"row no-gutters\">\n                      <div class=\"col-6\">\n                        <div class=\"u-header__promo-footer-item\">\n                          <small class=\"text-muted d-block\">Check what's new</small>\n                          <a class=\"small\" href=\"../../documentation/getting-started/changelog.html\">\n                            Changelog\n                          </a>\n                        </div>\n                      </div>\n                      <div class=\"col-6 u-header__promo-footer-ver-divider\">\n                        <div class=\"u-header__promo-footer-item\">\n                          <small class=\"text-muted d-block\">Have a question?</small>\n                          <a class=\"small\" href=\"../../../../contact-us.html\">\n                            Contact us\n                          </a>\n                        </div>\n                      </div>\n                    </div>\n                    <!-- End List --\n                  </div>\n                </div>\n                <!-- End Docs - Submenu --\n              </li>\n              <!-- End Docs --\n\n              <!-- Button --\n              <li class=\"nav-item u-header__nav-last-item\">\n                <a class=\"btn btn-sm btn-primary btn-pill transition-3d-hover\" href=\"https://themes.getbootstrap.com/product/front-multipurpose-responsive-template/\" target=\"_blank\">\n                  Buy Now\n                </a>\n              </li>\n              <!-- End Button -->\n            </ul>\n          </div>\n          <!-- End Navigation -->\n        </nav>\n        <!-- End Nav -->\n      </div>\n    </div>\n  </header>\n  <!-- ========== END HEADER ========== -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/products/products.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN CONTENT ========== -->\n  <main id=\"content\" role=\"main\">\n    <!-- Title Section -->\n\n    <!-- Products & Filters Section -->\n    <div class=\"container space-2 space-bottom-lg-3\">\n      <div class=\"row\">\n        <div class=\"col-lg-9\">\n\n\n          <!-- Products -->\n          <div class=\"row mx-n2 mb-2\">\n\n            <div *ngFor=\"let product of products\" class=\"col-6 col-lg-3 px-2 px-sm-3 mb-3 mb-sm-5\">\n              <!-- Product -->\n              <div class=\"card text-center h-100\">\n                <div class=\"position-relative\">\n                  <img class=\"card-img-top\" src=\"../../assets/img/product_images/{{product.image}}\" alt=\"{{product.name}}\">\n\n                  <!--<div class=\"position-absolute top-0 left-0 pt-3 pl-3\">\n                    <span class=\"badge badge-success badge-pill\">New arrival</span>\n                  </div>\n                  <div class=\"position-absolute top-0 right-0 pt-3 pr-3\">\n                    <button type=\"button\" class=\"btn btn-sm btn-icon btn-outline-secondary rounded-circle\" data-toggle=\"tooltip\" data-placement=\"top\" title=\"Save for later\">\n                      <span class=\"fas fa-heart btn-icon__inner\"></span>\n                    </button>\n                  </div>-->\n                </div>\n\n                <div class=\"card-body pt-4 px-4 pb-0\">\n                  <div class=\"mb-2\">\n                    <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"/product/{{product.product_id}}\">{{product.name}}</a>\n                    <h3 class=\"font-size-1 font-weight-normal\">\n                      <a class=\"text-secondary\" href=\"/product/{{product.product_id}}\">{{product.description | slice:0:30}}</a>\n                    </h3>\n                    <div class=\"d-block font-size-1\">\n                      <span class=\"font-weight-medium\">${{product.price}}</span>\n                    </div>\n                  </div>\n                </div>\n\n                \n                <!--<div class=\"card-footer border-0 pt-0 pb-4 px-4\">\n\n                  <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover\" (click)=\"addToCart(product.product_id)\">Add to Cart</button>\n                </div>-->\n              </div>\n              <!-- End Product -->\n            </div>\n\n          </div>\n          <!-- End Products -->\n\n          <div class=\"py-3\"></div>\n\n          <!-- Pagination -->\n          <nav aria-label=\"Page navigation\">\n            <ul class=\"pagination justify-content-between align-items-center\">\n              <li class=\"page-item ml-0\">\n                <a class=\"page-link\" (click)=\"pagination(page - 1)\" [hidden]=\"page == 0\" aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">&laquo; Prev</span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item\">\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"d-none d-sm-inline-block text-secondary\">Page:</span>\n\n                  <select class=\"custom-select custom-select-sm w-auto mx-2\" (change)=\"pagination($event.target.value)\">\n                    <option value=\"{{pg}}\" *ngFor=\"let pg of pages_array\">{{pg+1}}</option>\n                  </select>\n\n                  <span class=\"d-none d-sm-inline-block text-secondary\">of {{pages}}</span>\n                </div>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" (click)=\"pagination(page + 1)\" aria-label=\"Next\" [hidden]=\"page == (pages-1)\">\n                  <span aria-hidden=\"true\">Next &raquo;</span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <!-- End Pagination -->\n\n          <!-- Divider -->\n          <div class=\"d-lg-none\">\n            <hr class=\"my-11\">\n          </div>\n          <!-- End Divider -->\n        </div>\n\n        <!-- Filters -->\n        <div class=\"col-lg-3\">\n\n            <div class=\"border-bottom pb-4 mb-4\">\n                <h4 class=\"h6 mb-3\">Search</h4>\n\n                <!-- Checkboxes -->\n                <div  class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                  <input class=\"form-control\" type=\"search\" [(ngModel)]=\"searchModel\" placeholder=\"press enter to search\" (change)=\"pagination(0)\">\n                </div>\n                <!-- End Checkboxes -->\n\n              </div>\n\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Department</h4>\n\n              <!-- Checkboxes -->\n              <div *ngFor=\"let department of departments\" class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\" (click)=\"check(department)\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\"  checked [(ngModel)]=\"department.selected\" >\n                  <label class=\"custom-control-label text-lh-md\" for=\"genderMen\">{{department.name}}</label>\n                </div>\n                <small>{{department.products ? department.products.length : 0}}</small>\n              </div>\n              \n              <!-- End Checkboxes -->\n            </div>\n\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Categories</h4>\n\n              <!-- Checkboxes -->\n              <div *ngFor=\"let category of categories\" class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\" (click)=\"check(category)\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\"  class=\"custom-control-input\"  [(ngModel)]=\"category.selected\" (change)=\"filter()\">\n                  <label class=\"custom-control-label\" >{{category.name}}</label>\n                </div>\n                <small>{{category.products.length}}</small>\n              </div>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-sm btn-block btn-soft-secondary transition-3d-hover\" (click)=\"clearFilters()\">Clear All</button>\n        \n        </div>\n        <!-- End Filters -->\n      </div>\n    </div>\n    <!-- End Products & Filters Section -->\n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/search/search.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN CONTENT ========== -->\n  <main id=\"content\" role=\"main\">\n    <!-- Title Section -->\n    <div class=\"bg-light\">\n      <div class=\"container py-5\">\n        <div class=\"row align-items-sm-center\">\n          <div class=\"col-sm-6 mb-3 mb-sm-0\">\n            <h1 class=\"h4 mb-0\">Products list</h1>\n          </div>\n\n          <div class=\"col-sm-6\">\n            <!-- Breadcrumb -->\n            <nav aria-label=\"breadcrumb\">\n              <ol class=\"breadcrumb breadcrumb-no-gutter justify-content-sm-end mb-0\">\n                <li class=\"breadcrumb-item\"><a href=\"products-list.html#\">Home</a></li>\n                <li class=\"breadcrumb-item\"><a href=\"products-list.html#\">Products</a></li>\n                <li class=\"breadcrumb-item active\" aria-current=\"page\">List</li>\n              </ol>\n            </nav>\n            <!-- End Breadcrumb -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Title Section -->\n\n    <!-- Products & Filters Section -->\n    <div class=\"container space-2 space-bottom-lg-3\">\n      <div class=\"row\">\n        <div class=\"col-lg-9\">\n          <!-- Sorting -->\n          <div class=\"row align-items-center mb-5\">\n            <div class=\"col-lg-6 mb-3 mb-lg-0\">\n              <span class=\"text-secondary font-size-1 font-weight-normal ml-1\">110 products</span>\n            </div>\n\n            <div class=\"col-lg-6 align-self-lg-end text-lg-right\">\n              <ul class=\"list-inline mb-0\">\n                <li class=\"list-inline-item\">\n                  <!-- Select -->\n                  <select class=\"js-select selectpicker dropdown-select\"\n                          data-size=\"10\"\n                          data-width=\"fit\"\n                          data-style=\"btn-soft-secondary btn-xs\">\n                    <option value=\"mostRecent\" selected>Sort by</option>\n                    <option value=\"newest\">Newest first</option>\n                    <option value=\"priceHighLow\">Price (high - low)</option>\n                    <option value=\"priceLowHigh\">Price (low - high)</option>\n                    <option value=\"topSellers\">Top sellers</option>\n                  </select>\n                  <!-- End Select -->\n                </li>\n                <li class=\"list-inline-item\">\n                  <!-- Select -->\n                  <select class=\"js-select selectpicker dropdown-select\"\n                          data-width=\"fit\"\n                          data-style=\"btn-soft-secondary btn-xs\">\n                    <option value=\"alphabeticalOrderSelect1\" selected>A-to-Z</option>\n                    <option value=\"alphabeticalOrderSelect2\">Z-to-A</option>\n                  </select>\n                  <!-- End Select -->\n                </li>\n                <li class=\"list-inline-item\">\n                  <a class=\"btn btn-xs btn-soft-secondary\" href=\"products-grid.html\">\n                    <span class=\"fas fa-th-large\"></span>\n                  </a>\n                </li>\n                <li class=\"list-inline-item\">\n                  <a class=\"btn btn-xs btn-soft-secondary active\" href=\"products-list.html\">\n                    <span class=\"fas fa-list\"></span>\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n          <!-- End Sorting -->\n\n          <ul class=\"list-unstyled\">\n            <!-- Products -->\n            <li class=\"card mb-5\">\n              <div class=\"row\">\n                <div class=\"col-4 pr-0\">\n                  <div class=\"bg-img-hero-center rounded-left h-100\" style=\"background-image: url('../../assets/img/320x320/img8.jpg');\"></div>\n                </div>\n\n                <div class=\"col-8\">\n                  <div class=\"card-body py-5 px-md-4\">\n                    <div class=\"mb-2\">\n                      <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"products-list.html#\">Accessories</a>\n                      <h2 class=\"h6 font-weight-normal\">\n                        <a class=\"text-secondary\" href=\"single-product.html\">Herschel backpack in dark blue</a>\n                        <span class=\"badge badge-success badge-pill ml-1\">New arrival</span>\n                      </h2>\n                      <div class=\"d-block\">\n                        <span class=\"h5\">$56.99</span>\n                      </div>\n                    </div>\n\n                    <div class=\"mb-3\">\n                      <a class=\"d-inline-flex align-items-center small\" href=\"products-list.html#\">\n                        <div class=\"text-warning mr-2\">\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                        </div>\n                        <span class=\"text-secondary\">0</span>\n                      </a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover mr-1\">Add to Cart</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-soft-secondary btn-pill transition-3d-hover\">\n                      <span class=\"far fa-heart mr-1\"></span>\n                      Wishlist\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <!-- End Products -->\n\n            <!-- Products -->\n            <li class=\"card mb-5\">\n              <div class=\"row\">\n                <div class=\"col-4 pr-0\">\n                  <div class=\"bg-img-hero-center rounded-left h-100\" style=\"background-image: url('../../assets/img/320x320/img4.jpg');\"></div>\n                </div>\n\n                <div class=\"col-8\">\n                  <div class=\"card-body py-5 px-md-4\">\n                    <div class=\"mb-2\">\n                      <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"products-list.html#\">Clothing</a>\n                      <h4 class=\"h6 font-weight-normal\">\n                        <a class=\"text-secondary\" href=\"single-product.html\">Front hoodie</a>\n                        <span class=\"badge badge-danger badge-pill ml-1\">Sold out</span>\n                      </h4>\n                      <div class=\"d-block\">\n                        <span class=\"h5\">$91.88</span>\n                      </div>\n                    </div>\n\n                    <div class=\"mb-3\">\n                      <a class=\"d-inline-flex align-items-center small\" href=\"products-list.html#\">\n                        <div class=\"text-warning mr-2\">\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                        </div>\n                        <span class=\"text-secondary\">40</span>\n                      </a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover mr-1\">Add to Cart</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-soft-secondary btn-pill transition-3d-hover\">\n                      <span class=\"far fa-heart mr-1\"></span>\n                      Wishlist\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <!-- End Products -->\n\n            <!-- Products -->\n            <li class=\"card mb-5\">\n              <div class=\"row\">\n                <div class=\"col-4 pr-0\">\n                  <div class=\"bg-img-hero-center rounded-left h-100\" style=\"background-image: url('../../assets/img/320x320/img12.jpg');\"></div>\n                </div>\n\n                <div class=\"col-8\">\n                  <div class=\"card-body py-5 px-md-4\">\n                    <div class=\"mb-2\">\n                      <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"products-list.html#\">Clothing</a>\n                      <h4 class=\"h6 font-weight-normal\">\n                        <a class=\"text-secondary\" href=\"single-product.html\">Front Originals adicolor t-shirt with trefoil logo</a>\n                      </h4>\n                      <p class=\"font-size-1\">The Front Trefoil first appeared on the scene in 1972, and it continues to make its mark.</p>\n                      <div class=\"d-block\">\n                        <span class=\"h5\">$38.00</span>\n                      </div>\n                    </div>\n\n                    <div class=\"mb-3\">\n                      <a class=\"d-inline-flex align-items-center small\" href=\"products-list.html#\">\n                        <div class=\"text-warning mr-2\">\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                        </div>\n                        <span class=\"text-secondary\">9</span>\n                      </a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover mr-1\">Add to Cart</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-soft-secondary btn-pill transition-3d-hover\">\n                      <span class=\"far fa-heart mr-1\"></span>\n                      Wishlist\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <!-- End Products -->\n\n            <!-- Products -->\n            <li class=\"card mb-5\">\n              <div class=\"row\">\n                <div class=\"col-4 pr-0\">\n                  <div class=\"bg-img-hero-center rounded-left h-100\" style=\"background-image: url('../../assets/img/320x320/img13.jpg');\"></div>\n                </div>\n\n                <div class=\"col-8\">\n                  <div class=\"card-body py-5 px-md-4\">\n                    <div class=\"mb-2\">\n                      <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"products-list.html#\">Accessories</a>\n                      <h4 class=\"h6 font-weight-normal\">\n                        <a class=\"text-secondary\" href=\"single-product.html\">Front mesh baseball cap with signature logo</a>\n                      </h4>\n                      <div class=\"d-block\">\n                        <span class=\"h5\">$8.88</span>\n                      </div>\n                    </div>\n\n                    <div class=\"mb-3\">\n                      <a class=\"d-inline-flex align-items-center small\" href=\"products-list.html#\">\n                        <div class=\"text-warning mr-2\">\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                        </div>\n                        <span class=\"text-secondary\">31</span>\n                      </a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover mr-1\">Add to Cart</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-soft-secondary btn-pill transition-3d-hover\">\n                      <span class=\"far fa-heart mr-1\"></span>\n                      Wishlist\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <!-- End Products -->\n\n            <!-- Products -->\n            <li class=\"card mb-5\">\n              <div class=\"row\">\n                <div class=\"col-4 pr-0\">\n                  <div class=\"bg-img-hero-center rounded-left h-100\" style=\"background-image: url('../../assets/img/320x320/img7.jpg');\"></div>\n                </div>\n\n                <div class=\"col-8\">\n                  <div class=\"card-body py-5 px-md-4\">\n                    <div class=\"mb-2\">\n                      <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"products-list.html#\">Clothing</a>\n                      <h4 class=\"h6 font-weight-normal\">\n                        <a class=\"text-secondary\" href=\"single-product.html\">Front Originals adicolor t-shirt in gray</a>\n                        <span class=\"badge badge-success badge-pill ml-1\">New arrival</span>\n                      </h4>\n                      <div class=\"d-block\">\n                        <span class=\"h5\">$24.00</span>\n                      </div>\n                    </div>\n\n                    <div class=\"mb-3\">\n                      <a class=\"d-inline-flex align-items-center small\" href=\"products-list.html#\">\n                        <div class=\"text-warning mr-2\">\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                          <small class=\"far fa-star text-muted\"></small>\n                        </div>\n                        <span class=\"text-secondary\">0</span>\n                      </a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover mr-1\">Add to Cart</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-soft-secondary btn-pill transition-3d-hover\">\n                      <span class=\"far fa-heart mr-1\"></span>\n                      Wishlist\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <!-- End Products -->\n\n            <!-- Products -->\n            <li class=\"card mb-5\">\n              <div class=\"row\">\n                <div class=\"col-4 pr-0\">\n                  <div class=\"bg-img-hero-center rounded-left h-100\" style=\"background-image: url('../../assets/img/320x320/img11.jpg');\"></div>\n                </div>\n\n                <div class=\"col-8\">\n                  <div class=\"card-body py-5 px-md-4\">\n                    <div class=\"mb-2\">\n                      <a class=\"d-inline-block text-secondary small font-weight-medium mb-1\" href=\"products-list.html#\">Accessories</a>\n                      <h4 class=\"h6 font-weight-normal\">\n                        <a class=\"text-secondary\" href=\"single-product.html\">Billabong Walled snapback in green</a>\n                      </h4>\n                      <ul class=\"text-secondary font-size-1 pl-4 mb-2\">\n                        <li class=\"pb-1\">Imported</li>\n                        <li class=\"pb-1\">Product color: Dark-Green</li>\n                        <li class=\"pb-1\">Product code: CH7652</li>\n                      </ul>\n                      <div class=\"d-block\">\n                        <span class=\"h5\">$12.00</span>\n                      </div>\n                    </div>\n\n                    <div class=\"mb-3\">\n                      <a class=\"d-inline-flex align-items-center small\" href=\"products-list.html#\">\n                        <div class=\"text-warning mr-2\">\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                          <small class=\"fas fa-star\"></small>\n                        </div>\n                        <span class=\"text-secondary\">2</span>\n                      </a>\n                    </div>\n                    <button type=\"button\" class=\"btn btn-sm btn-outline-primary btn-sm-wide btn-pill transition-3d-hover mr-1\">Add to Cart</button>\n                    <button type=\"button\" class=\"btn btn-sm btn-soft-secondary btn-pill transition-3d-hover\">\n                      <span class=\"far fa-heart mr-1\"></span>\n                      Wishlist\n                    </button>\n                  </div>\n                </div>\n              </div>\n            </li>\n            <!-- End Products -->\n          </ul>\n\n          <div class=\"py-3\"></div>\n\n          <!-- Pagination -->\n          <nav aria-label=\"Page navigation\">\n            <ul class=\"pagination justify-content-between align-items-center\">\n              <li class=\"page-item ml-0\">\n                <a class=\"page-link\" href=\"products-list.html#\" aria-label=\"Previous\">\n                  <span aria-hidden=\"true\">&laquo; Prev</span>\n                  <span class=\"sr-only\">Previous</span>\n                </a>\n              </li>\n              <li class=\"page-item\">\n                <div class=\"d-flex align-items-center\">\n                  <span class=\"d-none d-sm-inline-block text-secondary\">Page:</span>\n                  <select class=\"custom-select custom-select-sm w-auto mx-2\">\n                    <option value=\"quantity1\">1</option>\n                    <option value=\"quantity2\">2</option>\n                    <option value=\"quantity3\">3</option>\n                    <option value=\"quantity4\">4</option>\n                    <option value=\"quantity5\">5</option>\n                    <option value=\"quantity6\">6</option>\n                  </select>\n                  <span class=\"d-none d-sm-inline-block text-secondary\">of 6</span>\n                </div>\n              </li>\n              <li class=\"page-item\">\n                <a class=\"page-link\" href=\"products-list.html#\" aria-label=\"Next\">\n                  <span aria-hidden=\"true\">Next &raquo;</span>\n                  <span class=\"sr-only\">Next</span>\n                </a>\n              </li>\n            </ul>\n          </nav>\n          <!-- End Pagination -->\n\n          <!-- Divider -->\n          <div class=\"d-lg-none\">\n            <hr class=\"my-11\">\n          </div>\n          <!-- End Divider -->\n        </div>\n\n        <!-- Filters -->\n        <div class=\"col-lg-3\">\n          <form>\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Price</h4>\n\n              <!-- Range Slider -->\n              <input class=\"js-range-slider\" type=\"text\"\n                     data-extra-classes=\"u-range-slider u-range-slider-indicator u-range-slider-grid\"\n                     data-type=\"double\"\n                     data-grid=\"true\"\n                     data-hide-from-to=\"false\"\n                     data-prefix=\"$\"\n                     data-min=\"0\"\n                     data-max=\"500\"\n                     data-from=\"25\"\n                     data-to=\"475\"\n                     data-result-min=\"#rangeSliderExample3MinResult\"\n                     data-result-max=\"#rangeSliderExample3MaxResult\">\n              <div class=\"d-flex justify-content-between mt-4\">\n                <input type=\"text\" class=\"form-control form-control-sm max-width-10\" id=\"rangeSliderExample3MinResult\">\n                <input type=\"text\" class=\"form-control form-control-sm max-width-10 mt-0\" id=\"rangeSliderExample3MaxResult\">\n              </div>\n              <!-- End Range Slider -->\n            </div>\n\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Gender</h4>\n\n              <!-- Checkboxes -->\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"genderMen\" checked>\n                  <label class=\"custom-control-label text-lh-md\" for=\"genderMen\">Men</label>\n                </div>\n                <small>73</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"genderWomen\" checked>\n                  <label class=\"custom-control-label text-lh-md\" for=\"genderWomen\">Women</label>\n                </div>\n                <small>51</small>\n              </div>\n              <!-- End Checkboxes -->\n            </div>\n\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Brand</h4>\n\n              <!-- Checkboxes -->\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"brandAdidas\">\n                  <label class=\"custom-control-label\" for=\"brandAdidas\">Adidas</label>\n                </div>\n                <small>16</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"brandNewBalance\">\n                  <label class=\"custom-control-label\" for=\"brandNewBalance\">New Balance</label>\n                </div>\n                <small>8</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"brandNike\">\n                  <label class=\"custom-control-label\" for=\"brandNike\">Nike</label>\n                </div>\n                <small>35</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"brandFredPerry\">\n                  <label class=\"custom-control-label\" for=\"brandFredPerry\">Fred Perry</label>\n                </div>\n                <small>5</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"brandTnf\">\n                  <label class=\"custom-control-label\" for=\"brandTnf\">The North Face</label>\n                </div>\n                <small>1</small>\n              </div>\n              <!-- End Checkboxes -->\n\n              <!-- View More - Collapse -->\n              <div class=\"collapse\" id=\"collapseBrand\">\n                <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"brandGucci\">\n                    <label class=\"custom-control-label\" for=\"brandGucci\">Gucci</label>\n                  </div>\n                  <small>5</small>\n                </div>\n                <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"brandMango\">\n                    <label class=\"custom-control-label\" for=\"brandMango\">Mango</label>\n                  </div>\n                  <small>1</small>\n                </div>\n              </div>\n              <!-- End View More - Collapse -->\n\n              <!-- Link -->\n              <a class=\"link link-collapse small font-size-1\" data-toggle=\"collapse\" href=\"products-list.html#collapseBrand\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseBrand\">\n                <span class=\"link-collapse__default\">View more</span>\n                <span class=\"link-collapse__active\">View less</span>\n                <span class=\"link__icon ml-1\">\n                  <span class=\"link__icon-inner\">+</span>\n                </span>\n              </a>\n              <!-- End Link -->\n            </div>\n\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Size</h4>\n\n              <!-- Checkboxes -->\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"sizeS\" checked>\n                  <label class=\"custom-control-label\" for=\"sizeS\">S</label>\n                </div>\n                <small>27</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"sizeM\">\n                  <label class=\"custom-control-label\" for=\"sizeM\">M</label>\n                </div>\n                <small>18</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"sizeL\" checked>\n                  <label class=\"custom-control-label\" for=\"sizeL\">L</label>\n                </div>\n                <small>0</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"sizeXL\">\n                  <label class=\"custom-control-label\" for=\"sizeXL\">XL</label>\n                </div>\n                <small>1</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"sizeXXL\">\n                  <label class=\"custom-control-label\" for=\"sizeXXL\">XXL</label>\n                </div>\n                <small>2</small>\n              </div>\n              <!-- End Checkboxes -->\n            </div>\n\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Category</h4>\n\n              <!-- Checkboxes -->\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"categoryTshirt\" checked>\n                  <label class=\"custom-control-label text-lh-md\" for=\"categoryTshirt\">T-shirt</label>\n                </div>\n                <small>73</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"categoryShoes\">\n                  <label class=\"custom-control-label text-lh-md\" for=\"categoryShoes\">Shoes</label>\n                </div>\n                <small>0</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"categoryAccessories\" checked>\n                  <label class=\"custom-control-label text-lh-md\" for=\"categoryAccessories\">Accessories</label>\n                </div>\n                <small>51</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"categoryTops\" checked>\n                  <label class=\"custom-control-label\" for=\"categoryTops\">Tops</label>\n                </div>\n                <small>5</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"categoryBottom\">\n                  <label class=\"custom-control-label\" for=\"categoryBottom\">Bottom</label>\n                </div>\n                <small>11</small>\n              </div>\n              <!-- End Checkboxes -->\n\n              <!-- View More - Collapse -->\n              <div class=\"collapse\" id=\"collapseCategory\">\n                <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"categoryShorts\">\n                    <label class=\"custom-control-label\" for=\"categoryShorts\">Shorts</label>\n                  </div>\n                  <small>5</small>\n                </div>\n                <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"categoryHats\">\n                    <label class=\"custom-control-label\" for=\"categoryHats\">Hats</label>\n                  </div>\n                  <small>3</small>\n                </div>\n                <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-1\">\n                  <div class=\"custom-control custom-checkbox\">\n                    <input type=\"checkbox\" class=\"custom-control-input\" id=\"categorySocks\">\n                    <label class=\"custom-control-label\" for=\"categorySocks\">Socks</label>\n                  </div>\n                  <small>8</small>\n                </div>\n              </div>\n              <!-- End View More - Collapse -->\n\n              <!-- Link -->\n              <a class=\"link link-collapse small font-size-1\" data-toggle=\"collapse\" href=\"products-list.html#collapseCategory\" role=\"button\" aria-expanded=\"false\" aria-controls=\"collapseCategory\">\n                <span class=\"link-collapse__default\">View more</span>\n                <span class=\"link-collapse__active\">View less</span>\n                <span class=\"link__icon ml-1\">\n                  <span class=\"link__icon-inner\">+</span>\n                </span>\n              </a>\n              <!-- End Link -->\n            </div>\n\n            <div class=\"border-bottom pb-4 mb-4\">\n              <h4 class=\"h6 mb-3\">Rating</h4>\n\n              <!-- Checkboxes -->\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-0\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"rating1\">\n                  <label class=\"custom-control-label\" for=\"rating1\">\n                    <span class=\"d-block text-warning\">\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                    </span>\n                  </label>\n                </div>\n                <small>3</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-0\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"rating2\">\n                  <label class=\"custom-control-label\" for=\"rating2\">\n                    <span class=\"d-block text-warning\">\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                    </span>\n                  </label>\n                </div>\n                <small>10</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-0\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"rating3\">\n                  <label class=\"custom-control-label\" for=\"rating3\">\n                    <span class=\"d-block text-warning\">\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                    </span>\n                  </label>\n                </div>\n                <small>34</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-0\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"rating4\">\n                  <label class=\"custom-control-label\" for=\"rating4\">\n                    <span class=\"d-block text-warning\">\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"far fa-star text-muted\"></span>\n                    </span>\n                  </label>\n                </div>\n                <small>86</small>\n              </div>\n              <div class=\"form-group d-flex align-items-center justify-content-between font-size-1 text-lh-md text-secondary mb-0\">\n                <div class=\"custom-control custom-checkbox\">\n                  <input type=\"checkbox\" class=\"custom-control-input\" id=\"rating5\">\n                  <label class=\"custom-control-label\" for=\"rating5\">\n                    <span class=\"d-block text-warning\">\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                      <span class=\"fas fa-star\"></span>\n                    </span>\n                  </label>\n                </div>\n                <small>102</small>\n              </div>\n              <!-- End Checkboxes -->\n            </div>\n\n            <button type=\"button\" class=\"btn btn-sm btn-block btn-soft-secondary transition-3d-hover\">Clear All</button>\n          </form>\n        </div>\n        <!-- End Filters -->\n      </div>\n    </div>\n    <!-- End Products & Filters Section -->\n\n    <!-- Subscribe Section -->\n    <div class=\"bg-light\">\n      <div class=\"container space-2\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-md-9 col-lg-6\">\n            <!-- Title -->\n            <div class=\"text-center mb-4\">\n              <h2 class=\"h1 font-weight-medium\">Stay in the know</h2>\n              <p>Get special offers on the latest developments from Front.</p>\n            </div>\n            <!-- End Title -->\n\n            <!-- Subscribe Form -->\n            <form class=\"js-validate js-form-message w-lg-85 mx-lg-auto\">\n              <label class=\"sr-only\" for=\"subscribeSrEmail\">Email address</label>\n              <div class=\"input-group input-group-pill\">\n                <input type=\"email\" class=\"form-control\" name=\"email\" id=\"subscribeSrEmail\" placeholder=\"Email address\" aria-label=\"Email address\" aria-describedby=\"subscribeButton\" required\n                       data-msg=\"Please enter a valid email address.\">\n                <div class=\"input-group-append\">\n                  <button type=\"submit\" class=\"btn btn-primary btn-sm-wide\" id=\"subscribeButton\">Join</button>\n                </div>\n              </div>\n            </form>\n            <!-- End Subscribe Form -->\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Subscribe Section -->\n\n    <!-- Clients Section -->\n    <div class=\"container space-2\">\n      <div class=\"row justify-content-between text-center\">\n        <div class=\"col-4 col-lg-2 mb-5 mb-lg-0\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/hollister.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2 mb-5 mb-lg-0\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/levis.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2 mb-5 mb-lg-0\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/new-balance.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/puma.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/nike.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n        <div class=\"col-4 col-lg-2\">\n          <div class=\"mx-4\">\n            <img class=\"u-clients\" src=\"../../assets/svg/clients-logo/tnf.svg\" alt=\"Image Description\">\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Clients Section -->\n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/single-product/single-product.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/single-product/single-product.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- ========== MAIN CONTENT ========== -->\n  \n<main id=\"content\" role=\"main\">\n    <!-- Hero Section -->\n    <div class=\"container space-top-1 space-top-sm-2\">\n      <div class=\"row\">\n        <div class=\"col-lg-7 mb-7 mb-lg-0\">\n          <div class=\"pr-lg-4\">\n            <div class=\"position-relative\">\n                <img class=\"img-fluid w-100 rounded\" src=\"../../assets/img/product_images/{{product.image}}\" alt=\"Image Description\">\n              <!-- Main Slider --\n              <div id=\"heroSlider\" class=\"js-slick-carousel u-slick border rounded\"\n                   data-fade=\"true\"\n                   data-infinite=\"true\"\n                   data-autoplay-speed=\"7000\"\n                   data-arrows-classes=\"d-none d-sm-inline-block u-slick__arrow u-slick__arrow--flat-white content-centered-y shadow-soft rounded-circle\"\n                   data-arrow-left-classes=\"fas fa-arrow-left u-slick__arrow-inner u-slick__arrow-inner--left ml-3\"\n                   data-arrow-right-classes=\"fas fa-arrow-right u-slick__arrow-inner u-slick__arrow-inner--right mr-3\"\n                   data-nav-for=\"#heroSliderNav\">\n                   \n                <div class=\"js-slide\">\n                  <img class=\"img-fluid w-100 rounded\" src=\"../../assets/img/product_images/{{product.image}}\" alt=\"Image Description\">\n                </div>\n                <div class=\"js-slide\">\n                  <img class=\"img-fluid w-100 rounded\" src=\"../../assets/img/product_images/{{product.image_2}}\" alt=\"Image Description\">\n                </div>\n                \n              </div>\n              <!-- End Main Slider -->\n\n              <!-- Slider Nav --\n              <div class=\"position-absolute bottom-0 right-0 left-0 px-4 py-3\">\n                <div id=\"heroSliderNav\" class=\"js-slick-carousel u-slick u-slick--gutters-1 u-slick--transform-off max-width-27 mx-auto\"\n                     data-slides-show=\"3\"\n                     data-infinite=\"true\"\n                     data-autoplay-speed=\"7000\"\n                     data-is-thumbs=\"true\"\n                     data-is-thumbs-progress=\"true\"\n                     data-thumbs-progress-options='{\n                       \"color\": \"#377DFF\",\n                       \"width\": 8\n                     }'\n                     data-thumbs-progress-container=\".js-slick-thumb-progress\"\n                     data-nav-for=\"#heroSlider\">\n                  <div class=\"js-slide p-1\">\n                    <a class=\"js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1\" href=\"javascript:;\">\n                      <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/product_images/{{product.image_2}}\" alt=\"Image Description\">\n                    </a>\n                  </div>\n                  <div class=\"js-slide p-1\">\n                    <a class=\"js-slick-thumb-progress position-relative d-block u-avatar border rounded-circle p-1\" href=\"javascript:;\">\n                      <img class=\"img-fluid rounded-circle\" src=\"../../assets/img/product_images/{{product.image_2}}\" alt=\"Image Description\">\n                    </a>\n                  </div>\n                  \n                </div>\n              </div>\n              <!-- End Slider Nav -->\n            </div>\n          </div>\n        </div>\n\n        <!-- Product Description -->\n        <div class=\"col-lg-5\">\n          <!-- Rating --\n          <div class=\"d-flex align-items-center small mb-2\">\n            <div class=\"text-warning mr-2\">\n              <small class=\"fas fa-star\"></small>\n              <small class=\"fas fa-star\"></small>\n              <small class=\"fas fa-star\"></small>\n              <small class=\"fas fa-star\"></small>\n              <small class=\"fas fa-star\"></small>\n            </div>\n            <a class=\"js-go-to link-muted\" href=\"single-product.html#reviewSection\"\n               data-target=\"#reviewSection\"\n               data-compensation=\"#header\"\n               data-type=\"static\">Read all 287 reviews</a>\n          </div>\n          <!-- End Rating -->\n\n          <!-- Title -->\n          <div class=\"mb-5\">\n            <h1 class=\"h3 font-weight-medium\">{{product.name}}</h1>\n            <p>{{product.description}}</p>\n          </div>\n          <!-- End Title -->\n\n          <!-- Price -->\n          <div class=\"mb-5\">\n            <h2 class=\"font-size-1 text-secondary font-weight-medium mb-0\">Total price:</h2>\n            <span class=\"font-size-2 font-weight-medium\">{{product.discounted_price > 0 ? (product.discounted_price * quantity) : (product.price * quantity)}}</span>\n            <span class=\"text-secondary ml-2\" [hidden]=\"product.discounted_price == 0\"><del>{{product.price}}</del></span>\n          </div>\n          <!-- End Price -->\n\n          <!-- Quantity -->\n          <div class=\"border rounded py-2 px-3 mb-3\">\n            <div class=\"js-quantity row align-items-center\">\n              <div class=\"col-7\">\n                <small class=\"d-block text-secondary font-weight-medium\">Select quantity</small>\n                <input class=\"js-result form-control h-auto border-0 rounded p-0\" type=\"text\" [(ngModel)]=\"quantity\" #ctrl=\"ngModel\">\n              </div>\n              <div class=\"col-5 text-right\">\n                <a class=\"js-minus btn btn-icon btn-xs btn-outline-secondary rounded-circle\" (click)=\"rmv_qty()\">\n                  <small class=\"fas fa-minus btn-icon__inner\"></small>\n                </a>\n                <a class=\"js-plus btn btn-icon btn-xs btn-outline-secondary rounded-circle\" (click)=\"add_qty()\">\n                  <small class=\"fas fa-plus btn-icon__inner\"></small>\n                </a>\n              </div>\n            </div>\n          </div>\n          <!-- End Quantity -->\n\n          <div class=\"mb-5\" *ngFor=\"let attribute of attributes\">\n            <h2 class=\"font-size-1 text-secondary font-weight-medium mb-0\">{{attribute.name}}</h2>\n            <div class=\"mb-2\">\n            <ul class=\"product-attributes clearfix\">\n              <li *ngFor=\"let value of attribute.values\" (click)=\"selectAttribute(attribute,value)\" class=\"{{ attribute.value.attribute_value_id == value.attribute_value_id ? 'active' : '' }}\">{{value.value}}</li>\n            </ul>\n          </div>\n          </div>\n\n          <div class=\"mb-4\">\n            <button type=\"button\" class=\"btn btn-block btn-primary btn-pill transition-3d-hover\" (click)=\"addToCart()\">Add to Cart</button>\n          </div>\n\n          <!-- Help Link --\n          <div class=\"media align-items-center\">\n            <span id=\"icon4\" class=\"svg-preloader ie-height-48 w-100 max-width-6 mr-2\">\n              <img class=\"js-svg-injector\" src=\"../../assets/svg/icons/icon-4.svg\" alt=\"SVG\"\n                   data-parent=\"#icon4\">\n            </span>\n            <div class=\"media-body text-secondary small\">\n              <span class=\"font-weight-medium mr-1\">Need Help?</span>\n              <a class=\"link-muted\" href=\"single-product.html#\">Chat now</a>\n            </div>\n          </div>\n          <!-- End Help Link -->\n        </div>\n        <!-- End Product Description -->\n      </div>\n    </div>\n    <!-- End Hero Section -->\n\n    <!-- Product Description Section --\n    <div class=\"container space-top-2 space-lg-3\">\n      <div class=\"row\">\n        <div class=\"col-md-6 mb-5 mb-md-0\">\n          <div class=\"pr-lg-4\">\n            <h3 class=\"h5 font-weight-medium\">Details</h3>\n            <p>As popular off field as they are on, New Era caps are standard issue amongst those with a passion for street culture, blending progressive styles with carefully crafted design. Known for their innovative use of colour, bold designs are added season upon season, referencing everything.</p>\n          </div>\n        </div>\n\n        <div class=\"col-md-6 mb-5 mb-md-0\">\n          <h3 class=\"h5 font-weight-medium\">Material and care</h3>\n\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <ul class=\"text-secondary pl-3 mb-0\">\n                <li class=\"py-1\">Main: 100% Cotton</li>\n                <li class=\"py-1\">Soft twill</li>\n                <li class=\"py-1\">Ribbed, diagonal pattern</li>\n                <li class=\"py-1\">Slightly structured</li>\n              </ul>\n            </div>\n\n            <div class=\"col-sm-6\">\n              <ul class=\"text-secondary pl-3 mb-0\">\n                <li class=\"py-1\">One size fits all</li>\n                <li class=\"py-1\">Imported</li>\n                <li class=\"py-1\">Product color: Dark greenish</li>\n                <li class=\"py-1\">Product code: #1465791</li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Product Description Section -->\n\n    <!-- Product Review Section --\n    <div class=\"container\">\n      <div class=\"row justify-content-lg-between align-items-lg-center\">\n        <div class=\"col-lg-5 space-1 space-lg-2\">\n          <h3 class=\"font-weight-medium mb-4\">A casual cap with Front originals style</h3>\n          <p>This men's hat has low-key Trefoil style with an embroidered logo on the front.</p>\n          <p>Made of washed canvas, the hat has a crushable, packable design and an adjustable back strap so you can personalize the fit.</p>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <div class=\"bg-img-hero-center h-100 min-height-450 rounded\" style=\"background-image: url('../../assets/img/750x750/img3.jpg');\"></div>\n        </div>\n      </div>\n\n      <div class=\"row justify-content-lg-between align-items-lg-center space-top-2 space-top-lg-3\">\n        <div class=\"col-lg-5 order-lg-2 space-1 space-lg-2\">\n          <div class=\"mb-6\">\n            <h3 class=\"font-weight-medium mb-4\">A casual cap with Front originals style</h3>\n            <p>This men's hat has low-key Trefoil style with an embroidered logo on the front.</p>\n            <p>Made of washed canvas, the hat has a crushable, packable design and an adjustable back strap so you can personalize the fit.</p>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6 order-lg-1\">\n          <div class=\"bg-img-hero-center h-100 min-height-450 rounded\" style=\"background-image: url('../../assets/img/750x750/img4.jpg');\"></div>\n        </div>\n      </div>\n    </div>\n    <!-- End Product Review Section -->\n\n   \n\n    <!-- Review Section --\n    <div id=\"reviewSection\" class=\"container space-bottom-2 space-bottom-lg-3\">\n      <div class=\"row\">\n        \n\n        <div class=\"col-lg-12\">\n          <div class=\"pl-lg-4\">\n            <!-- Title --\n            <div class=\"border-bottom pb-4 mb-4\">\n              <div class=\"d-flex justify-content-between align-items-center\">\n                <h3 class=\"h5 text-secondary font-weight-normal mb-0\">Sort on</h3>\n\n                <!-- Select --\n                <select class=\"js-select selectpicker dropdown-select\"\n                        data-size=\"10\"\n                        data-width=\"fit\"\n                        data-style=\"btn-soft-secondary btn-xs\">\n                  <option value=\"mostRecent\" selected>Most recent</option>\n                  <option value=\"relevant\">Relevant</option>\n                  <option value=\"helpful\">Helpful</option>\n                  <option value=\"newest\">Newest</option>\n                </select>\n                <!-- End Select --\n              </div>\n            </div>\n            <!-- End Title --\n\n            <!-- Review --\n            <div class=\"border-bottom pb-4 mb-4\">\n              <!-- Review Rating --\n              <div class=\"d-flex justify-content-between align-items-center text-secondary font-size-1 mb-3\">\n                <div class=\"text-warning\">\n                  <small class=\"fas fa-star\"></small>\n                  <small class=\"fas fa-star\"></small>\n                  <small class=\"fas fa-star\"></small>\n                  <small class=\"fas fa-star\"></small>\n                  <small class=\"fas fa-star\"></small>\n                </div>\n                <span>April 3, 2019</span>\n              </div>\n              <!-- End Review Rating --\n\n              <h4 class=\"h6 font-weight-semi-bold text-uppercase\">I jus love it!</h4>\n              <p>I bought this hat for my boyfriend, but then i found out he cheated on me so I kept it and I love it!! I wear it all the time and there is no problem with the fit even though its a “mens” hat.</p>\n\n              <!-- Reviewer --\n              <div class=\"text-secondary font-size-1 mb-2\">\n                <strong class=\"text-dark\">Hailey</strong>\n                <span>- Verified Purchase</span>\n              </div>\n              <!-- End Reviewer --\n\n              <!-- Helpful --\n              <div class=\"font-size-1\">\n                <span>Was this helpful?</span>\n                <span class=\"ml-2\">\n                  <a class=\"link-muted\" href=\"javascript:;\">Yes</a>\n                  <span class=\"text-secondary\">(45)</span>\n                </span>\n                <span class=\"ml-2\">\n                  <a class=\"link-muted\" href=\"javascript:;\">No</a>\n                  <span class=\"text-secondary\">(21)</span>\n                </span>\n              </div>\n              <!-- End Helpful --\n            </div>\n            <!-- End Review --\n\n            \n\n           \n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- End Review Section -->\n\n    \n  </main>\n  <!-- ========== END MAIN CONTENT ========== -->"

/***/ }),

/***/ "./node_modules/zone.js/dist/zone-evergreen.js":
/*!*****************************************************!*\
  !*** ./node_modules/zone.js/dist/zone-evergreen.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
* @license
* Copyright Google Inc. All Rights Reserved.
*
* Use of this source code is governed by an MIT-style license that can be
* found in the LICENSE file at https://angular.io/license
*/
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Zone$1 = (function (global) {
    const performance = global['performance'];
    function mark(name) {
        performance && performance['mark'] && performance['mark'](name);
    }
    function performanceMeasure(name, label) {
        performance && performance['measure'] && performance['measure'](name, label);
    }
    mark('Zone');
    const checkDuplicate = global[('__zone_symbol__forceDuplicateZoneCheck')] === true;
    if (global['Zone']) {
        // if global['Zone'] already exists (maybe zone.js was already loaded or
        // some other lib also registered a global object named Zone), we may need
        // to throw an error, but sometimes user may not want this error.
        // For example,
        // we have two web pages, page1 includes zone.js, page2 doesn't.
        // and the 1st time user load page1 and page2, everything work fine,
        // but when user load page2 again, error occurs because global['Zone'] already exists.
        // so we add a flag to let user choose whether to throw this error or not.
        // By default, if existing Zone is from zone.js, we will not throw the error.
        if (checkDuplicate || typeof global['Zone'].__symbol__ !== 'function') {
            throw new Error('Zone already loaded.');
        }
        else {
            return global['Zone'];
        }
    }
    class Zone {
        constructor(parent, zoneSpec) {
            this._parent = parent;
            this._name = zoneSpec ? zoneSpec.name || 'unnamed' : '<root>';
            this._properties = zoneSpec && zoneSpec.properties || {};
            this._zoneDelegate =
                new ZoneDelegate(this, this._parent && this._parent._zoneDelegate, zoneSpec);
        }
        static assertZonePatched() {
            if (global['Promise'] !== patches['ZoneAwarePromise']) {
                throw new Error('Zone.js has detected that ZoneAwarePromise `(window|global).Promise` ' +
                    'has been overwritten.\n' +
                    'Most likely cause is that a Promise polyfill has been loaded ' +
                    'after Zone.js (Polyfilling Promise api is not necessary when zone.js is loaded. ' +
                    'If you must load one, do so before loading zone.js.)');
            }
        }
        static get root() {
            let zone = Zone.current;
            while (zone.parent) {
                zone = zone.parent;
            }
            return zone;
        }
        static get current() {
            return _currentZoneFrame.zone;
        }
        static get currentTask() {
            return _currentTask;
        }
        static __load_patch(name, fn) {
            if (patches.hasOwnProperty(name)) {
                if (checkDuplicate) {
                    throw Error('Already loaded patch: ' + name);
                }
            }
            else if (!global['__Zone_disable_' + name]) {
                const perfName = 'Zone:' + name;
                mark(perfName);
                patches[name] = fn(global, Zone, _api);
                performanceMeasure(perfName, perfName);
            }
        }
        get parent() {
            return this._parent;
        }
        get name() {
            return this._name;
        }
        get(key) {
            const zone = this.getZoneWith(key);
            if (zone)
                return zone._properties[key];
        }
        getZoneWith(key) {
            let current = this;
            while (current) {
                if (current._properties.hasOwnProperty(key)) {
                    return current;
                }
                current = current._parent;
            }
            return null;
        }
        fork(zoneSpec) {
            if (!zoneSpec)
                throw new Error('ZoneSpec required!');
            return this._zoneDelegate.fork(this, zoneSpec);
        }
        wrap(callback, source) {
            if (typeof callback !== 'function') {
                throw new Error('Expecting function got: ' + callback);
            }
            const _callback = this._zoneDelegate.intercept(this, callback, source);
            const zone = this;
            return function () {
                return zone.runGuarded(_callback, this, arguments, source);
            };
        }
        run(callback, applyThis, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runGuarded(callback, applyThis = null, applyArgs, source) {
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                try {
                    return this._zoneDelegate.invoke(this, callback, applyThis, applyArgs, source);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                _currentZoneFrame = _currentZoneFrame.parent;
            }
        }
        runTask(task, applyThis, applyArgs) {
            if (task.zone != this) {
                throw new Error('A task can only be run in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            }
            // https://github.com/angular/zone.js/issues/778, sometimes eventTask
            // will run in notScheduled(canceled) state, we should not try to
            // run such kind of task but just return
            if (task.state === notScheduled && (task.type === eventTask || task.type === macroTask)) {
                return;
            }
            const reEntryGuard = task.state != running;
            reEntryGuard && task._transitionTo(running, scheduled);
            task.runCount++;
            const previousTask = _currentTask;
            _currentTask = task;
            _currentZoneFrame = { parent: _currentZoneFrame, zone: this };
            try {
                if (task.type == macroTask && task.data && !task.data.isPeriodic) {
                    task.cancelFn = undefined;
                }
                try {
                    return this._zoneDelegate.invokeTask(this, task, applyThis, applyArgs);
                }
                catch (error) {
                    if (this._zoneDelegate.handleError(this, error)) {
                        throw error;
                    }
                }
            }
            finally {
                // if the task's state is notScheduled or unknown, then it has already been cancelled
                // we should not reset the state to scheduled
                if (task.state !== notScheduled && task.state !== unknown) {
                    if (task.type == eventTask || (task.data && task.data.isPeriodic)) {
                        reEntryGuard && task._transitionTo(scheduled, running);
                    }
                    else {
                        task.runCount = 0;
                        this._updateTaskCount(task, -1);
                        reEntryGuard &&
                            task._transitionTo(notScheduled, running, notScheduled);
                    }
                }
                _currentZoneFrame = _currentZoneFrame.parent;
                _currentTask = previousTask;
            }
        }
        scheduleTask(task) {
            if (task.zone && task.zone !== this) {
                // check if the task was rescheduled, the newZone
                // should not be the children of the original zone
                let newZone = this;
                while (newZone) {
                    if (newZone === task.zone) {
                        throw Error(`can not reschedule task to ${this.name} which is descendants of the original zone ${task.zone.name}`);
                    }
                    newZone = newZone.parent;
                }
            }
            task._transitionTo(scheduling, notScheduled);
            const zoneDelegates = [];
            task._zoneDelegates = zoneDelegates;
            task._zone = this;
            try {
                task = this._zoneDelegate.scheduleTask(this, task);
            }
            catch (err) {
                // should set task's state to unknown when scheduleTask throw error
                // because the err may from reschedule, so the fromState maybe notScheduled
                task._transitionTo(unknown, scheduling, notScheduled);
                // TODO: @JiaLiPassion, should we check the result from handleError?
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            if (task._zoneDelegates === zoneDelegates) {
                // we have to check because internally the delegate can reschedule the task.
                this._updateTaskCount(task, 1);
            }
            if (task.state == scheduling) {
                task._transitionTo(scheduled, scheduling);
            }
            return task;
        }
        scheduleMicroTask(source, callback, data, customSchedule) {
            return this.scheduleTask(new ZoneTask(microTask, source, callback, data, customSchedule, undefined));
        }
        scheduleMacroTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(macroTask, source, callback, data, customSchedule, customCancel));
        }
        scheduleEventTask(source, callback, data, customSchedule, customCancel) {
            return this.scheduleTask(new ZoneTask(eventTask, source, callback, data, customSchedule, customCancel));
        }
        cancelTask(task) {
            if (task.zone != this)
                throw new Error('A task can only be cancelled in the zone of creation! (Creation: ' +
                    (task.zone || NO_ZONE).name + '; Execution: ' + this.name + ')');
            task._transitionTo(canceling, scheduled, running);
            try {
                this._zoneDelegate.cancelTask(this, task);
            }
            catch (err) {
                // if error occurs when cancelTask, transit the state to unknown
                task._transitionTo(unknown, canceling);
                this._zoneDelegate.handleError(this, err);
                throw err;
            }
            this._updateTaskCount(task, -1);
            task._transitionTo(notScheduled, canceling);
            task.runCount = 0;
            return task;
        }
        _updateTaskCount(task, count) {
            const zoneDelegates = task._zoneDelegates;
            if (count == -1) {
                task._zoneDelegates = null;
            }
            for (let i = 0; i < zoneDelegates.length; i++) {
                zoneDelegates[i]._updateTaskCount(task.type, count);
            }
        }
    }
    Zone.__symbol__ = __symbol__;
    const DELEGATE_ZS = {
        name: '',
        onHasTask: (delegate, _, target, hasTaskState) => delegate.hasTask(target, hasTaskState),
        onScheduleTask: (delegate, _, target, task) => delegate.scheduleTask(target, task),
        onInvokeTask: (delegate, _, target, task, applyThis, applyArgs) => delegate.invokeTask(target, task, applyThis, applyArgs),
        onCancelTask: (delegate, _, target, task) => delegate.cancelTask(target, task)
    };
    class ZoneDelegate {
        constructor(zone, parentDelegate, zoneSpec) {
            this._taskCounts = { 'microTask': 0, 'macroTask': 0, 'eventTask': 0 };
            this.zone = zone;
            this._parentDelegate = parentDelegate;
            this._forkZS = zoneSpec && (zoneSpec && zoneSpec.onFork ? zoneSpec : parentDelegate._forkZS);
            this._forkDlgt = zoneSpec && (zoneSpec.onFork ? parentDelegate : parentDelegate._forkDlgt);
            this._forkCurrZone = zoneSpec && (zoneSpec.onFork ? this.zone : parentDelegate.zone);
            this._interceptZS =
                zoneSpec && (zoneSpec.onIntercept ? zoneSpec : parentDelegate._interceptZS);
            this._interceptDlgt =
                zoneSpec && (zoneSpec.onIntercept ? parentDelegate : parentDelegate._interceptDlgt);
            this._interceptCurrZone =
                zoneSpec && (zoneSpec.onIntercept ? this.zone : parentDelegate.zone);
            this._invokeZS = zoneSpec && (zoneSpec.onInvoke ? zoneSpec : parentDelegate._invokeZS);
            this._invokeDlgt =
                zoneSpec && (zoneSpec.onInvoke ? parentDelegate : parentDelegate._invokeDlgt);
            this._invokeCurrZone = zoneSpec && (zoneSpec.onInvoke ? this.zone : parentDelegate.zone);
            this._handleErrorZS =
                zoneSpec && (zoneSpec.onHandleError ? zoneSpec : parentDelegate._handleErrorZS);
            this._handleErrorDlgt =
                zoneSpec && (zoneSpec.onHandleError ? parentDelegate : parentDelegate._handleErrorDlgt);
            this._handleErrorCurrZone =
                zoneSpec && (zoneSpec.onHandleError ? this.zone : parentDelegate.zone);
            this._scheduleTaskZS =
                zoneSpec && (zoneSpec.onScheduleTask ? zoneSpec : parentDelegate._scheduleTaskZS);
            this._scheduleTaskDlgt = zoneSpec &&
                (zoneSpec.onScheduleTask ? parentDelegate : parentDelegate._scheduleTaskDlgt);
            this._scheduleTaskCurrZone =
                zoneSpec && (zoneSpec.onScheduleTask ? this.zone : parentDelegate.zone);
            this._invokeTaskZS =
                zoneSpec && (zoneSpec.onInvokeTask ? zoneSpec : parentDelegate._invokeTaskZS);
            this._invokeTaskDlgt =
                zoneSpec && (zoneSpec.onInvokeTask ? parentDelegate : parentDelegate._invokeTaskDlgt);
            this._invokeTaskCurrZone =
                zoneSpec && (zoneSpec.onInvokeTask ? this.zone : parentDelegate.zone);
            this._cancelTaskZS =
                zoneSpec && (zoneSpec.onCancelTask ? zoneSpec : parentDelegate._cancelTaskZS);
            this._cancelTaskDlgt =
                zoneSpec && (zoneSpec.onCancelTask ? parentDelegate : parentDelegate._cancelTaskDlgt);
            this._cancelTaskCurrZone =
                zoneSpec && (zoneSpec.onCancelTask ? this.zone : parentDelegate.zone);
            this._hasTaskZS = null;
            this._hasTaskDlgt = null;
            this._hasTaskDlgtOwner = null;
            this._hasTaskCurrZone = null;
            const zoneSpecHasTask = zoneSpec && zoneSpec.onHasTask;
            const parentHasTask = parentDelegate && parentDelegate._hasTaskZS;
            if (zoneSpecHasTask || parentHasTask) {
                // If we need to report hasTask, than this ZS needs to do ref counting on tasks. In such
                // a case all task related interceptors must go through this ZD. We can't short circuit it.
                this._hasTaskZS = zoneSpecHasTask ? zoneSpec : DELEGATE_ZS;
                this._hasTaskDlgt = parentDelegate;
                this._hasTaskDlgtOwner = this;
                this._hasTaskCurrZone = zone;
                if (!zoneSpec.onScheduleTask) {
                    this._scheduleTaskZS = DELEGATE_ZS;
                    this._scheduleTaskDlgt = parentDelegate;
                    this._scheduleTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onInvokeTask) {
                    this._invokeTaskZS = DELEGATE_ZS;
                    this._invokeTaskDlgt = parentDelegate;
                    this._invokeTaskCurrZone = this.zone;
                }
                if (!zoneSpec.onCancelTask) {
                    this._cancelTaskZS = DELEGATE_ZS;
                    this._cancelTaskDlgt = parentDelegate;
                    this._cancelTaskCurrZone = this.zone;
                }
            }
        }
        fork(targetZone, zoneSpec) {
            return this._forkZS ? this._forkZS.onFork(this._forkDlgt, this.zone, targetZone, zoneSpec) :
                new Zone(targetZone, zoneSpec);
        }
        intercept(targetZone, callback, source) {
            return this._interceptZS ?
                this._interceptZS.onIntercept(this._interceptDlgt, this._interceptCurrZone, targetZone, callback, source) :
                callback;
        }
        invoke(targetZone, callback, applyThis, applyArgs, source) {
            return this._invokeZS ? this._invokeZS.onInvoke(this._invokeDlgt, this._invokeCurrZone, targetZone, callback, applyThis, applyArgs, source) :
                callback.apply(applyThis, applyArgs);
        }
        handleError(targetZone, error) {
            return this._handleErrorZS ?
                this._handleErrorZS.onHandleError(this._handleErrorDlgt, this._handleErrorCurrZone, targetZone, error) :
                true;
        }
        scheduleTask(targetZone, task) {
            let returnTask = task;
            if (this._scheduleTaskZS) {
                if (this._hasTaskZS) {
                    returnTask._zoneDelegates.push(this._hasTaskDlgtOwner);
                }
                returnTask = this._scheduleTaskZS.onScheduleTask(this._scheduleTaskDlgt, this._scheduleTaskCurrZone, targetZone, task);
                if (!returnTask)
                    returnTask = task;
            }
            else {
                if (task.scheduleFn) {
                    task.scheduleFn(task);
                }
                else if (task.type == microTask) {
                    scheduleMicroTask(task);
                }
                else {
                    throw new Error('Task is missing scheduleFn.');
                }
            }
            return returnTask;
        }
        invokeTask(targetZone, task, applyThis, applyArgs) {
            return this._invokeTaskZS ? this._invokeTaskZS.onInvokeTask(this._invokeTaskDlgt, this._invokeTaskCurrZone, targetZone, task, applyThis, applyArgs) :
                task.callback.apply(applyThis, applyArgs);
        }
        cancelTask(targetZone, task) {
            let value;
            if (this._cancelTaskZS) {
                value = this._cancelTaskZS.onCancelTask(this._cancelTaskDlgt, this._cancelTaskCurrZone, targetZone, task);
            }
            else {
                if (!task.cancelFn) {
                    throw Error('Task is not cancelable');
                }
                value = task.cancelFn(task);
            }
            return value;
        }
        hasTask(targetZone, isEmpty) {
            // hasTask should not throw error so other ZoneDelegate
            // can still trigger hasTask callback
            try {
                this._hasTaskZS &&
                    this._hasTaskZS.onHasTask(this._hasTaskDlgt, this._hasTaskCurrZone, targetZone, isEmpty);
            }
            catch (err) {
                this.handleError(targetZone, err);
            }
        }
        _updateTaskCount(type, count) {
            const counts = this._taskCounts;
            const prev = counts[type];
            const next = counts[type] = prev + count;
            if (next < 0) {
                throw new Error('More tasks executed then were scheduled.');
            }
            if (prev == 0 || next == 0) {
                const isEmpty = {
                    microTask: counts['microTask'] > 0,
                    macroTask: counts['macroTask'] > 0,
                    eventTask: counts['eventTask'] > 0,
                    change: type
                };
                this.hasTask(this.zone, isEmpty);
            }
        }
    }
    class ZoneTask {
        constructor(type, source, callback, options, scheduleFn, cancelFn) {
            this._zone = null;
            this.runCount = 0;
            this._zoneDelegates = null;
            this._state = 'notScheduled';
            this.type = type;
            this.source = source;
            this.data = options;
            this.scheduleFn = scheduleFn;
            this.cancelFn = cancelFn;
            this.callback = callback;
            const self = this;
            // TODO: @JiaLiPassion options should have interface
            if (type === eventTask && options && options.useG) {
                this.invoke = ZoneTask.invokeTask;
            }
            else {
                this.invoke = function () {
                    return ZoneTask.invokeTask.call(global, self, this, arguments);
                };
            }
        }
        static invokeTask(task, target, args) {
            if (!task) {
                task = this;
            }
            _numberOfNestedTaskFrames++;
            try {
                task.runCount++;
                return task.zone.runTask(task, target, args);
            }
            finally {
                if (_numberOfNestedTaskFrames == 1) {
                    drainMicroTaskQueue();
                }
                _numberOfNestedTaskFrames--;
            }
        }
        get zone() {
            return this._zone;
        }
        get state() {
            return this._state;
        }
        cancelScheduleRequest() {
            this._transitionTo(notScheduled, scheduling);
        }
        _transitionTo(toState, fromState1, fromState2) {
            if (this._state === fromState1 || this._state === fromState2) {
                this._state = toState;
                if (toState == notScheduled) {
                    this._zoneDelegates = null;
                }
            }
            else {
                throw new Error(`${this.type} '${this.source}': can not transition to '${toState}', expecting state '${fromState1}'${fromState2 ? ' or \'' + fromState2 + '\'' : ''}, was '${this._state}'.`);
            }
        }
        toString() {
            if (this.data && typeof this.data.handleId !== 'undefined') {
                return this.data.handleId.toString();
            }
            else {
                return Object.prototype.toString.call(this);
            }
        }
        // add toJSON method to prevent cyclic error when
        // call JSON.stringify(zoneTask)
        toJSON() {
            return {
                type: this.type,
                state: this.state,
                source: this.source,
                zone: this.zone.name,
                runCount: this.runCount
            };
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  MICROTASK QUEUE
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const symbolSetTimeout = __symbol__('setTimeout');
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    let _microTaskQueue = [];
    let _isDrainingMicrotaskQueue = false;
    let nativeMicroTaskQueuePromise;
    function scheduleMicroTask(task) {
        // if we are not running in any task, and there has not been anything scheduled
        // we must bootstrap the initial task creation by manually scheduling the drain
        if (_numberOfNestedTaskFrames === 0 && _microTaskQueue.length === 0) {
            // We are not running in Task, so we need to kickstart the microtask queue.
            if (!nativeMicroTaskQueuePromise) {
                if (global[symbolPromise]) {
                    nativeMicroTaskQueuePromise = global[symbolPromise].resolve(0);
                }
            }
            if (nativeMicroTaskQueuePromise) {
                let nativeThen = nativeMicroTaskQueuePromise[symbolThen];
                if (!nativeThen) {
                    // native Promise is not patchable, we need to use `then` directly
                    // issue 1078
                    nativeThen = nativeMicroTaskQueuePromise['then'];
                }
                nativeThen.call(nativeMicroTaskQueuePromise, drainMicroTaskQueue);
            }
            else {
                global[symbolSetTimeout](drainMicroTaskQueue, 0);
            }
        }
        task && _microTaskQueue.push(task);
    }
    function drainMicroTaskQueue() {
        if (!_isDrainingMicrotaskQueue) {
            _isDrainingMicrotaskQueue = true;
            while (_microTaskQueue.length) {
                const queue = _microTaskQueue;
                _microTaskQueue = [];
                for (let i = 0; i < queue.length; i++) {
                    const task = queue[i];
                    try {
                        task.zone.runTask(task, null, null);
                    }
                    catch (error) {
                        _api.onUnhandledError(error);
                    }
                }
            }
            _api.microtaskDrainDone();
            _isDrainingMicrotaskQueue = false;
        }
    }
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    ///  BOOTSTRAP
    //////////////////////////////////////////////////////
    //////////////////////////////////////////////////////
    const NO_ZONE = { name: 'NO ZONE' };
    const notScheduled = 'notScheduled', scheduling = 'scheduling', scheduled = 'scheduled', running = 'running', canceling = 'canceling', unknown = 'unknown';
    const microTask = 'microTask', macroTask = 'macroTask', eventTask = 'eventTask';
    const patches = {};
    const _api = {
        symbol: __symbol__,
        currentZoneFrame: () => _currentZoneFrame,
        onUnhandledError: noop,
        microtaskDrainDone: noop,
        scheduleMicroTask: scheduleMicroTask,
        showUncaughtError: () => !Zone[__symbol__('ignoreConsoleErrorUncaughtError')],
        patchEventTarget: () => [],
        patchOnProperties: noop,
        patchMethod: () => noop,
        bindArguments: () => [],
        patchThen: () => noop,
        patchMacroTask: () => noop,
        setNativePromise: (NativePromise) => {
            // sometimes NativePromise.resolve static function
            // is not ready yet, (such as core-js/es6.promise)
            // so we need to check here.
            if (NativePromise && typeof NativePromise.resolve === 'function') {
                nativeMicroTaskQueuePromise = NativePromise.resolve(0);
            }
        },
        patchEventPrototype: () => noop,
        isIEOrEdge: () => false,
        getGlobalObjects: () => undefined,
        ObjectDefineProperty: () => noop,
        ObjectGetOwnPropertyDescriptor: () => undefined,
        ObjectCreate: () => undefined,
        ArraySlice: () => [],
        patchClass: () => noop,
        wrapWithCurrentZone: () => noop,
        filterProperties: () => [],
        attachOriginToPatched: () => noop,
        _redefineProperty: () => noop,
        patchCallbacks: () => noop
    };
    let _currentZoneFrame = { parent: null, zone: new Zone(null, null) };
    let _currentTask = null;
    let _numberOfNestedTaskFrames = 0;
    function noop() { }
    function __symbol__(name) {
        return '__zone_symbol__' + name;
    }
    performanceMeasure('Zone', 'Zone');
    return global['Zone'] = Zone;
})(typeof window !== 'undefined' && window || typeof self !== 'undefined' && self || global);

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('ZoneAwarePromise', (global, Zone, api) => {
    const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    const ObjectDefineProperty = Object.defineProperty;
    function readableObjectToString(obj) {
        if (obj && obj.toString === Object.prototype.toString) {
            const className = obj.constructor && obj.constructor.name;
            return (className ? className : '') + ': ' + JSON.stringify(obj);
        }
        return obj ? obj.toString() : Object.prototype.toString.call(obj);
    }
    const __symbol__ = api.symbol;
    const _uncaughtPromiseErrors = [];
    const symbolPromise = __symbol__('Promise');
    const symbolThen = __symbol__('then');
    const creationTrace = '__creationTrace__';
    api.onUnhandledError = (e) => {
        if (api.showUncaughtError()) {
            const rejection = e && e.rejection;
            if (rejection) {
                console.error('Unhandled Promise rejection:', rejection instanceof Error ? rejection.message : rejection, '; Zone:', e.zone.name, '; Task:', e.task && e.task.source, '; Value:', rejection, rejection instanceof Error ? rejection.stack : undefined);
            }
            else {
                console.error(e);
            }
        }
    };
    api.microtaskDrainDone = () => {
        while (_uncaughtPromiseErrors.length) {
            while (_uncaughtPromiseErrors.length) {
                const uncaughtPromiseError = _uncaughtPromiseErrors.shift();
                try {
                    uncaughtPromiseError.zone.runGuarded(() => {
                        throw uncaughtPromiseError;
                    });
                }
                catch (error) {
                    handleUnhandledRejection(error);
                }
            }
        }
    };
    const UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL = __symbol__('unhandledPromiseRejectionHandler');
    function handleUnhandledRejection(e) {
        api.onUnhandledError(e);
        try {
            const handler = Zone[UNHANDLED_PROMISE_REJECTION_HANDLER_SYMBOL];
            if (handler && typeof handler === 'function') {
                handler.call(this, e);
            }
        }
        catch (err) {
        }
    }
    function isThenable(value) {
        return value && value.then;
    }
    function forwardResolution(value) {
        return value;
    }
    function forwardRejection(rejection) {
        return ZoneAwarePromise.reject(rejection);
    }
    const symbolState = __symbol__('state');
    const symbolValue = __symbol__('value');
    const symbolFinally = __symbol__('finally');
    const symbolParentPromiseValue = __symbol__('parentPromiseValue');
    const symbolParentPromiseState = __symbol__('parentPromiseState');
    const source = 'Promise.then';
    const UNRESOLVED = null;
    const RESOLVED = true;
    const REJECTED = false;
    const REJECTED_NO_CATCH = 0;
    function makeResolver(promise, state) {
        return (v) => {
            try {
                resolvePromise(promise, state, v);
            }
            catch (err) {
                resolvePromise(promise, false, err);
            }
            // Do not return value or you will break the Promise spec.
        };
    }
    const once = function () {
        let wasCalled = false;
        return function wrapper(wrappedFunction) {
            return function () {
                if (wasCalled) {
                    return;
                }
                wasCalled = true;
                wrappedFunction.apply(null, arguments);
            };
        };
    };
    const TYPE_ERROR = 'Promise resolved with itself';
    const CURRENT_TASK_TRACE_SYMBOL = __symbol__('currentTaskTrace');
    // Promise Resolution
    function resolvePromise(promise, state, value) {
        const onceWrapper = once();
        if (promise === value) {
            throw new TypeError(TYPE_ERROR);
        }
        if (promise[symbolState] === UNRESOLVED) {
            // should only get value.then once based on promise spec.
            let then = null;
            try {
                if (typeof value === 'object' || typeof value === 'function') {
                    then = value && value.then;
                }
            }
            catch (err) {
                onceWrapper(() => {
                    resolvePromise(promise, false, err);
                })();
                return promise;
            }
            // if (value instanceof ZoneAwarePromise) {
            if (state !== REJECTED && value instanceof ZoneAwarePromise &&
                value.hasOwnProperty(symbolState) && value.hasOwnProperty(symbolValue) &&
                value[symbolState] !== UNRESOLVED) {
                clearRejectedNoCatch(value);
                resolvePromise(promise, value[symbolState], value[symbolValue]);
            }
            else if (state !== REJECTED && typeof then === 'function') {
                try {
                    then.call(value, onceWrapper(makeResolver(promise, state)), onceWrapper(makeResolver(promise, false)));
                }
                catch (err) {
                    onceWrapper(() => {
                        resolvePromise(promise, false, err);
                    })();
                }
            }
            else {
                promise[symbolState] = state;
                const queue = promise[symbolValue];
                promise[symbolValue] = value;
                if (promise[symbolFinally] === symbolFinally) {
                    // the promise is generated by Promise.prototype.finally
                    if (state === RESOLVED) {
                        // the state is resolved, should ignore the value
                        // and use parent promise value
                        promise[symbolState] = promise[symbolParentPromiseState];
                        promise[symbolValue] = promise[symbolParentPromiseValue];
                    }
                }
                // record task information in value when error occurs, so we can
                // do some additional work such as render longStackTrace
                if (state === REJECTED && value instanceof Error) {
                    // check if longStackTraceZone is here
                    const trace = Zone.currentTask && Zone.currentTask.data &&
                        Zone.currentTask.data[creationTrace];
                    if (trace) {
                        // only keep the long stack trace into error when in longStackTraceZone
                        ObjectDefineProperty(value, CURRENT_TASK_TRACE_SYMBOL, { configurable: true, enumerable: false, writable: true, value: trace });
                    }
                }
                for (let i = 0; i < queue.length;) {
                    scheduleResolveOrReject(promise, queue[i++], queue[i++], queue[i++], queue[i++]);
                }
                if (queue.length == 0 && state == REJECTED) {
                    promise[symbolState] = REJECTED_NO_CATCH;
                    try {
                        // try to print more readable error log
                        throw new Error('Uncaught (in promise): ' + readableObjectToString(value) +
                            (value && value.stack ? '\n' + value.stack : ''));
                    }
                    catch (err) {
                        const error = err;
                        error.rejection = value;
                        error.promise = promise;
                        error.zone = Zone.current;
                        error.task = Zone.currentTask;
                        _uncaughtPromiseErrors.push(error);
                        api.scheduleMicroTask(); // to make sure that it is running
                    }
                }
            }
        }
        // Resolving an already resolved promise is a noop.
        return promise;
    }
    const REJECTION_HANDLED_HANDLER = __symbol__('rejectionHandledHandler');
    function clearRejectedNoCatch(promise) {
        if (promise[symbolState] === REJECTED_NO_CATCH) {
            // if the promise is rejected no catch status
            // and queue.length > 0, means there is a error handler
            // here to handle the rejected promise, we should trigger
            // windows.rejectionhandled eventHandler or nodejs rejectionHandled
            // eventHandler
            try {
                const handler = Zone[REJECTION_HANDLED_HANDLER];
                if (handler && typeof handler === 'function') {
                    handler.call(this, { rejection: promise[symbolValue], promise: promise });
                }
            }
            catch (err) {
            }
            promise[symbolState] = REJECTED;
            for (let i = 0; i < _uncaughtPromiseErrors.length; i++) {
                if (promise === _uncaughtPromiseErrors[i].promise) {
                    _uncaughtPromiseErrors.splice(i, 1);
                }
            }
        }
    }
    function scheduleResolveOrReject(promise, zone, chainPromise, onFulfilled, onRejected) {
        clearRejectedNoCatch(promise);
        const promiseState = promise[symbolState];
        const delegate = promiseState ?
            (typeof onFulfilled === 'function') ? onFulfilled : forwardResolution :
            (typeof onRejected === 'function') ? onRejected : forwardRejection;
        zone.scheduleMicroTask(source, () => {
            try {
                const parentPromiseValue = promise[symbolValue];
                const isFinallyPromise = chainPromise && symbolFinally === chainPromise[symbolFinally];
                if (isFinallyPromise) {
                    // if the promise is generated from finally call, keep parent promise's state and value
                    chainPromise[symbolParentPromiseValue] = parentPromiseValue;
                    chainPromise[symbolParentPromiseState] = promiseState;
                }
                // should not pass value to finally callback
                const value = zone.run(delegate, undefined, isFinallyPromise && delegate !== forwardRejection && delegate !== forwardResolution ?
                    [] :
                    [parentPromiseValue]);
                resolvePromise(chainPromise, true, value);
            }
            catch (error) {
                // if error occurs, should always return this error
                resolvePromise(chainPromise, false, error);
            }
        }, chainPromise);
    }
    const ZONE_AWARE_PROMISE_TO_STRING = 'function ZoneAwarePromise() { [native code] }';
    class ZoneAwarePromise {
        constructor(executor) {
            const promise = this;
            if (!(promise instanceof ZoneAwarePromise)) {
                throw new Error('Must be an instanceof Promise.');
            }
            promise[symbolState] = UNRESOLVED;
            promise[symbolValue] = []; // queue;
            try {
                executor && executor(makeResolver(promise, RESOLVED), makeResolver(promise, REJECTED));
            }
            catch (error) {
                resolvePromise(promise, false, error);
            }
        }
        static toString() {
            return ZONE_AWARE_PROMISE_TO_STRING;
        }
        static resolve(value) {
            return resolvePromise(new this(null), RESOLVED, value);
        }
        static reject(error) {
            return resolvePromise(new this(null), REJECTED, error);
        }
        static race(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            function onResolve(value) {
                resolve(value);
            }
            function onReject(error) {
                reject(error);
            }
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                value.then(onResolve, onReject);
            }
            return promise;
        }
        static all(values) {
            let resolve;
            let reject;
            let promise = new this((res, rej) => {
                resolve = res;
                reject = rej;
            });
            // Start at 2 to prevent prematurely resolving if .then is called immediately.
            let unresolvedCount = 2;
            let valueIndex = 0;
            const resolvedValues = [];
            for (let value of values) {
                if (!isThenable(value)) {
                    value = this.resolve(value);
                }
                const curValueIndex = valueIndex;
                value.then((value) => {
                    resolvedValues[curValueIndex] = value;
                    unresolvedCount--;
                    if (unresolvedCount === 0) {
                        resolve(resolvedValues);
                    }
                }, reject);
                unresolvedCount++;
                valueIndex++;
            }
            // Make the unresolvedCount zero-based again.
            unresolvedCount -= 2;
            if (unresolvedCount === 0) {
                resolve(resolvedValues);
            }
            return promise;
        }
        get [Symbol.toStringTag]() {
            return 'Promise';
        }
        then(onFulfilled, onRejected) {
            const chainPromise = new this.constructor(null);
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFulfilled, onRejected);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFulfilled, onRejected);
            }
            return chainPromise;
        }
        catch(onRejected) {
            return this.then(null, onRejected);
        }
        finally(onFinally) {
            const chainPromise = new this.constructor(null);
            chainPromise[symbolFinally] = symbolFinally;
            const zone = Zone.current;
            if (this[symbolState] == UNRESOLVED) {
                this[symbolValue].push(zone, chainPromise, onFinally, onFinally);
            }
            else {
                scheduleResolveOrReject(this, zone, chainPromise, onFinally, onFinally);
            }
            return chainPromise;
        }
    }
    // Protect against aggressive optimizers dropping seemingly unused properties.
    // E.g. Closure Compiler in advanced mode.
    ZoneAwarePromise['resolve'] = ZoneAwarePromise.resolve;
    ZoneAwarePromise['reject'] = ZoneAwarePromise.reject;
    ZoneAwarePromise['race'] = ZoneAwarePromise.race;
    ZoneAwarePromise['all'] = ZoneAwarePromise.all;
    const NativePromise = global[symbolPromise] = global['Promise'];
    const ZONE_AWARE_PROMISE = Zone.__symbol__('ZoneAwarePromise');
    let desc = ObjectGetOwnPropertyDescriptor(global, 'Promise');
    if (!desc || desc.configurable) {
        desc && delete desc.writable;
        desc && delete desc.value;
        if (!desc) {
            desc = { configurable: true, enumerable: true };
        }
        desc.get = function () {
            // if we already set ZoneAwarePromise, use patched one
            // otherwise return native one.
            return global[ZONE_AWARE_PROMISE] ? global[ZONE_AWARE_PROMISE] : global[symbolPromise];
        };
        desc.set = function (NewNativePromise) {
            if (NewNativePromise === ZoneAwarePromise) {
                // if the NewNativePromise is ZoneAwarePromise
                // save to global
                global[ZONE_AWARE_PROMISE] = NewNativePromise;
            }
            else {
                // if the NewNativePromise is not ZoneAwarePromise
                // for example: after load zone.js, some library just
                // set es6-promise to global, if we set it to global
                // directly, assertZonePatched will fail and angular
                // will not loaded, so we just set the NewNativePromise
                // to global[symbolPromise], so the result is just like
                // we load ES6 Promise before zone.js
                global[symbolPromise] = NewNativePromise;
                if (!NewNativePromise.prototype[symbolThen]) {
                    patchThen(NewNativePromise);
                }
                api.setNativePromise(NewNativePromise);
            }
        };
        ObjectDefineProperty(global, 'Promise', desc);
    }
    global['Promise'] = ZoneAwarePromise;
    const symbolThenPatched = __symbol__('thenPatched');
    function patchThen(Ctor) {
        const proto = Ctor.prototype;
        const prop = ObjectGetOwnPropertyDescriptor(proto, 'then');
        if (prop && (prop.writable === false || !prop.configurable)) {
            // check Ctor.prototype.then propertyDescriptor is writable or not
            // in meteor env, writable is false, we should ignore such case
            return;
        }
        const originalThen = proto.then;
        // Keep a reference to the original method.
        proto[symbolThen] = originalThen;
        Ctor.prototype.then = function (onResolve, onReject) {
            const wrapped = new ZoneAwarePromise((resolve, reject) => {
                originalThen.call(this, resolve, reject);
            });
            return wrapped.then(onResolve, onReject);
        };
        Ctor[symbolThenPatched] = true;
    }
    api.patchThen = patchThen;
    function zoneify(fn) {
        return function () {
            let resultPromise = fn.apply(this, arguments);
            if (resultPromise instanceof ZoneAwarePromise) {
                return resultPromise;
            }
            let ctor = resultPromise.constructor;
            if (!ctor[symbolThenPatched]) {
                patchThen(ctor);
            }
            return resultPromise;
        };
    }
    if (NativePromise) {
        patchThen(NativePromise);
        const fetch = global['fetch'];
        if (typeof fetch == 'function') {
            global[api.symbol('fetch')] = fetch;
            global['fetch'] = zoneify(fetch);
        }
    }
    // This is not part of public API, but it is useful for tests, so we expose it.
    Promise[Zone.__symbol__('uncaughtPromiseErrors')] = _uncaughtPromiseErrors;
    return ZoneAwarePromise;
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * Suppress closure compiler errors about unknown 'Zone' variable
 * @fileoverview
 * @suppress {undefinedVars,globalThis,missingRequire}
 */
// issue #989, to reduce bundle size, use short name
/** Object.getOwnPropertyDescriptor */
const ObjectGetOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
/** Object.defineProperty */
const ObjectDefineProperty = Object.defineProperty;
/** Object.getPrototypeOf */
const ObjectGetPrototypeOf = Object.getPrototypeOf;
/** Object.create */
const ObjectCreate = Object.create;
/** Array.prototype.slice */
const ArraySlice = Array.prototype.slice;
/** addEventListener string const */
const ADD_EVENT_LISTENER_STR = 'addEventListener';
/** removeEventListener string const */
const REMOVE_EVENT_LISTENER_STR = 'removeEventListener';
/** zoneSymbol addEventListener */
const ZONE_SYMBOL_ADD_EVENT_LISTENER = Zone.__symbol__(ADD_EVENT_LISTENER_STR);
/** zoneSymbol removeEventListener */
const ZONE_SYMBOL_REMOVE_EVENT_LISTENER = Zone.__symbol__(REMOVE_EVENT_LISTENER_STR);
/** true string const */
const TRUE_STR = 'true';
/** false string const */
const FALSE_STR = 'false';
/** __zone_symbol__ string const */
const ZONE_SYMBOL_PREFIX = '__zone_symbol__';
function wrapWithCurrentZone(callback, source) {
    return Zone.current.wrap(callback, source);
}
function scheduleMacroTaskWithCurrentZone(source, callback, data, customSchedule, customCancel) {
    return Zone.current.scheduleMacroTask(source, callback, data, customSchedule, customCancel);
}
const zoneSymbol = Zone.__symbol__;
const isWindowExists = typeof window !== 'undefined';
const internalWindow = isWindowExists ? window : undefined;
const _global = isWindowExists && internalWindow || typeof self === 'object' && self || global;
const REMOVE_ATTRIBUTE = 'removeAttribute';
const NULL_ON_PROP_VALUE = [null];
function bindArguments(args, source) {
    for (let i = args.length - 1; i >= 0; i--) {
        if (typeof args[i] === 'function') {
            args[i] = wrapWithCurrentZone(args[i], source + '_' + i);
        }
    }
    return args;
}
function patchPrototype(prototype, fnNames) {
    const source = prototype.constructor['name'];
    for (let i = 0; i < fnNames.length; i++) {
        const name = fnNames[i];
        const delegate = prototype[name];
        if (delegate) {
            const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, name);
            if (!isPropertyWritable(prototypeDesc)) {
                continue;
            }
            prototype[name] = ((delegate) => {
                const patched = function () {
                    return delegate.apply(this, bindArguments(arguments, source + '.' + name));
                };
                attachOriginToPatched(patched, delegate);
                return patched;
            })(delegate);
        }
    }
}
function isPropertyWritable(propertyDesc) {
    if (!propertyDesc) {
        return true;
    }
    if (propertyDesc.writable === false) {
        return false;
    }
    return !(typeof propertyDesc.get === 'function' && typeof propertyDesc.set === 'undefined');
}
const isWebWorker = (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope);
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isNode = (!('nw' in _global) && typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]');
const isBrowser = !isNode && !isWebWorker && !!(isWindowExists && internalWindow['HTMLElement']);
// we are in electron of nw, so we are both browser and nodejs
// Make sure to access `process` through `_global` so that WebPack does not accidentally browserify
// this code.
const isMix = typeof _global.process !== 'undefined' &&
    {}.toString.call(_global.process) === '[object process]' && !isWebWorker &&
    !!(isWindowExists && internalWindow['HTMLElement']);
const zoneSymbolEventNames = {};
const wrapFn = function (event) {
    // https://github.com/angular/zone.js/issues/911, in IE, sometimes
    // event will be undefined, so we need to use window.event
    event = event || _global.event;
    if (!event) {
        return;
    }
    let eventNameSymbol = zoneSymbolEventNames[event.type];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[event.type] = zoneSymbol('ON_PROPERTY' + event.type);
    }
    const target = this || event.target || _global;
    const listener = target[eventNameSymbol];
    let result;
    if (isBrowser && target === internalWindow && event.type === 'error') {
        // window.onerror have different signiture
        // https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers/onerror#window.onerror
        // and onerror callback will prevent default when callback return true
        const errorEvent = event;
        result = listener &&
            listener.call(this, errorEvent.message, errorEvent.filename, errorEvent.lineno, errorEvent.colno, errorEvent.error);
        if (result === true) {
            event.preventDefault();
        }
    }
    else {
        result = listener && listener.apply(this, arguments);
        if (result != undefined && !result) {
            event.preventDefault();
        }
    }
    return result;
};
function patchProperty(obj, prop, prototype) {
    let desc = ObjectGetOwnPropertyDescriptor(obj, prop);
    if (!desc && prototype) {
        // when patch window object, use prototype to check prop exist or not
        const prototypeDesc = ObjectGetOwnPropertyDescriptor(prototype, prop);
        if (prototypeDesc) {
            desc = { enumerable: true, configurable: true };
        }
    }
    // if the descriptor not exists or is not configurable
    // just return
    if (!desc || !desc.configurable) {
        return;
    }
    const onPropPatchedSymbol = zoneSymbol('on' + prop + 'patched');
    if (obj.hasOwnProperty(onPropPatchedSymbol) && obj[onPropPatchedSymbol]) {
        return;
    }
    // A property descriptor cannot have getter/setter and be writable
    // deleting the writable and value properties avoids this error:
    //
    // TypeError: property descriptors must not specify a value or be writable when a
    // getter or setter has been specified
    delete desc.writable;
    delete desc.value;
    const originalDescGet = desc.get;
    const originalDescSet = desc.set;
    // substr(2) cuz 'onclick' -> 'click', etc
    const eventName = prop.substr(2);
    let eventNameSymbol = zoneSymbolEventNames[eventName];
    if (!eventNameSymbol) {
        eventNameSymbol = zoneSymbolEventNames[eventName] = zoneSymbol('ON_PROPERTY' + eventName);
    }
    desc.set = function (newValue) {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return;
        }
        let previousValue = target[eventNameSymbol];
        if (previousValue) {
            target.removeEventListener(eventName, wrapFn);
        }
        // issue #978, when onload handler was added before loading zone.js
        // we should remove it with originalDescSet
        if (originalDescSet) {
            originalDescSet.apply(target, NULL_ON_PROP_VALUE);
        }
        if (typeof newValue === 'function') {
            target[eventNameSymbol] = newValue;
            target.addEventListener(eventName, wrapFn, false);
        }
        else {
            target[eventNameSymbol] = null;
        }
    };
    // The getter would return undefined for unassigned properties but the default value of an
    // unassigned property is null
    desc.get = function () {
        // in some of windows's onproperty callback, this is undefined
        // so we need to check it
        let target = this;
        if (!target && obj === _global) {
            target = _global;
        }
        if (!target) {
            return null;
        }
        const listener = target[eventNameSymbol];
        if (listener) {
            return listener;
        }
        else if (originalDescGet) {
            // result will be null when use inline event attribute,
            // such as <button onclick="func();">OK</button>
            // because the onclick function is internal raw uncompiled handler
            // the onclick will be evaluated when first time event was triggered or
            // the property is accessed, https://github.com/angular/zone.js/issues/525
            // so we should use original native get to retrieve the handler
            let value = originalDescGet && originalDescGet.call(this);
            if (value) {
                desc.set.call(this, value);
                if (typeof target[REMOVE_ATTRIBUTE] === 'function') {
                    target.removeAttribute(prop);
                }
                return value;
            }
        }
        return null;
    };
    ObjectDefineProperty(obj, prop, desc);
    obj[onPropPatchedSymbol] = true;
}
function patchOnProperties(obj, properties, prototype) {
    if (properties) {
        for (let i = 0; i < properties.length; i++) {
            patchProperty(obj, 'on' + properties[i], prototype);
        }
    }
    else {
        const onProperties = [];
        for (const prop in obj) {
            if (prop.substr(0, 2) == 'on') {
                onProperties.push(prop);
            }
        }
        for (let j = 0; j < onProperties.length; j++) {
            patchProperty(obj, onProperties[j], prototype);
        }
    }
}
const originalInstanceKey = zoneSymbol('originalInstance');
// wrap some native API on `window`
function patchClass(className) {
    const OriginalClass = _global[className];
    if (!OriginalClass)
        return;
    // keep original class in global
    _global[zoneSymbol(className)] = OriginalClass;
    _global[className] = function () {
        const a = bindArguments(arguments, className);
        switch (a.length) {
            case 0:
                this[originalInstanceKey] = new OriginalClass();
                break;
            case 1:
                this[originalInstanceKey] = new OriginalClass(a[0]);
                break;
            case 2:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1]);
                break;
            case 3:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2]);
                break;
            case 4:
                this[originalInstanceKey] = new OriginalClass(a[0], a[1], a[2], a[3]);
                break;
            default:
                throw new Error('Arg list too long.');
        }
    };
    // attach original delegate to patched function
    attachOriginToPatched(_global[className], OriginalClass);
    const instance = new OriginalClass(function () { });
    let prop;
    for (prop in instance) {
        // https://bugs.webkit.org/show_bug.cgi?id=44721
        if (className === 'XMLHttpRequest' && prop === 'responseBlob')
            continue;
        (function (prop) {
            if (typeof instance[prop] === 'function') {
                _global[className].prototype[prop] = function () {
                    return this[originalInstanceKey][prop].apply(this[originalInstanceKey], arguments);
                };
            }
            else {
                ObjectDefineProperty(_global[className].prototype, prop, {
                    set: function (fn) {
                        if (typeof fn === 'function') {
                            this[originalInstanceKey][prop] = wrapWithCurrentZone(fn, className + '.' + prop);
                            // keep callback in wrapped function so we can
                            // use it in Function.prototype.toString to return
                            // the native one.
                            attachOriginToPatched(this[originalInstanceKey][prop], fn);
                        }
                        else {
                            this[originalInstanceKey][prop] = fn;
                        }
                    },
                    get: function () {
                        return this[originalInstanceKey][prop];
                    }
                });
            }
        }(prop));
    }
    for (prop in OriginalClass) {
        if (prop !== 'prototype' && OriginalClass.hasOwnProperty(prop)) {
            _global[className][prop] = OriginalClass[prop];
        }
    }
}
function copySymbolProperties(src, dest) {
    if (typeof Object.getOwnPropertySymbols !== 'function') {
        return;
    }
    const symbols = Object.getOwnPropertySymbols(src);
    symbols.forEach((symbol) => {
        const desc = Object.getOwnPropertyDescriptor(src, symbol);
        Object.defineProperty(dest, symbol, {
            get: function () {
                return src[symbol];
            },
            set: function (value) {
                if (desc && (!desc.writable || typeof desc.set !== 'function')) {
                    // if src[symbol] is not writable or not have a setter, just return
                    return;
                }
                src[symbol] = value;
            },
            enumerable: desc ? desc.enumerable : true,
            configurable: desc ? desc.configurable : true
        });
    });
}
let shouldCopySymbolProperties = false;

function patchMethod(target, name, patchFn) {
    let proto = target;
    while (proto && !proto.hasOwnProperty(name)) {
        proto = ObjectGetPrototypeOf(proto);
    }
    if (!proto && target[name]) {
        // somehow we did not find it, but we can see it. This happens on IE for Window properties.
        proto = target;
    }
    const delegateName = zoneSymbol(name);
    let delegate = null;
    if (proto && !(delegate = proto[delegateName])) {
        delegate = proto[delegateName] = proto[name];
        // check whether proto[name] is writable
        // some property is readonly in safari, such as HtmlCanvasElement.prototype.toBlob
        const desc = proto && ObjectGetOwnPropertyDescriptor(proto, name);
        if (isPropertyWritable(desc)) {
            const patchDelegate = patchFn(delegate, delegateName, name);
            proto[name] = function () {
                return patchDelegate(this, arguments);
            };
            attachOriginToPatched(proto[name], delegate);
            if (shouldCopySymbolProperties) {
                copySymbolProperties(delegate, proto[name]);
            }
        }
    }
    return delegate;
}
// TODO: @JiaLiPassion, support cancel task later if necessary
function patchMacroTask(obj, funcName, metaCreator) {
    let setNative = null;
    function scheduleTask(task) {
        const data = task.data;
        data.args[data.cbIdx] = function () {
            task.invoke.apply(this, arguments);
        };
        setNative.apply(data.target, data.args);
        return task;
    }
    setNative = patchMethod(obj, funcName, (delegate) => function (self, args) {
        const meta = metaCreator(self, args);
        if (meta.cbIdx >= 0 && typeof args[meta.cbIdx] === 'function') {
            return scheduleMacroTaskWithCurrentZone(meta.name, args[meta.cbIdx], meta, scheduleTask);
        }
        else {
            // cause an error by calling it directly.
            return delegate.apply(self, args);
        }
    });
}

function attachOriginToPatched(patched, original) {
    patched[zoneSymbol('OriginalDelegate')] = original;
}
let isDetectedIEOrEdge = false;
let ieOrEdge = false;
function isIE() {
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1) {
            return true;
        }
    }
    catch (error) {
    }
    return false;
}
function isIEOrEdge() {
    if (isDetectedIEOrEdge) {
        return ieOrEdge;
    }
    isDetectedIEOrEdge = true;
    try {
        const ua = internalWindow.navigator.userAgent;
        if (ua.indexOf('MSIE ') !== -1 || ua.indexOf('Trident/') !== -1 || ua.indexOf('Edge/') !== -1) {
            ieOrEdge = true;
        }
    }
    catch (error) {
    }
    return ieOrEdge;
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// override Function.prototype.toString to make zone.js patched function
// look like native function
Zone.__load_patch('toString', (global) => {
    // patch Func.prototype.toString to let them look like native
    const originalFunctionToString = Function.prototype.toString;
    const ORIGINAL_DELEGATE_SYMBOL = zoneSymbol('OriginalDelegate');
    const PROMISE_SYMBOL = zoneSymbol('Promise');
    const ERROR_SYMBOL = zoneSymbol('Error');
    const newFunctionToString = function toString() {
        if (typeof this === 'function') {
            const originalDelegate = this[ORIGINAL_DELEGATE_SYMBOL];
            if (originalDelegate) {
                if (typeof originalDelegate === 'function') {
                    return originalFunctionToString.call(originalDelegate);
                }
                else {
                    return Object.prototype.toString.call(originalDelegate);
                }
            }
            if (this === Promise) {
                const nativePromise = global[PROMISE_SYMBOL];
                if (nativePromise) {
                    return originalFunctionToString.call(nativePromise);
                }
            }
            if (this === Error) {
                const nativeError = global[ERROR_SYMBOL];
                if (nativeError) {
                    return originalFunctionToString.call(nativeError);
                }
            }
        }
        return originalFunctionToString.call(this);
    };
    newFunctionToString[ORIGINAL_DELEGATE_SYMBOL] = originalFunctionToString;
    Function.prototype.toString = newFunctionToString;
    // patch Object.prototype.toString to let them look like native
    const originalObjectToString = Object.prototype.toString;
    const PROMISE_OBJECT_TO_STRING = '[object Promise]';
    Object.prototype.toString = function () {
        if (this instanceof Promise) {
            return PROMISE_OBJECT_TO_STRING;
        }
        return originalObjectToString.call(this);
    };
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
let passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        const options = Object.defineProperty({}, 'passive', {
            get: function () {
                passiveSupported = true;
            }
        });
        window.addEventListener('test', options, options);
        window.removeEventListener('test', options, options);
    }
    catch (err) {
        passiveSupported = false;
    }
}
// an identifier to tell ZoneTask do not create a new invoke closure
const OPTIMIZED_ZONE_EVENT_TASK_DATA = {
    useG: true
};
const zoneSymbolEventNames$1 = {};
const globalSources = {};
const EVENT_NAME_SYMBOL_REGX = /^__zone_symbol__(\w+)(true|false)$/;
const IMMEDIATE_PROPAGATION_SYMBOL = ('__zone_symbol__propagationStopped');
function patchEventTarget(_global, apis, patchOptions) {
    const ADD_EVENT_LISTENER = (patchOptions && patchOptions.add) || ADD_EVENT_LISTENER_STR;
    const REMOVE_EVENT_LISTENER = (patchOptions && patchOptions.rm) || REMOVE_EVENT_LISTENER_STR;
    const LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.listeners) || 'eventListeners';
    const REMOVE_ALL_LISTENERS_EVENT_LISTENER = (patchOptions && patchOptions.rmAll) || 'removeAllListeners';
    const zoneSymbolAddEventListener = zoneSymbol(ADD_EVENT_LISTENER);
    const ADD_EVENT_LISTENER_SOURCE = '.' + ADD_EVENT_LISTENER + ':';
    const PREPEND_EVENT_LISTENER = 'prependListener';
    const PREPEND_EVENT_LISTENER_SOURCE = '.' + PREPEND_EVENT_LISTENER + ':';
    const invokeTask = function (task, target, event) {
        // for better performance, check isRemoved which is set
        // by removeEventListener
        if (task.isRemoved) {
            return;
        }
        const delegate = task.callback;
        if (typeof delegate === 'object' && delegate.handleEvent) {
            // create the bind version of handleEvent when invoke
            task.callback = (event) => delegate.handleEvent(event);
            task.originalDelegate = delegate;
        }
        // invoke static task.invoke
        task.invoke(task, target, [event]);
        const options = task.options;
        if (options && typeof options === 'object' && options.once) {
            // if options.once is true, after invoke once remove listener here
            // only browser need to do this, nodejs eventEmitter will cal removeListener
            // inside EventEmitter.once
            const delegate = task.originalDelegate ? task.originalDelegate : task.callback;
            target[REMOVE_EVENT_LISTENER].call(target, event.type, delegate, options);
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = false
    const globalZoneAwareCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global;
        const tasks = target[zoneSymbolEventNames$1[event.type][FALSE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for (let i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    // global shared zoneAwareCallback to handle all event callback with capture = true
    const globalZoneAwareCaptureCallback = function (event) {
        // https://github.com/angular/zone.js/issues/911, in IE, sometimes
        // event will be undefined, so we need to use window.event
        event = event || _global.event;
        if (!event) {
            return;
        }
        // event.target is needed for Samsung TV and SourceBuffer
        // || global is needed https://github.com/angular/zone.js/issues/190
        const target = this || event.target || _global;
        const tasks = target[zoneSymbolEventNames$1[event.type][TRUE_STR]];
        if (tasks) {
            // invoke all tasks which attached to current target with given event.type and capture = false
            // for performance concern, if task.length === 1, just invoke
            if (tasks.length === 1) {
                invokeTask(tasks[0], target, event);
            }
            else {
                // https://github.com/angular/zone.js/issues/836
                // copy the tasks array before invoke, to avoid
                // the callback will remove itself or other listener
                const copyTasks = tasks.slice();
                for (let i = 0; i < copyTasks.length; i++) {
                    if (event && event[IMMEDIATE_PROPAGATION_SYMBOL] === true) {
                        break;
                    }
                    invokeTask(copyTasks[i], target, event);
                }
            }
        }
    };
    function patchEventTargetMethods(obj, patchOptions) {
        if (!obj) {
            return false;
        }
        let useGlobalCallback = true;
        if (patchOptions && patchOptions.useG !== undefined) {
            useGlobalCallback = patchOptions.useG;
        }
        const validateHandler = patchOptions && patchOptions.vh;
        let checkDuplicate = true;
        if (patchOptions && patchOptions.chkDup !== undefined) {
            checkDuplicate = patchOptions.chkDup;
        }
        let returnTarget = false;
        if (patchOptions && patchOptions.rt !== undefined) {
            returnTarget = patchOptions.rt;
        }
        let proto = obj;
        while (proto && !proto.hasOwnProperty(ADD_EVENT_LISTENER)) {
            proto = ObjectGetPrototypeOf(proto);
        }
        if (!proto && obj[ADD_EVENT_LISTENER]) {
            // somehow we did not find it, but we can see it. This happens on IE for Window properties.
            proto = obj;
        }
        if (!proto) {
            return false;
        }
        if (proto[zoneSymbolAddEventListener]) {
            return false;
        }
        const eventNameToString = patchOptions && patchOptions.eventNameToString;
        // a shared global taskData to pass data for scheduleEventTask
        // so we do not need to create a new object just for pass some data
        const taskData = {};
        const nativeAddEventListener = proto[zoneSymbolAddEventListener] = proto[ADD_EVENT_LISTENER];
        const nativeRemoveEventListener = proto[zoneSymbol(REMOVE_EVENT_LISTENER)] =
            proto[REMOVE_EVENT_LISTENER];
        const nativeListeners = proto[zoneSymbol(LISTENERS_EVENT_LISTENER)] =
            proto[LISTENERS_EVENT_LISTENER];
        const nativeRemoveAllListeners = proto[zoneSymbol(REMOVE_ALL_LISTENERS_EVENT_LISTENER)] =
            proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER];
        let nativePrependEventListener;
        if (patchOptions && patchOptions.prepend) {
            nativePrependEventListener = proto[zoneSymbol(patchOptions.prepend)] =
                proto[patchOptions.prepend];
        }
        function checkIsPassive(task) {
            if (!passiveSupported && typeof taskData.options !== 'boolean' &&
                typeof taskData.options !== 'undefined' && taskData.options !== null) {
                // options is a non-null non-undefined object
                // passive is not supported
                // don't pass options as object
                // just pass capture as a boolean
                task.options = !!taskData.options.capture;
                taskData.options = task.options;
            }
        }
        const customScheduleGlobal = function (task) {
            // if there is already a task for the eventName + capture,
            // just return, because we use the shared globalZoneAwareCallback here.
            if (taskData.isExisting) {
                return;
            }
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, taskData.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, taskData.options);
        };
        const customCancelGlobal = function (task) {
            // if task is not marked as isRemoved, this call is directly
            // from Zone.prototype.cancelTask, we should remove the task
            // from tasksList of target first
            if (!task.isRemoved) {
                const symbolEventNames = zoneSymbolEventNames$1[task.eventName];
                let symbolEventName;
                if (symbolEventNames) {
                    symbolEventName = symbolEventNames[task.capture ? TRUE_STR : FALSE_STR];
                }
                const existingTasks = symbolEventName && task.target[symbolEventName];
                if (existingTasks) {
                    for (let i = 0; i < existingTasks.length; i++) {
                        const existingTask = existingTasks[i];
                        if (existingTask === task) {
                            existingTasks.splice(i, 1);
                            // set isRemoved to data for faster invokeTask check
                            task.isRemoved = true;
                            if (existingTasks.length === 0) {
                                // all tasks for the eventName + capture have gone,
                                // remove globalZoneAwareCallback and remove the task cache from target
                                task.allRemoved = true;
                                task.target[symbolEventName] = null;
                            }
                            break;
                        }
                    }
                }
            }
            // if all tasks for the eventName + capture have gone,
            // we will really remove the global event callback,
            // if not, return
            if (!task.allRemoved) {
                return;
            }
            return nativeRemoveEventListener.call(task.target, task.eventName, task.capture ? globalZoneAwareCaptureCallback : globalZoneAwareCallback, task.options);
        };
        const customScheduleNonGlobal = function (task) {
            checkIsPassive(task);
            return nativeAddEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customSchedulePrepend = function (task) {
            return nativePrependEventListener.call(taskData.target, taskData.eventName, task.invoke, taskData.options);
        };
        const customCancelNonGlobal = function (task) {
            return nativeRemoveEventListener.call(task.target, task.eventName, task.invoke, task.options);
        };
        const customSchedule = useGlobalCallback ? customScheduleGlobal : customScheduleNonGlobal;
        const customCancel = useGlobalCallback ? customCancelGlobal : customCancelNonGlobal;
        const compareTaskCallbackVsDelegate = function (task, delegate) {
            const typeOfDelegate = typeof delegate;
            return (typeOfDelegate === 'function' && task.callback === delegate) ||
                (typeOfDelegate === 'object' && task.originalDelegate === delegate);
        };
        const compare = (patchOptions && patchOptions.diff) ? patchOptions.diff : compareTaskCallbackVsDelegate;
        const blackListedEvents = Zone[Zone.__symbol__('BLACK_LISTED_EVENTS')];
        const makeAddListener = function (nativeListener, addSource, customScheduleFn, customCancelFn, returnTarget = false, prepend = false) {
            return function () {
                const target = this || _global;
                const eventName = arguments[0];
                let delegate = arguments[1];
                if (!delegate) {
                    return nativeListener.apply(this, arguments);
                }
                if (isNode && eventName === 'uncaughtException') {
                    // don't patch uncaughtException of nodejs to prevent endless loop
                    return nativeListener.apply(this, arguments);
                }
                // don't create the bind delegate function for handleEvent
                // case here to improve addEventListener performance
                // we will create the bind delegate when invoke
                let isHandleEvent = false;
                if (typeof delegate !== 'function') {
                    if (!delegate.handleEvent) {
                        return nativeListener.apply(this, arguments);
                    }
                    isHandleEvent = true;
                }
                if (validateHandler && !validateHandler(nativeListener, delegate, target, arguments)) {
                    return;
                }
                const options = arguments[2];
                if (blackListedEvents) {
                    // check black list
                    for (let i = 0; i < blackListedEvents.length; i++) {
                        if (eventName === blackListedEvents[i]) {
                            return nativeListener.apply(this, arguments);
                        }
                    }
                }
                let capture;
                let once = false;
                if (options === undefined) {
                    capture = false;
                }
                else if (options === true) {
                    capture = true;
                }
                else if (options === false) {
                    capture = false;
                }
                else {
                    capture = options ? !!options.capture : false;
                    once = options ? !!options.once : false;
                }
                const zone = Zone.current;
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                let symbolEventName;
                if (!symbolEventNames) {
                    // the code is duplicate, but I just want to get some better performance
                    const falseEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + FALSE_STR;
                    const trueEventName = (eventNameToString ? eventNameToString(eventName) : eventName) + TRUE_STR;
                    const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
                    const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
                    zoneSymbolEventNames$1[eventName] = {};
                    zoneSymbolEventNames$1[eventName][FALSE_STR] = symbol;
                    zoneSymbolEventNames$1[eventName][TRUE_STR] = symbolCapture;
                    symbolEventName = capture ? symbolCapture : symbol;
                }
                else {
                    symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
                }
                let existingTasks = target[symbolEventName];
                let isExisting = false;
                if (existingTasks) {
                    // already have task registered
                    isExisting = true;
                    if (checkDuplicate) {
                        for (let i = 0; i < existingTasks.length; i++) {
                            if (compare(existingTasks[i], delegate)) {
                                // same callback, same capture, same event name, just return
                                return;
                            }
                        }
                    }
                }
                else {
                    existingTasks = target[symbolEventName] = [];
                }
                let source;
                const constructorName = target.constructor['name'];
                const targetSource = globalSources[constructorName];
                if (targetSource) {
                    source = targetSource[eventName];
                }
                if (!source) {
                    source = constructorName + addSource +
                        (eventNameToString ? eventNameToString(eventName) : eventName);
                }
                // do not create a new object as task.data to pass those things
                // just use the global shared one
                taskData.options = options;
                if (once) {
                    // if addEventListener with once options, we don't pass it to
                    // native addEventListener, instead we keep the once setting
                    // and handle ourselves.
                    taskData.options.once = false;
                }
                taskData.target = target;
                taskData.capture = capture;
                taskData.eventName = eventName;
                taskData.isExisting = isExisting;
                const data = useGlobalCallback ? OPTIMIZED_ZONE_EVENT_TASK_DATA : undefined;
                // keep taskData into data to allow onScheduleEventTask to access the task information
                if (data) {
                    data.taskData = taskData;
                }
                const task = zone.scheduleEventTask(source, delegate, data, customScheduleFn, customCancelFn);
                // should clear taskData.target to avoid memory leak
                // issue, https://github.com/angular/angular/issues/20442
                taskData.target = null;
                // need to clear up taskData because it is a global object
                if (data) {
                    data.taskData = null;
                }
                // have to save those information to task in case
                // application may call task.zone.cancelTask() directly
                if (once) {
                    options.once = true;
                }
                if (!(!passiveSupported && typeof task.options === 'boolean')) {
                    // if not support passive, and we pass an option object
                    // to addEventListener, we should save the options to task
                    task.options = options;
                }
                task.target = target;
                task.capture = capture;
                task.eventName = eventName;
                if (isHandleEvent) {
                    // save original delegate for compare to check duplicate
                    task.originalDelegate = delegate;
                }
                if (!prepend) {
                    existingTasks.push(task);
                }
                else {
                    existingTasks.unshift(task);
                }
                if (returnTarget) {
                    return target;
                }
            };
        };
        proto[ADD_EVENT_LISTENER] = makeAddListener(nativeAddEventListener, ADD_EVENT_LISTENER_SOURCE, customSchedule, customCancel, returnTarget);
        if (nativePrependEventListener) {
            proto[PREPEND_EVENT_LISTENER] = makeAddListener(nativePrependEventListener, PREPEND_EVENT_LISTENER_SOURCE, customSchedulePrepend, customCancel, returnTarget, true);
        }
        proto[REMOVE_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            const options = arguments[2];
            let capture;
            if (options === undefined) {
                capture = false;
            }
            else if (options === true) {
                capture = true;
            }
            else if (options === false) {
                capture = false;
            }
            else {
                capture = options ? !!options.capture : false;
            }
            const delegate = arguments[1];
            if (!delegate) {
                return nativeRemoveEventListener.apply(this, arguments);
            }
            if (validateHandler &&
                !validateHandler(nativeRemoveEventListener, delegate, target, arguments)) {
                return;
            }
            const symbolEventNames = zoneSymbolEventNames$1[eventName];
            let symbolEventName;
            if (symbolEventNames) {
                symbolEventName = symbolEventNames[capture ? TRUE_STR : FALSE_STR];
            }
            const existingTasks = symbolEventName && target[symbolEventName];
            if (existingTasks) {
                for (let i = 0; i < existingTasks.length; i++) {
                    const existingTask = existingTasks[i];
                    if (compare(existingTask, delegate)) {
                        existingTasks.splice(i, 1);
                        // set isRemoved to data for faster invokeTask check
                        existingTask.isRemoved = true;
                        if (existingTasks.length === 0) {
                            // all tasks for the eventName + capture have gone,
                            // remove globalZoneAwareCallback and remove the task cache from target
                            existingTask.allRemoved = true;
                            target[symbolEventName] = null;
                        }
                        existingTask.zone.cancelTask(existingTask);
                        if (returnTarget) {
                            return target;
                        }
                        return;
                    }
                }
            }
            // issue 930, didn't find the event name or callback
            // from zone kept existingTasks, the callback maybe
            // added outside of zone, we need to call native removeEventListener
            // to try to remove it.
            return nativeRemoveEventListener.apply(this, arguments);
        };
        proto[LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            const listeners = [];
            const tasks = findEventTasks(target, eventNameToString ? eventNameToString(eventName) : eventName);
            for (let i = 0; i < tasks.length; i++) {
                const task = tasks[i];
                let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                listeners.push(delegate);
            }
            return listeners;
        };
        proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER] = function () {
            const target = this || _global;
            const eventName = arguments[0];
            if (!eventName) {
                const keys = Object.keys(target);
                for (let i = 0; i < keys.length; i++) {
                    const prop = keys[i];
                    const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
                    let evtName = match && match[1];
                    // in nodejs EventEmitter, removeListener event is
                    // used for monitoring the removeListener call,
                    // so just keep removeListener eventListener until
                    // all other eventListeners are removed
                    if (evtName && evtName !== 'removeListener') {
                        this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, evtName);
                    }
                }
                // remove removeListener listener finally
                this[REMOVE_ALL_LISTENERS_EVENT_LISTENER].call(this, 'removeListener');
            }
            else {
                const symbolEventNames = zoneSymbolEventNames$1[eventName];
                if (symbolEventNames) {
                    const symbolEventName = symbolEventNames[FALSE_STR];
                    const symbolCaptureEventName = symbolEventNames[TRUE_STR];
                    const tasks = target[symbolEventName];
                    const captureTasks = target[symbolCaptureEventName];
                    if (tasks) {
                        const removeTasks = tasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                    if (captureTasks) {
                        const removeTasks = captureTasks.slice();
                        for (let i = 0; i < removeTasks.length; i++) {
                            const task = removeTasks[i];
                            let delegate = task.originalDelegate ? task.originalDelegate : task.callback;
                            this[REMOVE_EVENT_LISTENER].call(this, eventName, delegate, task.options);
                        }
                    }
                }
            }
            if (returnTarget) {
                return this;
            }
        };
        // for native toString patch
        attachOriginToPatched(proto[ADD_EVENT_LISTENER], nativeAddEventListener);
        attachOriginToPatched(proto[REMOVE_EVENT_LISTENER], nativeRemoveEventListener);
        if (nativeRemoveAllListeners) {
            attachOriginToPatched(proto[REMOVE_ALL_LISTENERS_EVENT_LISTENER], nativeRemoveAllListeners);
        }
        if (nativeListeners) {
            attachOriginToPatched(proto[LISTENERS_EVENT_LISTENER], nativeListeners);
        }
        return true;
    }
    let results = [];
    for (let i = 0; i < apis.length; i++) {
        results[i] = patchEventTargetMethods(apis[i], patchOptions);
    }
    return results;
}
function findEventTasks(target, eventName) {
    const foundTasks = [];
    for (let prop in target) {
        const match = EVENT_NAME_SYMBOL_REGX.exec(prop);
        let evtName = match && match[1];
        if (evtName && (!eventName || evtName === eventName)) {
            const tasks = target[prop];
            if (tasks) {
                for (let i = 0; i < tasks.length; i++) {
                    foundTasks.push(tasks[i]);
                }
            }
        }
    }
    return foundTasks;
}
function patchEventPrototype(global, api) {
    const Event = global['Event'];
    if (Event && Event.prototype) {
        api.patchMethod(Event.prototype, 'stopImmediatePropagation', (delegate) => function (self, args) {
            self[IMMEDIATE_PROPAGATION_SYMBOL] = true;
            // we need to call the native stopImmediatePropagation
            // in case in some hybrid application, some part of
            // application will be controlled by zone, some are not
            delegate && delegate.apply(self, args);
        });
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCallbacks(api, target, targetName, method, callbacks) {
    const symbol = Zone.__symbol__(method);
    if (target[symbol]) {
        return;
    }
    const nativeDelegate = target[symbol] = target[method];
    target[method] = function (name, opts, options) {
        if (opts && opts.prototype) {
            callbacks.forEach(function (callback) {
                const source = `${targetName}.${method}::` + callback;
                const prototype = opts.prototype;
                if (prototype.hasOwnProperty(callback)) {
                    const descriptor = api.ObjectGetOwnPropertyDescriptor(prototype, callback);
                    if (descriptor && descriptor.value) {
                        descriptor.value = api.wrapWithCurrentZone(descriptor.value, source);
                        api._redefineProperty(opts.prototype, callback, descriptor);
                    }
                    else if (prototype[callback]) {
                        prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                    }
                }
                else if (prototype[callback]) {
                    prototype[callback] = api.wrapWithCurrentZone(prototype[callback], source);
                }
            });
        }
        return nativeDelegate.call(target, name, opts, options);
    };
    api.attachOriginToPatched(target[method], nativeDelegate);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/*
 * This is necessary for Chrome and Chrome mobile, to enable
 * things like redefining `createdCallback` on an element.
 */
const zoneSymbol$1 = Zone.__symbol__;
const _defineProperty = Object[zoneSymbol$1('defineProperty')] = Object.defineProperty;
const _getOwnPropertyDescriptor = Object[zoneSymbol$1('getOwnPropertyDescriptor')] =
    Object.getOwnPropertyDescriptor;
const _create = Object.create;
const unconfigurablesKey = zoneSymbol$1('unconfigurables');
function propertyPatch() {
    Object.defineProperty = function (obj, prop, desc) {
        if (isUnconfigurable(obj, prop)) {
            throw new TypeError('Cannot assign to read only property \'' + prop + '\' of ' + obj);
        }
        const originalConfigurableFlag = desc.configurable;
        if (prop !== 'prototype') {
            desc = rewriteDescriptor(obj, prop, desc);
        }
        return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
    };
    Object.defineProperties = function (obj, props) {
        Object.keys(props).forEach(function (prop) {
            Object.defineProperty(obj, prop, props[prop]);
        });
        return obj;
    };
    Object.create = function (obj, proto) {
        if (typeof proto === 'object' && !Object.isFrozen(proto)) {
            Object.keys(proto).forEach(function (prop) {
                proto[prop] = rewriteDescriptor(obj, prop, proto[prop]);
            });
        }
        return _create(obj, proto);
    };
    Object.getOwnPropertyDescriptor = function (obj, prop) {
        const desc = _getOwnPropertyDescriptor(obj, prop);
        if (desc && isUnconfigurable(obj, prop)) {
            desc.configurable = false;
        }
        return desc;
    };
}
function _redefineProperty(obj, prop, desc) {
    const originalConfigurableFlag = desc.configurable;
    desc = rewriteDescriptor(obj, prop, desc);
    return _tryDefineProperty(obj, prop, desc, originalConfigurableFlag);
}
function isUnconfigurable(obj, prop) {
    return obj && obj[unconfigurablesKey] && obj[unconfigurablesKey][prop];
}
function rewriteDescriptor(obj, prop, desc) {
    // issue-927, if the desc is frozen, don't try to change the desc
    if (!Object.isFrozen(desc)) {
        desc.configurable = true;
    }
    if (!desc.configurable) {
        // issue-927, if the obj is frozen, don't try to set the desc to obj
        if (!obj[unconfigurablesKey] && !Object.isFrozen(obj)) {
            _defineProperty(obj, unconfigurablesKey, { writable: true, value: {} });
        }
        if (obj[unconfigurablesKey]) {
            obj[unconfigurablesKey][prop] = true;
        }
    }
    return desc;
}
function _tryDefineProperty(obj, prop, desc, originalConfigurableFlag) {
    try {
        return _defineProperty(obj, prop, desc);
    }
    catch (error) {
        if (desc.configurable) {
            // In case of errors, when the configurable flag was likely set by rewriteDescriptor(), let's
            // retry with the original flag value
            if (typeof originalConfigurableFlag == 'undefined') {
                delete desc.configurable;
            }
            else {
                desc.configurable = originalConfigurableFlag;
            }
            try {
                return _defineProperty(obj, prop, desc);
            }
            catch (error) {
                let descJson = null;
                try {
                    descJson = JSON.stringify(desc);
                }
                catch (error) {
                    descJson = desc.toString();
                }
                console.log(`Attempting to configure '${prop}' with descriptor '${descJson}' on object '${obj}' and got error, giving up: ${error}`);
            }
        }
        else {
            throw error;
        }
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {globalThis}
 */
const globalEventHandlersEventNames = [
    'abort',
    'animationcancel',
    'animationend',
    'animationiteration',
    'auxclick',
    'beforeinput',
    'blur',
    'cancel',
    'canplay',
    'canplaythrough',
    'change',
    'compositionstart',
    'compositionupdate',
    'compositionend',
    'cuechange',
    'click',
    'close',
    'contextmenu',
    'curechange',
    'dblclick',
    'drag',
    'dragend',
    'dragenter',
    'dragexit',
    'dragleave',
    'dragover',
    'drop',
    'durationchange',
    'emptied',
    'ended',
    'error',
    'focus',
    'focusin',
    'focusout',
    'gotpointercapture',
    'input',
    'invalid',
    'keydown',
    'keypress',
    'keyup',
    'load',
    'loadstart',
    'loadeddata',
    'loadedmetadata',
    'lostpointercapture',
    'mousedown',
    'mouseenter',
    'mouseleave',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'mousewheel',
    'orientationchange',
    'pause',
    'play',
    'playing',
    'pointercancel',
    'pointerdown',
    'pointerenter',
    'pointerleave',
    'pointerlockchange',
    'mozpointerlockchange',
    'webkitpointerlockerchange',
    'pointerlockerror',
    'mozpointerlockerror',
    'webkitpointerlockerror',
    'pointermove',
    'pointout',
    'pointerover',
    'pointerup',
    'progress',
    'ratechange',
    'reset',
    'resize',
    'scroll',
    'seeked',
    'seeking',
    'select',
    'selectionchange',
    'selectstart',
    'show',
    'sort',
    'stalled',
    'submit',
    'suspend',
    'timeupdate',
    'volumechange',
    'touchcancel',
    'touchmove',
    'touchstart',
    'touchend',
    'transitioncancel',
    'transitionend',
    'waiting',
    'wheel'
];
const documentEventNames = [
    'afterscriptexecute', 'beforescriptexecute', 'DOMContentLoaded', 'freeze', 'fullscreenchange',
    'mozfullscreenchange', 'webkitfullscreenchange', 'msfullscreenchange', 'fullscreenerror',
    'mozfullscreenerror', 'webkitfullscreenerror', 'msfullscreenerror', 'readystatechange',
    'visibilitychange', 'resume'
];
const windowEventNames = [
    'absolutedeviceorientation',
    'afterinput',
    'afterprint',
    'appinstalled',
    'beforeinstallprompt',
    'beforeprint',
    'beforeunload',
    'devicelight',
    'devicemotion',
    'deviceorientation',
    'deviceorientationabsolute',
    'deviceproximity',
    'hashchange',
    'languagechange',
    'message',
    'mozbeforepaint',
    'offline',
    'online',
    'paint',
    'pageshow',
    'pagehide',
    'popstate',
    'rejectionhandled',
    'storage',
    'unhandledrejection',
    'unload',
    'userproximity',
    'vrdisplyconnected',
    'vrdisplaydisconnected',
    'vrdisplaypresentchange'
];
const htmlElementEventNames = [
    'beforecopy', 'beforecut', 'beforepaste', 'copy', 'cut', 'paste', 'dragstart', 'loadend',
    'animationstart', 'search', 'transitionrun', 'transitionstart', 'webkitanimationend',
    'webkitanimationiteration', 'webkitanimationstart', 'webkittransitionend'
];
const mediaElementEventNames = ['encrypted', 'waitingforkey', 'msneedkey', 'mozinterruptbegin', 'mozinterruptend'];
const ieElementEventNames = [
    'activate',
    'afterupdate',
    'ariarequest',
    'beforeactivate',
    'beforedeactivate',
    'beforeeditfocus',
    'beforeupdate',
    'cellchange',
    'controlselect',
    'dataavailable',
    'datasetchanged',
    'datasetcomplete',
    'errorupdate',
    'filterchange',
    'layoutcomplete',
    'losecapture',
    'move',
    'moveend',
    'movestart',
    'propertychange',
    'resizeend',
    'resizestart',
    'rowenter',
    'rowexit',
    'rowsdelete',
    'rowsinserted',
    'command',
    'compassneedscalibration',
    'deactivate',
    'help',
    'mscontentzoom',
    'msmanipulationstatechanged',
    'msgesturechange',
    'msgesturedoubletap',
    'msgestureend',
    'msgesturehold',
    'msgesturestart',
    'msgesturetap',
    'msgotpointercapture',
    'msinertiastart',
    'mslostpointercapture',
    'mspointercancel',
    'mspointerdown',
    'mspointerenter',
    'mspointerhover',
    'mspointerleave',
    'mspointermove',
    'mspointerout',
    'mspointerover',
    'mspointerup',
    'pointerout',
    'mssitemodejumplistitemremoved',
    'msthumbnailclick',
    'stop',
    'storagecommit'
];
const webglEventNames = ['webglcontextrestored', 'webglcontextlost', 'webglcontextcreationerror'];
const formEventNames = ['autocomplete', 'autocompleteerror'];
const detailEventNames = ['toggle'];
const frameEventNames = ['load'];
const frameSetEventNames = ['blur', 'error', 'focus', 'load', 'resize', 'scroll', 'messageerror'];
const marqueeEventNames = ['bounce', 'finish', 'start'];
const XMLHttpRequestEventNames = [
    'loadstart', 'progress', 'abort', 'error', 'load', 'progress', 'timeout', 'loadend',
    'readystatechange'
];
const IDBIndexEventNames = ['upgradeneeded', 'complete', 'abort', 'success', 'error', 'blocked', 'versionchange', 'close'];
const websocketEventNames = ['close', 'error', 'open', 'message'];
const workerEventNames = ['error', 'message'];
const eventNames = globalEventHandlersEventNames.concat(webglEventNames, formEventNames, detailEventNames, documentEventNames, windowEventNames, htmlElementEventNames, ieElementEventNames);
function filterProperties(target, onProperties, ignoreProperties) {
    if (!ignoreProperties || ignoreProperties.length === 0) {
        return onProperties;
    }
    const tip = ignoreProperties.filter(ip => ip.target === target);
    if (!tip || tip.length === 0) {
        return onProperties;
    }
    const targetIgnoreProperties = tip[0].ignoreProperties;
    return onProperties.filter(op => targetIgnoreProperties.indexOf(op) === -1);
}
function patchFilteredProperties(target, onProperties, ignoreProperties, prototype) {
    // check whether target is available, sometimes target will be undefined
    // because different browser or some 3rd party plugin.
    if (!target) {
        return;
    }
    const filteredProperties = filterProperties(target, onProperties, ignoreProperties);
    patchOnProperties(target, filteredProperties, prototype);
}
function propertyDescriptorPatch(api, _global) {
    if (isNode && !isMix) {
        return;
    }
    if (Zone[api.symbol('patchEvents')]) {
        // events are already been patched by legacy patch.
        return;
    }
    const supportsWebSocket = typeof WebSocket !== 'undefined';
    const ignoreProperties = _global['__Zone_ignore_on_properties'];
    // for browsers that we can patch the descriptor:  Chrome & Firefox
    if (isBrowser) {
        const internalWindow = window;
        const ignoreErrorProperties = isIE ? [{ target: internalWindow, ignoreProperties: ['error'] }] : [];
        // in IE/Edge, onProp not exist in window object, but in WindowPrototype
        // so we need to pass WindowPrototype to check onProp exist or not
        patchFilteredProperties(internalWindow, eventNames.concat(['messageerror']), ignoreProperties ? ignoreProperties.concat(ignoreErrorProperties) : ignoreProperties, ObjectGetPrototypeOf(internalWindow));
        patchFilteredProperties(Document.prototype, eventNames, ignoreProperties);
        if (typeof internalWindow['SVGElement'] !== 'undefined') {
            patchFilteredProperties(internalWindow['SVGElement'].prototype, eventNames, ignoreProperties);
        }
        patchFilteredProperties(Element.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLElement.prototype, eventNames, ignoreProperties);
        patchFilteredProperties(HTMLMediaElement.prototype, mediaElementEventNames, ignoreProperties);
        patchFilteredProperties(HTMLFrameSetElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLBodyElement.prototype, windowEventNames.concat(frameSetEventNames), ignoreProperties);
        patchFilteredProperties(HTMLFrameElement.prototype, frameEventNames, ignoreProperties);
        patchFilteredProperties(HTMLIFrameElement.prototype, frameEventNames, ignoreProperties);
        const HTMLMarqueeElement = internalWindow['HTMLMarqueeElement'];
        if (HTMLMarqueeElement) {
            patchFilteredProperties(HTMLMarqueeElement.prototype, marqueeEventNames, ignoreProperties);
        }
        const Worker = internalWindow['Worker'];
        if (Worker) {
            patchFilteredProperties(Worker.prototype, workerEventNames, ignoreProperties);
        }
    }
    const XMLHttpRequest = _global['XMLHttpRequest'];
    if (XMLHttpRequest) {
        // XMLHttpRequest is not available in ServiceWorker, so we need to check here
        patchFilteredProperties(XMLHttpRequest.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    const XMLHttpRequestEventTarget = _global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget) {
        patchFilteredProperties(XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype, XMLHttpRequestEventNames, ignoreProperties);
    }
    if (typeof IDBIndex !== 'undefined') {
        patchFilteredProperties(IDBIndex.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBOpenDBRequest.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBDatabase.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBTransaction.prototype, IDBIndexEventNames, ignoreProperties);
        patchFilteredProperties(IDBCursor.prototype, IDBIndexEventNames, ignoreProperties);
    }
    if (supportsWebSocket) {
        patchFilteredProperties(WebSocket.prototype, websocketEventNames, ignoreProperties);
    }
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Zone.__load_patch('util', (global, Zone, api) => {
    api.patchOnProperties = patchOnProperties;
    api.patchMethod = patchMethod;
    api.bindArguments = bindArguments;
    api.patchMacroTask = patchMacroTask;
    // In earlier version of zone.js (<0.9.0), we use env name `__zone_symbol__BLACK_LISTED_EVENTS` to
    // define which events will not be patched by `Zone.js`.
    // In newer version (>=0.9.0), we change the env name to `__zone_symbol__UNPATCHED_EVENTS` to keep
    // the name consistent with angular repo.
    // The  `__zone_symbol__BLACK_LISTED_EVENTS` is deprecated, but it is still be supported for
    // backwards compatibility.
    const SYMBOL_BLACK_LISTED_EVENTS = Zone.__symbol__('BLACK_LISTED_EVENTS');
    const SYMBOL_UNPATCHED_EVENTS = Zone.__symbol__('UNPATCHED_EVENTS');
    if (global[SYMBOL_UNPATCHED_EVENTS]) {
        global[SYMBOL_BLACK_LISTED_EVENTS] = global[SYMBOL_UNPATCHED_EVENTS];
    }
    if (global[SYMBOL_BLACK_LISTED_EVENTS]) {
        Zone[SYMBOL_BLACK_LISTED_EVENTS] = Zone[SYMBOL_UNPATCHED_EVENTS] =
            global[SYMBOL_BLACK_LISTED_EVENTS];
    }
    api.patchEventPrototype = patchEventPrototype;
    api.patchEventTarget = patchEventTarget;
    api.isIEOrEdge = isIEOrEdge;
    api.ObjectDefineProperty = ObjectDefineProperty;
    api.ObjectGetOwnPropertyDescriptor = ObjectGetOwnPropertyDescriptor;
    api.ObjectCreate = ObjectCreate;
    api.ArraySlice = ArraySlice;
    api.patchClass = patchClass;
    api.wrapWithCurrentZone = wrapWithCurrentZone;
    api.filterProperties = filterProperties;
    api.attachOriginToPatched = attachOriginToPatched;
    api._redefineProperty = _redefineProperty;
    api.patchCallbacks = patchCallbacks;
    api.getGlobalObjects = () => ({
        globalSources,
        zoneSymbolEventNames: zoneSymbolEventNames$1,
        eventNames,
        isBrowser,
        isMix,
        isNode,
        TRUE_STR,
        FALSE_STR,
        ZONE_SYMBOL_PREFIX,
        ADD_EVENT_LISTENER_STR,
        REMOVE_EVENT_LISTENER_STR
    });
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
const taskSymbol = zoneSymbol('zoneTask');
function patchTimer(window, setName, cancelName, nameSuffix) {
    let setNative = null;
    let clearNative = null;
    setName += nameSuffix;
    cancelName += nameSuffix;
    const tasksByHandleId = {};
    function scheduleTask(task) {
        const data = task.data;
        function timer() {
            try {
                task.invoke.apply(this, arguments);
            }
            finally {
                // issue-934, task will be cancelled
                // even it is a periodic task such as
                // setInterval
                if (!(task.data && task.data.isPeriodic)) {
                    if (typeof data.handleId === 'number') {
                        // in non-nodejs env, we remove timerId
                        // from local cache
                        delete tasksByHandleId[data.handleId];
                    }
                    else if (data.handleId) {
                        // Node returns complex objects as handleIds
                        // we remove task reference from timer object
                        data.handleId[taskSymbol] = null;
                    }
                }
            }
        }
        data.args[0] = timer;
        data.handleId = setNative.apply(window, data.args);
        return task;
    }
    function clearTask(task) {
        return clearNative(task.data.handleId);
    }
    setNative =
        patchMethod(window, setName, (delegate) => function (self, args) {
            if (typeof args[0] === 'function') {
                const options = {
                    isPeriodic: nameSuffix === 'Interval',
                    delay: (nameSuffix === 'Timeout' || nameSuffix === 'Interval') ? args[1] || 0 :
                        undefined,
                    args: args
                };
                const task = scheduleMacroTaskWithCurrentZone(setName, args[0], options, scheduleTask, clearTask);
                if (!task) {
                    return task;
                }
                // Node.js must additionally support the ref and unref functions.
                const handle = task.data.handleId;
                if (typeof handle === 'number') {
                    // for non nodejs env, we save handleId: task
                    // mapping in local cache for clearTimeout
                    tasksByHandleId[handle] = task;
                }
                else if (handle) {
                    // for nodejs env, we save task
                    // reference in timerId Object for clearTimeout
                    handle[taskSymbol] = task;
                }
                // check whether handle is null, because some polyfill or browser
                // may return undefined from setTimeout/setInterval/setImmediate/requestAnimationFrame
                if (handle && handle.ref && handle.unref && typeof handle.ref === 'function' &&
                    typeof handle.unref === 'function') {
                    task.ref = handle.ref.bind(handle);
                    task.unref = handle.unref.bind(handle);
                }
                if (typeof handle === 'number' || handle) {
                    return handle;
                }
                return task;
            }
            else {
                // cause an error by calling it directly.
                return delegate.apply(window, args);
            }
        });
    clearNative =
        patchMethod(window, cancelName, (delegate) => function (self, args) {
            const id = args[0];
            let task;
            if (typeof id === 'number') {
                // non nodejs env.
                task = tasksByHandleId[id];
            }
            else {
                // nodejs env.
                task = id && id[taskSymbol];
                // other environments.
                if (!task) {
                    task = id;
                }
            }
            if (task && typeof task.type === 'string') {
                if (task.state !== 'notScheduled' &&
                    (task.cancelFn && task.data.isPeriodic || task.runCount === 0)) {
                    if (typeof id === 'number') {
                        delete tasksByHandleId[id];
                    }
                    else if (id) {
                        id[taskSymbol] = null;
                    }
                    // Do not cancel already canceled functions
                    task.zone.cancelTask(task);
                }
            }
            else {
                // cause an error by calling it directly.
                delegate.apply(window, args);
            }
        });
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function patchCustomElements(_global, api) {
    const { isBrowser, isMix } = api.getGlobalObjects();
    if ((!isBrowser && !isMix) || !_global['customElements'] || !('customElements' in _global)) {
        return;
    }
    const callbacks = ['connectedCallback', 'disconnectedCallback', 'adoptedCallback', 'attributeChangedCallback'];
    api.patchCallbacks(api, _global.customElements, 'customElements', 'define', callbacks);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function eventTargetPatch(_global, api) {
    if (Zone[api.symbol('patchEventTarget')]) {
        // EventTarget is already patched.
        return;
    }
    const { eventNames, zoneSymbolEventNames, TRUE_STR, FALSE_STR, ZONE_SYMBOL_PREFIX } = api.getGlobalObjects();
    //  predefine all __zone_symbol__ + eventName + true/false string
    for (let i = 0; i < eventNames.length; i++) {
        const eventName = eventNames[i];
        const falseEventName = eventName + FALSE_STR;
        const trueEventName = eventName + TRUE_STR;
        const symbol = ZONE_SYMBOL_PREFIX + falseEventName;
        const symbolCapture = ZONE_SYMBOL_PREFIX + trueEventName;
        zoneSymbolEventNames[eventName] = {};
        zoneSymbolEventNames[eventName][FALSE_STR] = symbol;
        zoneSymbolEventNames[eventName][TRUE_STR] = symbolCapture;
    }
    const EVENT_TARGET = _global['EventTarget'];
    if (!EVENT_TARGET || !EVENT_TARGET.prototype) {
        return;
    }
    api.patchEventTarget(_global, [EVENT_TARGET && EVENT_TARGET.prototype]);
    return true;
}
function patchEvent(global, api) {
    api.patchEventPrototype(global, api);
}

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @fileoverview
 * @suppress {missingRequire}
 */
Zone.__load_patch('legacy', (global) => {
    const legacyPatch = global[Zone.__symbol__('legacyPatch')];
    if (legacyPatch) {
        legacyPatch();
    }
});
Zone.__load_patch('timers', (global) => {
    const set = 'set';
    const clear = 'clear';
    patchTimer(global, set, clear, 'Timeout');
    patchTimer(global, set, clear, 'Interval');
    patchTimer(global, set, clear, 'Immediate');
});
Zone.__load_patch('requestAnimationFrame', (global) => {
    patchTimer(global, 'request', 'cancel', 'AnimationFrame');
    patchTimer(global, 'mozRequest', 'mozCancel', 'AnimationFrame');
    patchTimer(global, 'webkitRequest', 'webkitCancel', 'AnimationFrame');
});
Zone.__load_patch('blocking', (global, Zone) => {
    const blockingMethods = ['alert', 'prompt', 'confirm'];
    for (let i = 0; i < blockingMethods.length; i++) {
        const name = blockingMethods[i];
        patchMethod(global, name, (delegate, symbol, name) => {
            return function (s, args) {
                return Zone.current.run(delegate, global, args, name);
            };
        });
    }
});
Zone.__load_patch('EventTarget', (global, Zone, api) => {
    patchEvent(global, api);
    eventTargetPatch(global, api);
    // patch XMLHttpRequestEventTarget's addEventListener/removeEventListener
    const XMLHttpRequestEventTarget = global['XMLHttpRequestEventTarget'];
    if (XMLHttpRequestEventTarget && XMLHttpRequestEventTarget.prototype) {
        api.patchEventTarget(global, [XMLHttpRequestEventTarget.prototype]);
    }
    patchClass('MutationObserver');
    patchClass('WebKitMutationObserver');
    patchClass('IntersectionObserver');
    patchClass('FileReader');
});
Zone.__load_patch('on_property', (global, Zone, api) => {
    propertyDescriptorPatch(api, global);
    propertyPatch();
});
Zone.__load_patch('customElements', (global, Zone, api) => {
    patchCustomElements(global, api);
});
Zone.__load_patch('XHR', (global, Zone) => {
    // Treat XMLHttpRequest as a macrotask.
    patchXHR(global);
    const XHR_TASK = zoneSymbol('xhrTask');
    const XHR_SYNC = zoneSymbol('xhrSync');
    const XHR_LISTENER = zoneSymbol('xhrListener');
    const XHR_SCHEDULED = zoneSymbol('xhrScheduled');
    const XHR_URL = zoneSymbol('xhrURL');
    const XHR_ERROR_BEFORE_SCHEDULED = zoneSymbol('xhrErrorBeforeScheduled');
    function patchXHR(window) {
        const XMLHttpRequest = window['XMLHttpRequest'];
        if (!XMLHttpRequest) {
            // XMLHttpRequest is not available in service worker
            return;
        }
        const XMLHttpRequestPrototype = XMLHttpRequest.prototype;
        function findPendingTask(target) {
            return target[XHR_TASK];
        }
        let oriAddListener = XMLHttpRequestPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
        let oriRemoveListener = XMLHttpRequestPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
        if (!oriAddListener) {
            const XMLHttpRequestEventTarget = window['XMLHttpRequestEventTarget'];
            if (XMLHttpRequestEventTarget) {
                const XMLHttpRequestEventTargetPrototype = XMLHttpRequestEventTarget.prototype;
                oriAddListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = XMLHttpRequestEventTargetPrototype[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
        }
        const READY_STATE_CHANGE = 'readystatechange';
        const SCHEDULED = 'scheduled';
        function scheduleTask(task) {
            const data = task.data;
            const target = data.target;
            target[XHR_SCHEDULED] = false;
            target[XHR_ERROR_BEFORE_SCHEDULED] = false;
            // remove existing event listener
            const listener = target[XHR_LISTENER];
            if (!oriAddListener) {
                oriAddListener = target[ZONE_SYMBOL_ADD_EVENT_LISTENER];
                oriRemoveListener = target[ZONE_SYMBOL_REMOVE_EVENT_LISTENER];
            }
            if (listener) {
                oriRemoveListener.call(target, READY_STATE_CHANGE, listener);
            }
            const newListener = target[XHR_LISTENER] = () => {
                if (target.readyState === target.DONE) {
                    // sometimes on some browsers XMLHttpRequest will fire onreadystatechange with
                    // readyState=4 multiple times, so we need to check task state here
                    if (!data.aborted && target[XHR_SCHEDULED] && task.state === SCHEDULED) {
                        // check whether the xhr has registered onload listener
                        // if that is the case, the task should invoke after all
                        // onload listeners finish.
                        const loadTasks = target['__zone_symbol__loadfalse'];
                        if (loadTasks && loadTasks.length > 0) {
                            const oriInvoke = task.invoke;
                            task.invoke = function () {
                                // need to load the tasks again, because in other
                                // load listener, they may remove themselves
                                const loadTasks = target['__zone_symbol__loadfalse'];
                                for (let i = 0; i < loadTasks.length; i++) {
                                    if (loadTasks[i] === task) {
                                        loadTasks.splice(i, 1);
                                    }
                                }
                                if (!data.aborted && task.state === SCHEDULED) {
                                    oriInvoke.call(task);
                                }
                            };
                            loadTasks.push(task);
                        }
                        else {
                            task.invoke();
                        }
                    }
                    else if (!data.aborted && target[XHR_SCHEDULED] === false) {
                        // error occurs when xhr.send()
                        target[XHR_ERROR_BEFORE_SCHEDULED] = true;
                    }
                }
            };
            oriAddListener.call(target, READY_STATE_CHANGE, newListener);
            const storedTask = target[XHR_TASK];
            if (!storedTask) {
                target[XHR_TASK] = task;
            }
            sendNative.apply(target, data.args);
            target[XHR_SCHEDULED] = true;
            return task;
        }
        function placeholderCallback() { }
        function clearTask(task) {
            const data = task.data;
            // Note - ideally, we would call data.target.removeEventListener here, but it's too late
            // to prevent it from firing. So instead, we store info for the event listener.
            data.aborted = true;
            return abortNative.apply(data.target, data.args);
        }
        const openNative = patchMethod(XMLHttpRequestPrototype, 'open', () => function (self, args) {
            self[XHR_SYNC] = args[2] == false;
            self[XHR_URL] = args[1];
            return openNative.apply(self, args);
        });
        const XMLHTTPREQUEST_SOURCE = 'XMLHttpRequest.send';
        const fetchTaskAborting = zoneSymbol('fetchTaskAborting');
        const fetchTaskScheduling = zoneSymbol('fetchTaskScheduling');
        const sendNative = patchMethod(XMLHttpRequestPrototype, 'send', () => function (self, args) {
            if (Zone.current[fetchTaskScheduling] === true) {
                // a fetch is scheduling, so we are using xhr to polyfill fetch
                // and because we already schedule macroTask for fetch, we should
                // not schedule a macroTask for xhr again
                return sendNative.apply(self, args);
            }
            if (self[XHR_SYNC]) {
                // if the XHR is sync there is no task to schedule, just execute the code.
                return sendNative.apply(self, args);
            }
            else {
                const options = { target: self, url: self[XHR_URL], isPeriodic: false, args: args, aborted: false };
                const task = scheduleMacroTaskWithCurrentZone(XMLHTTPREQUEST_SOURCE, placeholderCallback, options, scheduleTask, clearTask);
                if (self && self[XHR_ERROR_BEFORE_SCHEDULED] === true && !options.aborted &&
                    task.state === SCHEDULED) {
                    // xhr request throw error when send
                    // we should invoke task instead of leaving a scheduled
                    // pending macroTask
                    task.invoke();
                }
            }
        });
        const abortNative = patchMethod(XMLHttpRequestPrototype, 'abort', () => function (self, args) {
            const task = findPendingTask(self);
            if (task && typeof task.type == 'string') {
                // If the XHR has already completed, do nothing.
                // If the XHR has already been aborted, do nothing.
                // Fix #569, call abort multiple times before done will cause
                // macroTask task count be negative number
                if (task.cancelFn == null || (task.data && task.data.aborted)) {
                    return;
                }
                task.zone.cancelTask(task);
            }
            else if (Zone.current[fetchTaskAborting] === true) {
                // the abort is called from fetch polyfill, we need to call native abort of XHR.
                return abortNative.apply(self, args);
            }
            // Otherwise, we are trying to abort an XHR which has not yet been sent, so there is no
            // task
            // to cancel. Do nothing.
        });
    }
});
Zone.__load_patch('geolocation', (global) => {
    /// GEO_LOCATION
    if (global['navigator'] && global['navigator'].geolocation) {
        patchPrototype(global['navigator'].geolocation, ['getCurrentPosition', 'watchPosition']);
    }
});
Zone.__load_patch('PromiseRejectionEvent', (global, Zone) => {
    // handle unhandled promise rejection
    function findPromiseRejectionHandler(evtName) {
        return function (e) {
            const eventTasks = findEventTasks(global, evtName);
            eventTasks.forEach(eventTask => {
                // windows has added unhandledrejection event listener
                // trigger the event listener
                const PromiseRejectionEvent = global['PromiseRejectionEvent'];
                if (PromiseRejectionEvent) {
                    const evt = new PromiseRejectionEvent(evtName, { promise: e.promise, reason: e.rejection });
                    eventTask.invoke(evt);
                }
            });
        };
    }
    if (global['PromiseRejectionEvent']) {
        Zone[zoneSymbol('unhandledPromiseRejectionHandler')] =
            findPromiseRejectionHandler('unhandledrejection');
        Zone[zoneSymbol('rejectionHandledHandler')] =
            findPromiseRejectionHandler('rejectionhandled');
    }
});

/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _checkout_auth_checkout_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./checkout-auth/checkout-auth.component */ "./src/app/checkout-auth/checkout-auth.component.ts");











const routes = [{
        path: 'home',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        data: { title: 'List of Products' }
    },
    {
        path: 'products',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        data: { title: 'List of Products' }
    },
    {
        path: 'categories/:id?',
        component: _products_products_component__WEBPACK_IMPORTED_MODULE_3__["ProductsComponent"],
        data: { title: 'List of Products' }
    },
    {
        path: 'product/:id',
        component: _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_4__["SingleProductComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'search/:query?',
        component: _search_search_component__WEBPACK_IMPORTED_MODULE_6__["SearchComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'cart',
        component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'checkout',
        component: _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_9__["CheckoutComponent"],
        data: { title: 'Product Details' }
    },
    {
        path: 'checkoutauth',
        component: _checkout_auth_checkout_auth_component__WEBPACK_IMPORTED_MODULE_10__["CheckoutAuthComponent"],
        data: { title: 'Product Details' }
    },
    { path: '',
        redirectTo: '/products',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
        data: { title: 'Product Details' }
    }];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'client';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./partials/partials.module */ "./src/app/partials/partials.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./single-product/single-product.component */ "./src/app/single-product/single-product.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checkout/checkout.component */ "./src/app/checkout/checkout.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _checkout_auth_checkout_auth_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./checkout-auth/checkout-auth.component */ "./src/app/checkout-auth/checkout-auth.component.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
            _products_products_component__WEBPACK_IMPORTED_MODULE_8__["ProductsComponent"],
            _search_search_component__WEBPACK_IMPORTED_MODULE_9__["SearchComponent"],
            _single_product_single_product_component__WEBPACK_IMPORTED_MODULE_10__["SingleProductComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_11__["CartComponent"],
            _categories_categories_component__WEBPACK_IMPORTED_MODULE_12__["CategoriesComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
            _checkout_checkout_component__WEBPACK_IMPORTED_MODULE_14__["CheckoutComponent"],
            _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_15__["NotFoundComponent"],
            _checkout_auth_checkout_auth_component__WEBPACK_IMPORTED_MODULE_16__["CheckoutAuthComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _partials_partials_module__WEBPACK_IMPORTED_MODULE_6__["PartialsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/authentication.service.ts":
/*!*******************************************!*\
  !*** ./src/app/authentication.service.ts ***!
  \*******************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rest-api.service */ "./src/app/rest-api.service.ts");




let AuthenticationService = class AuthenticationService {
    constructor(restApi, router) {
        this.restApi = restApi;
        this.router = router;
        this.customer = false;
        this.accessToken = false;
        const authData = JSON.parse(localStorage.getItem('authData'));
        if (authData) {
            this.customer = authData.customer;
            this.accessToken = authData.accessToken;
        }
    }
    isLoggedIn() {
        if (this.accessToken) {
            return true;
        }
        else {
            return false;
        }
    }
    register(email, password, name) {
        this.restApi.post('customers/', { password: password, email: email, name: name }).subscribe((data) => {
            console.log(data);
            this.customer = data.customer.schema;
            this.accessToken = data.accessToken;
            localStorage.setItem('authData', JSON.stringify({ customer: this.customer, accessToken: this.accessToken }));
        });
    }
    login(email, password) {
        this.restApi.post('customers/login', { email: email, password: password }).subscribe((data) => {
            console.log(data);
            this.customer = data.customer.schema;
            this.accessToken = data.accessToken;
            localStorage.setItem('authData', JSON.stringify({ customer: this.customer, accessToken: this.accessToken }));
        });
    }
    logout() {
        // remove user data from local storage for log out
        localStorage.removeItem('authData');
        this.customer = false;
        this.accessToken = false;
    }
};
AuthenticationService.ctorParameters = () => [
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], AuthenticationService);



/***/ }),

/***/ "./src/app/cart.service.ts":
/*!*********************************!*\
  !*** ./src/app/cart.service.ts ***!
  \*********************************/
/*! exports provided: CartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartService", function() { return CartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let CartService = class CartService {
    constructor(restApi) {
        this.restApi = restApi;
        this.products = [];
        this.total = 0;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.cartId = localStorage.getItem('cart_id');
        if (this.cartId && this.cartId !== 'null') {
            this.restApi.get('shoppingcart/' + this.cartId).subscribe((data) => {
                this.products = data;
                console.log(this.total);
                this.refreshTotal();
                this.subject.next({ products: this.products, total: this.total });
            });
        }
        else {
            this.restApi.get('shoppingcart/generateUniqueId').subscribe((data) => {
                this.cartId = data.cart_id;
                localStorage.setItem('cart_id', this.cartId);
            });
        }
        this.refreshTotal();
        this.subject.next({ products: this.products, total: this.total });
    }
    removeFromCart(id) {
        this.restApi.delete('shoppingcart/removeProduct/' + id).subscribe((data) => {
            this.products = this.products.filter((currentProduct) => {
                return currentProduct.item_id !== id;
            });
        });
        this.refreshTotal();
        this.subject.next({ products: this.products, total: this.total });
    }
    addToCart(id, quantity = 1, attributes = '') {
        console.log(this.cartId);
        console.log(this.cartId.length);
        let alreadyAdded = false;
        this.products.forEach((product) => {
            if (product.product_id === id) {
                alreadyAdded = true;
                product.quantity = quantity;
                this.restApi.put('shoppingcart/update/' + this.cartId, {
                    quantity: quantity,
                }).subscribe((data) => {
                    this.products = data;
                    alert('product already added to cart');
                });
            }
        });
        if (!alreadyAdded) {
            this.restApi.post('shoppingcart/add', {
                cart_id: this.cartId,
                product_id: id,
                attributes: attributes,
                quantity: quantity
            }).subscribe((data) => {
                data.quantity = quantity;
                this.products.push(data);
                alert('product added to cart');
            });
        }
        localStorage.setItem('cart', JSON.stringify(this.products));
        this.refreshTotal();
        this.subject.next({ products: this.products, total: this.total });
    }
    getProductsObservable() {
        return this.subject.asObservable();
    }
    emptyCart() {
        this.products = [];
        localStorage.setItem('cart', '[]');
        this.restApi.delete('shoppingcart/empty/' + this.cartId).subscribe((data) => {
            this.products = [];
            localStorage.setItem('cart', '[]');
        });
        this.refreshTotal();
        this.subject.next({ products: this.products, total: this.total });
    }
    refreshTotal() {
        this.total = 0;
        this.products.forEach((product) => {
            console.log('product', product);
            this.total = this.total + (parseFloat(product.price) * parseFloat(product.quantity));
            console.log('multiply', parseFloat(product.price) * parseFloat(product.quantity));
            console.log('total', this.total);
        });
        this.total = Math.round(this.total * 100) / 100;
    }
    saveOrder(shippingId, callback) {
        this.restApi.postAuth('orders', {
            cart_id: this.cartId,
            shipping_id: shippingId,
            tax_id: 2
        }).subscribe((data) => {
            callback(data);
        });
    }
};
CartService.ctorParameters = () => [
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_2__["RestApiService"] }
];
CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");



let CartComponent = class CartComponent {
    constructor(cart) {
        this.cart = cart;
        this.products = [];
        this.total = 0;
        this.products = cart.products;
        this.total = cart.total;
        this.subscription = cart.getProductsObservable().subscribe(cartObject => {
            this.products = cartObject.products;
            this.total = cartObject.total;
        });
        console.log(this.products);
    }
    ngOnInit() {
    }
    removeFromCart(id) {
        console.log(id);
        this.cart.removeFromCart(id);
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
    updateCartProduct(product) {
        this.cart.addToCart(product.product_id, product.quantity);
    }
};
CartComponent.ctorParameters = () => [
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: __webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/index.js!./src/app/cart/cart.component.html"),
        styles: [__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhdGVnb3JpZXMvY2F0ZWdvcmllcy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CategoriesComponent = class CategoriesComponent {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-categories',
        template: __webpack_require__(/*! raw-loader!./categories.component.html */ "./node_modules/raw-loader/index.js!./src/app/categories/categories.component.html"),
        styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
    })
], CategoriesComponent);



/***/ }),

/***/ "./src/app/checkout-auth/checkout-auth.component.css":
/*!***********************************************************!*\
  !*** ./src/app/checkout-auth/checkout-auth.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoZWNrb3V0LWF1dGgvY2hlY2tvdXQtYXV0aC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/checkout-auth/checkout-auth.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/checkout-auth/checkout-auth.component.ts ***!
  \**********************************************************/
/*! exports provided: CheckoutAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutAuthComponent", function() { return CheckoutAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let CheckoutAuthComponent = class CheckoutAuthComponent {
    constructor(auth, formBuilder, router) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.router = router;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]()
        });
    }
    ngOnInit() {
        if (this.auth.isLoggedIn()) {
            this.router.navigate(['/checkout']);
        }
    }
    onLoginSubmit() {
        // Process checkout data here
        console.warn('Your order has been submitted', this.loginForm);
        const customerData = this.loginForm.value;
        this.auth.login(customerData.email, customerData.password);
        // if (this.auth.isLoggedIn()) {
        this.router.navigate(['/checkout']);
        // }
    }
    onRegisterSubmit() {
        // Process checkout data here
        console.warn('Your order has been submitted', this.registerForm);
        const customerData = this.registerForm.value;
        this.auth.register(customerData.email, customerData.password, customerData.name);
        // if (this.auth.isLoggedIn()) {
        this.router.navigate(['/checkout']);
        // }
    }
};
CheckoutAuthComponent.ctorParameters = () => [
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
CheckoutAuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout-auth',
        template: __webpack_require__(/*! raw-loader!./checkout-auth.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout-auth/checkout-auth.component.html"),
        styles: [__webpack_require__(/*! ./checkout-auth.component.css */ "./src/app/checkout-auth/checkout-auth.component.css")]
    })
], CheckoutAuthComponent);



/***/ }),

/***/ "./src/app/checkout/checkout.component.css":
/*!*************************************************!*\
  !*** ./src/app/checkout/checkout.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".StripeElement {\n    box-sizing: border-box;\n  \n    height: 50px;\n  \n    padding: 0.75rem 1rem;\n  \n    border: 1px solid #d5dae2;\n    border-radius: 4px;\n    background-color: white;\n  \n    /* box-shadow: 0 1px 3px 0 #e6ebf1;\n    -webkit-transition: box-shadow 150ms ease;\n    transition: box-shadow 150ms ease;*/\n  }\n  \n  .StripeElement--focus {\n    box-shadow: 0 1px 3px 0 #cfd7df;\n  }\n  \n  .StripeElement--invalid {\n    border-color: #fa755a;\n  }\n  \n  .StripeElement--webkit-autofill {\n    background-color: #fefde5 !important;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjs7SUFFdEIsWUFBWTs7SUFFWixxQkFBcUI7O0lBRXJCLHlCQUF5QjtJQUN6QixrQkFBa0I7SUFDbEIsdUJBQXVCOztJQUV2Qjs7dUNBRW1DO0VBQ3JDOztFQUVBO0lBQ0UsK0JBQStCO0VBQ2pDOztFQUVBO0lBQ0UscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usb0NBQW9DO0VBQ3RDIiwiZmlsZSI6InNyYy9hcHAvY2hlY2tvdXQvY2hlY2tvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5TdHJpcGVFbGVtZW50IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIFxuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2Q1ZGFlMjtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIFxuICAgIC8qIGJveC1zaGFkb3c6IDAgMXB4IDNweCAwICNlNmViZjE7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBib3gtc2hhZG93IDE1MG1zIGVhc2U7XG4gICAgdHJhbnNpdGlvbjogYm94LXNoYWRvdyAxNTBtcyBlYXNlOyovXG4gIH1cbiAgXG4gIC5TdHJpcGVFbGVtZW50LS1mb2N1cyB7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2NmZDdkZjtcbiAgfVxuICBcbiAgLlN0cmlwZUVsZW1lbnQtLWludmFsaWQge1xuICAgIGJvcmRlci1jb2xvcjogI2ZhNzU1YTtcbiAgfVxuICBcbiAgLlN0cmlwZUVsZW1lbnQtLXdlYmtpdC1hdXRvZmlsbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmRlNSAhaW1wb3J0YW50O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/checkout/checkout.component.ts":
/*!************************************************!*\
  !*** ./src/app/checkout/checkout.component.ts ***!
  \************************************************/
/*! exports provided: CheckoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckoutComponent", function() { return CheckoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../authentication.service */ "./src/app/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _rest_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../rest-api.service */ "./src/app/rest-api.service.ts");







let CheckoutComponent = class CheckoutComponent {
    constructor(restApi, auth, cart, formBuilder, router) {
        this.restApi = restApi;
        this.auth = auth;
        this.cart = cart;
        this.formBuilder = formBuilder;
        this.router = router;
        this.stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
        this.products = [];
        this.regions = [];
        this.shippings = [];
        this.total = 0;
        this.checkoutForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            postcode: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            streetAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            cityAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            region: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            suite: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            cardHolder: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
            shipping_region: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](),
        });
        this.products = cart.products;
        this.total = cart.total;
        this.subscription = cart.getProductsObservable().subscribe(cartObject => {
            this.products = cartObject.products;
            this.total = cartObject.total;
        });
        this.checkoutForm.controls.country.setValue('AF');
    }
    ngOnInit() {
        if (!this.auth.isLoggedIn()) {
            this.router.navigate(['/checkoutauth']);
        }
        this.elements = this.stripe.elements();
        this.card = this.elements.create('card', { style: {
                base: {
                    // Add your base input styles here. For example:
                    fontSize: '16px',
                    lineHeight: '24px',
                    color: 'rgb(30, 32, 34)',
                    fontFamily: '"Poppins", Helvetica, Arial, sans-serif'
                }
            } });
        this.card.mount('#card-element');
        this.restApi.get('shipping/regions').subscribe((data) => {
            this.regions = data;
            this.checkoutForm.controls.shipping_region.setValue('2');
            this.changeRegion();
        });
    }
    placeOrder() {
        var thisInstance = this;
        this.stripe.createToken(this.card, {
            country: 'US',
            currency: 'usd',
            account_holder_name: 'Jenny Rosen',
            account_holder_type: 'individual',
        }).then((result) => {
            thisInstance.restApi.putAuth('customer', {
                country: thisInstance.checkoutForm.value.country,
                shipping_region_id: thisInstance.checkoutForm.value.shipping_region,
                region: thisInstance.checkoutForm.value.region,
                adress: thisInstance.checkoutForm.value.streetAddress
            }).subscribe((customer) => {
                thisInstance.restApi.postAuth('orders', {
                    cart_id: thisInstance.cart.cartId,
                    shipping_id: thisInstance.shipingSelected,
                    adress: thisInstance.checkoutForm.value.streetAddress
                }).subscribe((order) => {
                    thisInstance.restApi.post('stripe/charge', {
                        stripeToken: result.token,
                        order_id: order.order_id,
                        description: 'turing ecommerce chages',
                        amount: (thisInstance.total + thisInstance.shipingSelectedPrice)
                    }).subscribe((data) => {
                        alert('purchase complete');
                        this.cart.emptyCart();
                        this.router.navigate(['/']);
                    });
                });
            });
        });
    }
    changeRegion() {
        this.restApi.get('shipping/regions/' + this.checkoutForm.value.shipping_region).subscribe((data) => {
            this.shippings = data;
            this.shippingChange(this.shippings[0]);
        });
    }
    shippingChange(shipping) {
        this.shipingSelected = shipping.shipping_id;
        // tslint:disable-next-line:radix
        this.shipingSelectedPrice = parseInt(shipping.shipping_cost);
    }
};
CheckoutComponent.ctorParameters = () => [
    { type: _rest_api_service__WEBPACK_IMPORTED_MODULE_6__["RestApiService"] },
    { type: _authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_2__["CartService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CheckoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-checkout',
        template: __webpack_require__(/*! raw-loader!./checkout.component.html */ "./node_modules/raw-loader/index.js!./src/app/checkout/checkout.component.html"),
        styles: [__webpack_require__(/*! ./checkout.component.css */ "./src/app/checkout/checkout.component.css")]
    })
], CheckoutComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-api.service */ "./src/app/rest-api.service.ts");




let HomeComponent = class HomeComponent {
    constructor(restApi, router) {
        this.restApi = restApi;
        this.router = router;
        this.products = [];
    }
    ngOnInit() {
        this.restApi.get('products/0/8').subscribe((data) => {
            console.log(data);
            this.products = data.rows;
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/index.js!./src/app/not-found/not-found.component.html"),
        styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
    })
], NotFoundComponent);



/***/ }),

/***/ "./src/app/partials/footer/footer.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/footer/footer.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/footer/footer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/footer/footer.component.ts ***!
  \*****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication.service */ "./src/app/authentication.service.ts");



let FooterComponent = class FooterComponent {
    constructor(auth) {
        this.auth = auth;
    }
    ngOnInit() {
    }
    login(formData) {
        console.log(formData);
        this.auth.login(formData.username, formData.password);
    }
    register(formData) {
        console.log(formData);
        this.auth.register(formData.username, formData.password, formData.name);
    }
};
FooterComponent.ctorParameters = () => [
    { type: src_app_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
];
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/partials/footer/footer.component.html"),
        styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/partials/footer/footer.component.css")]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/partials/header/header.component.css":
/*!******************************************************!*\
  !*** ./src/app/partials/header/header.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWxzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/partials/header/header.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/header/header.component.ts ***!
  \*****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-api.service */ "./src/app/rest-api.service.ts");




let HeaderComponent = class HeaderComponent {
    constructor(restApi, router) {
        this.restApi = restApi;
        this.router = router;
        this.departments = [];
    }
    ngOnInit() {
        this.restApi.get('departments').subscribe((data) => {
            console.log(data);
            this.departments = data;
        });
    }
    search(form) {
        console.log(form);
    }
};
HeaderComponent.ctorParameters = () => [
    { type: src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/partials/header/header.component.html"),
        styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/partials/header/header.component.css")]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/partials/partials-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/partials/partials-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: PartialsRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsRoutingModule", function() { return PartialsRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let PartialsRoutingModule = class PartialsRoutingModule {
};
PartialsRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], PartialsRoutingModule);



/***/ }),

/***/ "./src/app/partials/partials.module.ts":
/*!*********************************************!*\
  !*** ./src/app/partials/partials.module.ts ***!
  \*********************************************/
/*! exports provided: PartialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PartialsModule", function() { return PartialsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _partials_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partials-routing.module */ "./src/app/partials/partials-routing.module.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/partials/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/partials/footer/footer.component.ts");








let PartialsModule = class PartialsModule {
};
PartialsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _partials_routing_module__WEBPACK_IMPORTED_MODULE_5__["PartialsRoutingModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
        ],
        exports: [
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"]
        ]
    })
], PartialsModule);



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");





let ProductsComponent = class ProductsComponent {
    constructor(restApi, router, cart) {
        this.restApi = restApi;
        this.router = router;
        this.cart = cart;
        this.products = [];
        this.filtered_products = [];
        this.page = 0;
        this.pages = 0;
        this.limit = 16;
        this.product_count = 0;
        this.pages_array = [];
        this.searchModel = '';
        this.departments = [];
        this.categories = [];
        // this.form = this.formBuilder.group({
        //   orders: ['']
        // });
    }
    ngOnInit() {
        // get all pages count
        this.restApi.get('products/').subscribe((data) => {
            this.product_count = data.count;
            this.pages = Math.ceil(this.product_count / this.limit);
            this.pages_array = Array.from(Array(this.pages).keys());
            console.log(this.pages_array);
        });
        this.restApi.get('products').subscribe((data) => {
            console.log(data);
            this.filtered_products = data.rows;
            this.pagination(0);
        });
        this.restApi.get('departments').subscribe((departmens) => {
            console.log(departmens);
            this.departments = departmens;
            this.departments.forEach((department) => {
                this.restApi.get('categories/inDepartment/' + department.department_id).subscribe((categories) => {
                    console.log(categories);
                    department.categories = categories;
                    department.products = [];
                    department.categories.forEach((category) => {
                        this.restApi.get('products/inCategory/' + category.category_id).subscribe((products) => {
                            category.products = products;
                            department.products.concat(products);
                            this.filter();
                        });
                    });
                });
            });
        });
        this.restApi.get('categories').subscribe((categories) => {
            console.log(categories);
            this.categories = categories.rows;
            this.categories.forEach((category) => {
                category.products = [];
                this.restApi.get('products/inCategory/' + category.category_id).subscribe((products) => {
                    category.products = products;
                    this.filter();
                });
            });
        });
    }
    pagination(page) {
        if (this.searchModel && this.searchModel.length > 0 && this.searchModel !== '') {
            let fp = [];
            this.filtered_products.forEach((product) => {
                if (product.name.toLowerCase().indexOf(this.searchModel.toLowerCase()) > -1) {
                    fp.push(product);
                }
            });
            this.filtered_products = fp;
        }
        this.pages = Math.ceil(this.filtered_products.length / this.limit);
        this.pages_array = Array.from(Array(this.pages).keys());
        this.page = page;
        const from = page * this.limit;
        const to = from + this.limit;
        this.products = this.filtered_products.slice(from, to);
    }
    addToCart(id) {
        this.cart.addToCart(id);
    }
    filter() {
        let isFiltered = false;
        this.filtered_products = [];
        this.departments.forEach((department) => {
            if (department.selected) {
                isFiltered = true;
                department.categories.forEach((category) => {
                    this.filtered_products = this.filtered_products.concat(category.products);
                });
            }
        });
        this.categories.forEach((category) => {
            if (category.selected) {
                isFiltered = true;
                this.filtered_products = this.filtered_products.concat(category.products);
            }
        });
        if (isFiltered) {
            this.pagination(0);
        }
        else {
            this.restApi.get('products').subscribe((data) => {
                this.filtered_products = data.rows;
                this.pagination(0);
            });
        }
    }
    check(item) {
        item.selected = item.selected ? false : true;
        this.filter();
    }
    clearFilters() {
        this.categories.forEach((category) => {
            category.selected = false;
        });
        this.departments.forEach((department) => {
            department.selected = false;
        });
        this.searchModel = "";
        this.filter();
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] }
];
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-products',
        template: __webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/index.js!./src/app/products/products.component.html"),
        styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/rest-api.service.ts":
/*!*************************************!*\
  !*** ./src/app/rest-api.service.ts ***!
  \*************************************/
/*! exports provided: RestApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestApiService", function() { return RestApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let RestApiService = class RestApiService {
    constructor(http) {
        this.http = http;
        // Define API
        this.apiURL = '/api/';
        // Http Options
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded'
            })
        };
        // Http Options
        this.authHttpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/x-www-form-urlencoded',
            })
        };
        const authData = JSON.parse(localStorage.getItem('authData'));
        if (authData && authData !== 'null') {
            this.authHttpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/x-www-form-urlencoded',
                    Authorization: 'Bearer ' + authData.accessToken
                })
            };
        }
    }
    /*========================================
      CRUD Methods for consuming RESTful API
    =========================================*/
    // HttpClient API get() method
    get(url) {
        return this.http.get(this.apiURL + url)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    getAuth(url) {
        return this.http.get(this.apiURL + url, this.authHttpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API post() method
    post(url, data) {
        return this.http.post(this.apiURL + url, $.param(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    postAuth(url, data) {
        return this.http.post(this.apiURL + url, $.param(data), this.authHttpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API put() method
    put(url, data) {
        return this.http.put(this.apiURL + url, $.param(data), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    putAuth(url, data) {
        return this.http.put(this.apiURL + url, $.param(data), this.authHttpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // HttpClient API delete() method
    delete(url) {
        return this.http.delete(this.apiURL + url, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    deleteAuth(url) {
        return this.http.delete(this.apiURL + url, this.authHttpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(this.handleError));
    }
    // Error handling
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        console.log(error);
        window.alert(error.error.message);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(errorMessage);
    }
};
RestApiService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
RestApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], RestApiService);



/***/ }),

/***/ "./src/app/search/search.component.css":
/*!*********************************************!*\
  !*** ./src/app/search/search.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchComponent = class SearchComponent {
    constructor() { }
    ngOnInit() {
    }
};
SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search',
        template: __webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/index.js!./src/app/search/search.component.html"),
        styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/search/search.component.css")]
    })
], SearchComponent);



/***/ }),

/***/ "./src/app/single-product/single-product.component.css":
/*!*************************************************************!*\
  !*** ./src/app/single-product/single-product.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul.product-attributes{\n    margin: 10px 0px;\n    padding: 0px;\n    display: block;\n}\n\nul.product-attributes > li {\n    display: block;\n    list-style: none;\n    float: left;\n    font-size: .8em;\n    padding:7px 10px;\n    border-top:1px solid #e7eaf3;\n    border-bottom: 1px solid #e7eaf3;\n    cursor: pointer;\n}\n\nul.product-attributes > li:first-child{\n    border-left: 1px solid #e7eaf3;\n    border-top-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n\nul.product-attributes > li:last-child{\n    border-right: 1px solid #e7eaf3;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\nul.product-attributes > li.active{\n    background: rgb(55, 125, 255);\n    color: #fff;\n    font-weight: bold;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsV0FBVztJQUNYLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsNEJBQTRCO0lBQzVCLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksOEJBQThCO0lBQzlCLDJCQUEyQjtJQUMzQiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwrQkFBK0I7SUFDL0IsNEJBQTRCO0lBQzVCLCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLDZCQUE2QjtJQUM3QixXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2luZ2xlLXByb2R1Y3Qvc2luZ2xlLXByb2R1Y3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInVsLnByb2R1Y3QtYXR0cmlidXRlc3tcbiAgICBtYXJnaW46IDEwcHggMHB4O1xuICAgIHBhZGRpbmc6IDBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxudWwucHJvZHVjdC1hdHRyaWJ1dGVzID4gbGkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHBhZGRpbmc6N3B4IDEwcHg7XG4gICAgYm9yZGVyLXRvcDoxcHggc29saWQgI2U3ZWFmMztcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U3ZWFmMztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbnVsLnByb2R1Y3QtYXR0cmlidXRlcyA+IGxpOmZpcnN0LWNoaWxke1xuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U3ZWFmMztcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xufVxuXG51bC5wcm9kdWN0LWF0dHJpYnV0ZXMgPiBsaTpsYXN0LWNoaWxke1xuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlN2VhZjM7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xufVxuXG51bC5wcm9kdWN0LWF0dHJpYnV0ZXMgPiBsaS5hY3RpdmV7XG4gICAgYmFja2dyb3VuZDogcmdiKDU1LCAxMjUsIDI1NSk7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/single-product/single-product.component.ts":
/*!************************************************************!*\
  !*** ./src/app/single-product/single-product.component.ts ***!
  \************************************************************/
/*! exports provided: SingleProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleProductComponent", function() { return SingleProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/rest-api.service */ "./src/app/rest-api.service.ts");
/* harmony import */ var _cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart.service */ "./src/app/cart.service.ts");





let SingleProductComponent = class SingleProductComponent {
    constructor(restApi, cart, route) {
        this.restApi = restApi;
        this.cart = cart;
        this.route = route;
        this.product = {};
        this.attributes = [];
        this.quantity = 1;
    }
    ngOnInit() {
        this.id = parseInt(this.route.snapshot.paramMap.get('id'));
        this.restApi.get('products/' + this.id).subscribe((data) => {
            this.product = data;
            console.log(this.product);
        });
        this.restApi.get('attributes/').subscribe((data) => {
            this.attributes = data;
            this.restApi.get('attributes/inProduct/' + this.id).subscribe((data) => {
                this.attributes.forEach(attribute => {
                    attribute.values = [];
                    data.forEach(element => {
                        if (attribute.attribute_id == element.attribute_id) {
                            attribute.values.push(element);
                        }
                    });
                    this.selectAttribute(attribute, attribute.values[0]);
                });
            });
        });
    }
    selectAttribute(attribute, value) {
        attribute.value = value;
    }
    addToCart() {
        var attrs = "";
        this.attributes.forEach((attribute, index) => {
            if (index > 0) {
                attrs += ", ";
            }
            attrs += attribute.value.value;
        });
        this.cart.addToCart(this.id, this.quantity, attrs);
    }
    add_qty() {
        this.quantity += 1;
    }
    rmv_qty() {
        if (this.quantity > 1) {
            this.quantity -= 1;
        }
    }
};
SingleProductComponent.ctorParameters = () => [
    { type: src_app_rest_api_service__WEBPACK_IMPORTED_MODULE_3__["RestApiService"] },
    { type: _cart_service__WEBPACK_IMPORTED_MODULE_4__["CartService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
SingleProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-product',
        template: __webpack_require__(/*! raw-loader!./single-product.component.html */ "./node_modules/raw-loader/index.js!./src/app/single-product/single-product.component.html"),
        styles: [__webpack_require__(/*! ./single-product.component.css */ "./src/app/single-product/single-product.component.css")]
    })
], SingleProductComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.ts */ "./src/polyfills.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "./src/polyfills.ts":
/*!**************************!*\
  !*** ./src/polyfills.ts ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone */ "./node_modules/zone.js/dist/zone-evergreen.js");
/* harmony import */ var zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone__WEBPACK_IMPORTED_MODULE_0__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/guide/browser-support
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/**
 * Web Animations `@angular/platform-browser/animations`
 * Only required if AnimationBuilder is used within the application and using IE/Edge or Safari.
 * Standard animation support in Angular DOES NOT require any polyfills (as of Angular 6.0).
 */
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/**
 * By default, zone.js will patch all possible macroTask and DomEvents
 * user can disable parts of macroTask/DomEvents patch by setting following flags
 * because those flags need to be set before `zone.js` being loaded, and webpack
 * will put import in the top of bundle, so user need to create a separate file
 * in this directory (for example: zone-flags.ts), and put the following flags
 * into that file, and then add the following code before importing zone.js.
 * import './zone-flags.ts';
 *
 * The flags allowed in zone-flags.ts are listed here.
 *
 * The following flags will work for all browsers.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */
/***************************************************************************************************
 * Zone JS is required by default for Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/creativestudio/Desktop/programing/node/turing_e_comerce/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map