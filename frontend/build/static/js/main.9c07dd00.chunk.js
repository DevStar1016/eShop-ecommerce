(this.webpackJsonpfrontend = this.webpackJsonpfrontend || []).push([
  [0],
  {
    212: function (e, t, a) {},
    241: function (e, t, a) {},
    242: function (e, t, a) {},
    243: function (e, t, a) {},
    244: function (e, t, a) {},
    246: function (e, t, a) {},
    247: function (e, t, a) {},
    248: function (e, t, a) {},
    249: function (e, t, a) {
      a.r(t);
      var r = a(0),
        n = a(1),
        c = a.n(n),
        s = a(23),
        i = a.n(s),
        o = a(7),
        l = a(66),
        d = a(145),
        j = a(146),
        u = 'PRODUCT_LIST_REQUEST',
        b = 'PRODUCT_LIST_SUCCESS',
        h = 'PRODUCT_LIST_FAILED',
        m = 'PRODUCT_DETAILS_REQUEST',
        p = 'PRODUCT_DETAILS_SUCCESS',
        O = 'PRODUCT_DETAILS_FAILED',
        x = 'PRODUCT_CREATE_REVIEW_REQUEST',
        g = 'PRODUCT_CREATE_REVIEW_SUCCESS',
        f = 'PRODUCT_CREATE_REVIEW_FAILED',
        v = 'PRODUCT_CREATE_REVIEW_RESET',
        y = 'PRODUCT_DELETE_REQUEST',
        _ = 'PRODUCT_DELETE_SUCCESS',
        N = 'PRODUCT_DELETE_FAILED',
        E = 'PRODUCT_CREATE_REQUEST',
        S = 'PRODUCT_CREATE_SUCCESS',
        C = 'PRODUCT_CREATE_FAILED',
        I = 'PRODUCT_CREATE_RESET',
        w = 'PRODUCT_UPDATE_REQUEST',
        P = 'PRODUCT_UPDATE_SUCCESS',
        k = 'PRODUCT_UPDATE_FAILED',
        A = 'PRODUCT_UPDATE_RESET',
        R = a(76),
        T = a(19),
        D = 'CART_ITEM_ADD',
        L = 'CART_ITEM_REMOVE',
        U = 'CART_ITEM_RESET',
        F = 'CART_SAVE_SHIPPING_ADDRESS',
        B = 'CART_SAVE_PAYMENT_METHOD',
        z = 'USER_LOGIN_REQUEST',
        M = 'USER_LOGIN_SUCCESS',
        W = 'USER_LOGIN_FAILED',
        H = 'USER_LOGOUT',
        q = 'USER_REGISTER_REQUEST',
        G = 'USER_REGISTER_SUCCESS',
        Y = 'USER_REGISTER_FAILED',
        Q = 'USER_DETAILS_REQUEST',
        V = 'USER_DETAILS_SUCCESS',
        $ = 'USER_DETAILS_FAILED',
        K = 'USER_DETAILS_RESET',
        J = 'USER_UPDATE_PROFILE_REQUEST',
        Z = 'USER_UPDATE_PROFILE_SUCCESS',
        X = 'USER_UPDATE_PROFILE_FAILED',
        ee = 'USER_CHECK_TOKEN_REQUEST ',
        te = 'USER_CHECK_TOKEN_SUCCESS ',
        ae = 'USER_CHECK_TOKEN_FAILED ',
        re = 'USER_CHECK_TOKEN_RESET ',
        ne = 'USER_LIST_REQUEST',
        ce = 'USER_LIST_SUCCESS',
        se = 'USER_LIST_FAILED',
        ie = 'USER_RESET_LIST',
        oe = 'USER_DELETE_REQUEST',
        le = 'USER_DELETE_SUCCESS',
        de = 'USER_DELETE_FAILED',
        je = 'USER_UPDATE_REQUEST',
        ue = 'USER_UPDATE_SUCCESS',
        be = 'USER_UPDATE_FAILED',
        he = 'USER_UPDATE_RESET',
        me = 'CREATE_ORDER_REQUEST',
        pe = 'CREATE_ORDER_SUCCESS',
        Oe = 'CREATE_ORDER_FAILED',
        xe = 'CREATE_ORDER_RESET',
        ge = 'ORDER_DETAILS_REQUEST',
        fe = 'ORDER_DETAILS_SUCCESS',
        ve = 'ORDER_DETAILS_FAILED',
        ye = 'ORDER_DETAILS_RESET',
        _e = 'ORDER_PAY_REQUEST',
        Ne = 'ORDER_PAY_SUCCESS',
        Ee = 'ORDER_PAY_FAILED',
        Se = 'ORDER_PAY_RESET',
        Ce = 'LIST_MY_ORDER_REQUEST',
        Ie = 'LIST_MY_ORDER_SUCCESS',
        we = 'LIST_MY_ORDER_FAILED',
        Pe = 'LIST_MY_ORDER_RESET',
        ke = 'LIST_ALL_ORDER_REQUEST',
        Ae = 'LIST_ALL_ORDER_SUCCESS',
        Re = 'LIST_ALL_ORDER_FAILED',
        Te = 'ORDER_DELIVER_REQUEST',
        De = 'ORDER_DELIVER_SUCCESS',
        Le = 'ORDER_DELIVER_FAILED',
        Ue = 'ORDER_DELIVER_RESET',
        Fe = Object(l.combineReducers)({
          productList: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, products: [], error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case u:
                return { loading: !0, products: [], error: null };
              case b:
                return { loading: !1, products: t.payload, error: null };
              case h:
                return { loading: !1, products: [], error: t.payload };
              default:
                return e;
            }
          },
          productDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, product: {}, error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case m:
                return { loading: !0, product: {}, error: null };
              case p:
                return { loading: !1, product: t.payload, error: null };
              case O:
                return { loading: !1, product: {}, error: t.payload };
              default:
                return e;
            }
          },
          productCreate: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case E:
                return { loading: !0 };
              case S:
                return { loading: !1, success: !0, product: t.payload };
              case C:
                return { loading: !1, error: t.payload };
              case I:
                return {};
              default:
                return e;
            }
          },
          productDelete: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case y:
                return { loading: !0, error: null };
              case _:
                return { loading: !1, success: !0, error: null };
              case N:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          productUpdate: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case w:
                return { loading: !0 };
              case P:
                return { loading: !1, success: !0, product: t.payload };
              case k:
                return { loading: !1, error: t.payload };
              case A:
                return {};
              default:
                return e;
            }
          },
          productCreateReview: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case x:
                return { loading: !0 };
              case g:
                return { loading: !1, success: !0 };
              case f:
                return { loading: !1, error: t.payload };
              case v:
                return {};
              default:
                return e;
            }
          },
          cart: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { cartItems: [], shippingAddress: {}, paymentMethod: '' },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case D:
                var a = t.payload,
                  r = e.cartItems.find(function (e) {
                    return e.product === a.product;
                  });
                return r
                  ? Object(T.a)(
                      Object(T.a)({}, e),
                      {},
                      {
                        cartItems: e.cartItems.map(function (e) {
                          return e.product === r.product ? a : e;
                        })
                      }
                    )
                  : Object(T.a)(
                      Object(T.a)({}, e),
                      {},
                      { cartItems: [].concat(Object(R.a)(e.cartItems), [a]) }
                    );
              case L:
                return Object(T.a)(
                  Object(T.a)({}, e),
                  {},
                  {
                    cartItems: e.cartItems.filter(function (e) {
                      return e.product !== t.payload;
                    })
                  }
                );
              case F:
                return Object(T.a)(Object(T.a)({}, e), {}, { shippingAddress: t.payload });
              case B:
                return Object(T.a)(Object(T.a)({}, e), {}, { paymentMethod: t.payload });
              case U:
                return Object(T.a)(Object(T.a)({}, e), {}, { cartItems: [] });
              default:
                return e;
            }
          },
          userLogin: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, isAuthenticated: !1, userInfo: null, error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case z:
                return { loading: !0, error: null };
              case M:
                return { loading: !1, isAuthenticated: !0, userInfo: t.payload };
              case W:
                return { loading: !1, isAuthenticated: !1, error: t.payload };
              case H:
                return { isAuthenticated: !1 };
              default:
                return e;
            }
          },
          userRegister: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, isAuthenticated: !1, userInfo: null, error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case q:
                return { loading: !0, error: null };
              case G:
                return { loading: !1, isAuthenticated: !0, userInfo: t.payload };
              case Y:
                return { loading: !1, isAuthenticated: !1, error: t.payload };
              case H:
                return { isAuthenticated: !1 };
              default:
                return e;
            }
          },
          userDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, user: null, error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Q:
                return { loading: !0 };
              case V:
                return { loading: !1, user: t.payload };
              case $:
                return { loading: !1, error: t.payload };
              case K:
                return { user: null };
              default:
                return e;
            }
          },
          userUpdateProfile: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, userInfo: null, error: null, success: !1 },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case J:
                return { loading: !0 };
              case Z:
                return { loading: !1, userInfo: t.payload, success: !0 };
              case X:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userAuthToken: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ee:
                return { loading: !0 };
              case te:
                return { loading: !1, success: t.payload };
              case ae:
                return { loading: !1, error: t.payload };
              case re:
                return {};
              default:
                return e;
            }
          },
          userList: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ne:
                return { loading: !0 };
              case ce:
                return { loading: !1, users: t.payload };
              case se:
                return { loading: !1, error: t.payload };
              case ie:
                return {};
              default:
                return e;
            }
          },
          userDelete: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case oe:
                return { loading: !0 };
              case le:
                return { loading: !1, success: !0 };
              case de:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          userUpdate: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case je:
                return { loading: !0 };
              case ue:
                return { loading: !1, user: t.payload, success: !0 };
              case be:
                return { loading: !1, error: t.payload };
              case he:
                return {};
              default:
                return e;
            }
          },
          order: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, success: !1, error: null, order: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case me:
                return { loading: !0 };
              case pe:
                return { loading: !1, order: t.payload, success: !0 };
              case Oe:
                return { loading: !1, error: t.payload };
              case xe:
                return {};
              default:
                return e;
            }
          },
          orderDetails: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !0, orders: null, error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ge:
                return Object(T.a)(Object(T.a)({}, e), {}, { loading: !0 });
              case fe:
                return { loading: !1, orders: t.payload };
              case ve:
                return { loading: !1, error: t.payload };
              case ye:
                return { orders: [] };
              default:
                return e;
            }
          },
          orderPay: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case _e:
                return { loading: !0 };
              case Ne:
                return { loading: !1, success: !0 };
              case Ee:
                return { loading: !1, error: t.payload };
              case Se:
                return {};
              default:
                return e;
            }
          },
          myOrders: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, orders: null, error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Ce:
                return { loading: !0 };
              case Ie:
                return { loading: !1, orders: t.payload };
              case we:
                return { loading: !1, error: t.payload };
              case Pe:
                return { orders: [] };
              default:
                return e;
            }
          },
          allOrders: function () {
            var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : { loading: !1, orders: null, error: null },
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case ke:
                return { loading: !0 };
              case Ae:
                return { loading: !1, orders: t.payload };
              case Re:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          orderDeliver: function () {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case Te:
                return { loading: !0 };
              case De:
                return { loading: !1, success: !0 };
              case Le:
                return { loading: !1, error: t.payload };
              case Ue:
                return {};
              default:
                return e;
            }
          }
        }),
        Be = {
          cart: {
            cartItems: localStorage.getItem('cartItems')
              ? JSON.parse(localStorage.getItem('cartItems'))
              : [],
            shippingAddress: localStorage.getItem('shippingAddress')
              ? JSON.parse(localStorage.getItem('shippingAddress'))
              : {}
          },
          userLogin: {
            userInfo: localStorage.getItem('userInfo')
              ? JSON.parse(localStorage.getItem('userInfo'))
              : null
          }
        },
        ze = [j.a],
        Me = Object(l.createStore)(
          Fe,
          Be,
          Object(d.composeWithDevTools)(l.applyMiddleware.apply(void 0, ze))
        ),
        We = (a(212), a(12)),
        He = a(29),
        qe = a(9),
        Ge = a(294),
        Ye = a(295),
        Qe = a(80),
        Ve = a(301),
        $e = a(177),
        Ke = a(296),
        Je = a(300),
        Ze = a(344),
        Xe = a(299),
        et = a(252),
        tt = a(302),
        at = a(303),
        rt = a(251),
        nt = a(151),
        ct = a.n(nt),
        st = a(89),
        it = a.n(st),
        ot = a(127),
        lt = a.n(ot),
        dt = a(128),
        jt = a.n(dt),
        ut = a(126),
        bt = a.n(ut),
        ht = a(152),
        mt = a.n(ht),
        pt = a(181),
        Ot = a(150),
        xt = a.n(Ot),
        gt = a(25),
        ft = a(290),
        vt = a(18),
        yt = Object(ft.a)(function (e) {
          return {
            appbar: {
              padding: '0.4rem',
              background: 'linear-gradient(45deg, #0267B5,  30%, #2196f3 90%)',
              position: 'fixed'
            },
            menu: {},
            menuButton: Object(gt.a)({ marginRight: e.spacing(2) }, e.breakpoints.up('md'), {
              display: 'none'
            }),
            title: { flexGrow: 1 },
            search: Object(gt.a)(
              {
                position: 'relative',
                borderRadius: e.shape.borderRadius,
                backgroundColor: Object(vt.b)(e.palette.common.white, 0.15),
                '&:hover': { backgroundColor: Object(vt.b)(e.palette.common.white, 0.25) },
                marginLeft: 0,
                width: '80%'
              },
              e.breakpoints.up('sm'),
              { marginLeft: e.spacing(1), width: 'auto' }
            ),
            searchIcon: {
              padding: e.spacing(0, 2),
              height: '100%',
              position: 'absolute',
              pointerEvents: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            inputRoot: { color: 'inherit' },
            inputInput: Object(gt.a)(
              {
                padding: e.spacing(1, 1, 1, 0),
                paddingLeft: 'calc(1em + '.concat(e.spacing(4), 'px)'),
                transition: e.transitions.create('width'),
                width: '100%'
              },
              e.breakpoints.up('sm'),
              { width: '12ch', '&:focus': { width: '20ch' } }
            ),
            drawer: { width: 240, flexShrink: 0 },
            drawerPaper: { width: 240 },
            drawerHeader: Object(T.a)(
              Object(T.a)(
                { display: 'flex', alignItems: 'center', padding: e.spacing(0, 1) },
                e.mixins.toolbar
              ),
              {},
              { justifyContent: 'flex-end' }
            ),
            link_brand: {
              color: 'inherit',
              '&:hover': { textDecoration: 'none', color: 'inherit' }
            },
            link_menu_item: {
              color: 'black',
              textDecoration: 'none',
              '&:hover': { textDecoration: 'none' }
            },
            link: Object(gt.a)(
              { color: 'inherit', '&:hover': { textDecoration: 'none', color: 'inherit' } },
              e.breakpoints.down('sm'),
              { display: 'none' }
            ),
            link_drawer: {
              '&:hover': { textDecoration: 'none', color: e.palette.primary },
              textDecoration: 'none'
            }
          };
        });
      function _t(e) {
        var t = e.history,
          a = yt(),
          c = Object(n.useState)(''),
          s = Object(qe.a)(c, 2),
          i = s[0],
          o = s[1];
        Object(n.useEffect)(
          function () {
            '/' === window.location.pathname || window.location.pathname.includes('/search')
              ? i.trim()
                ? t.push('/search?name='.concat(i))
                : t.push('/')
              : o('');
          },
          [i, t]
        );
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsxs)('div', {
            className: a.search,
            children: [
              Object(r.jsx)('div', {
                className: a.searchIcon,
                children: Object(r.jsx)(xt.a, {})
              }),
              Object(r.jsx)(pt.a, {
                value: i,
                onChange: function (e) {
                  o(e.target.value);
                },
                placeholder: 'Search\u2026',
                classes: { root: a.inputRoot, input: a.inputInput },
                inputProps: { 'aria-label': 'search' }
              })
            ]
          })
        });
      }
      var Nt = a(10),
        Et = a.n(Nt),
        St = a(17),
        Ct = a(24),
        It = a.n(Ct),
        wt = function (e) {
          return { type: M, payload: e };
        },
        Pt = function (e) {
          return { type: Z, payload: e };
        },
        kt = function (e) {
          return { type: ue, payload: e };
        },
        At = function () {
          return function (e) {
            localStorage.removeItem('userInfo'),
              e({ type: H }),
              e({ type: Pe }),
              e({ type: K }),
              e({ type: ie });
          };
        },
        Rt = function (e, t) {
          return (function () {
            var a = Object(St.a)(
              Et.a.mark(function a(r, n) {
                var c, s, i, o, l;
                return Et.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            r({ type: Q }),
                            (c = n()),
                            (s = c.userLogin.userInfo),
                            (i = {
                              'Content-Type': 'application/json',
                              headers: { Authorization: 'Bearer '.concat(s.token) }
                            }),
                            (a.next = 6),
                            It.a.get(''.concat(e, '/user/').concat(t), i)
                          );
                        case 6:
                          (o = a.sent), (l = o.data), r({ type: V, payload: l }), (a.next = 14);
                          break;
                        case 11:
                          (a.prev = 11),
                            (a.t0 = a.catch(0)),
                            r(
                              ((d =
                                a.t0.response && a.t0.response.data.message
                                  ? a.t0.response.data.message
                                  : a.t0.message),
                              { type: $, payload: d })
                            );
                        case 14:
                        case 'end':
                          return a.stop();
                      }
                    var d;
                  },
                  a,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, t) {
              return a.apply(this, arguments);
            };
          })();
        },
        Tt = a(304),
        Dt = a(305),
        Lt = a(306),
        Ut = a(307);
      function Ft(e) {
        var t = e.isMobile,
          a = yt(),
          c = Object(n.useState)(null),
          s = Object(qe.a)(c, 2),
          i = s[0],
          l = s[1],
          d = Object(n.useState)(null),
          j = Object(qe.a)(d, 2),
          u = j[0],
          b = j[1],
          h = Boolean(i),
          m = Boolean(u),
          p = Object(n.useState)(!1),
          O = Object(qe.a)(p, 2),
          x = O[0],
          g = O[1],
          f = Object(o.b)(),
          v = Object(o.c)(function (e) {
            return e.userLogin;
          }).userInfo,
          y = function () {
            f(At()), l(null);
          },
          _ = function () {
            l(null);
          },
          N = function () {
            b(null);
          };
        return Object(r.jsxs)('header', {
          className: a.root,
          children: [
            Object(r.jsx)(Ge.a, {
              position: 'fixed',
              elevation: 10,
              className: a.appbar,
              children: Object(r.jsxs)(Ye.a, {
                children: [
                  Object(r.jsx)(rt.a, {
                    edge: 'start',
                    className: a.menuButton,
                    onClick: function () {
                      return g(!0);
                    },
                    color: 'inherit',
                    'aria-label': 'menu',
                    children: Object(r.jsx)(ct.a, {})
                  }),
                  Object(r.jsx)(Qe.a, {
                    variant: 'h6',
                    className: a.title,
                    children: Object(r.jsx)(We.b, {
                      className: a.link_brand,
                      to: '/',
                      children: 'eShop'
                    })
                  }),
                  Object(r.jsx)(He.a, {
                    render: function (e) {
                      var t = e.history;
                      return Object(r.jsx)(_t, { history: t });
                    }
                  }),
                  '\xa0 \xa0 \xa0 \xa0',
                  Object(r.jsx)(We.b, {
                    className: a.link,
                    to: v ? '/cart' : '/login?redirect=cart',
                    children: Object(r.jsxs)(Ke.a, {
                      color: 'inherit',
                      children: [Object(r.jsx)(it.a, {}), '\xa0 Cart']
                    })
                  }),
                  v
                    ? Object(r.jsxs)(r.Fragment, {
                        children: [
                          Object(r.jsxs)(rt.a, {
                            'aria-label': 'account of current user',
                            'aria-controls': 'menu-appbar',
                            'aria-haspopup': 'true',
                            onClick: function (e) {
                              l(e.currentTarget);
                            },
                            color: 'inherit',
                            style: { fontSize: '1.25rem' },
                            children: [
                              Object(r.jsx)(bt.a, {}),
                              '\xa0',
                              t ? null : v.name.split(' ')[0]
                            ]
                          }),
                          Object(r.jsxs)($e.a, {
                            id: 'menu-appbar',
                            className: a.menu,
                            elevation: 4,
                            getContentAnchorEl: null,
                            anchorEl: i,
                            anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                            keepMounted: !0,
                            transformOrigin: { vertical: 'top', horizontal: 'center' },
                            TransitionComponent: Je.a,
                            open: h,
                            onClose: _,
                            children: [
                              t
                                ? Object(r.jsxs)(Ve.a, {
                                    onClick: _,
                                    children: [
                                      Object(r.jsx)(rt.a, {
                                        children: Object(r.jsx)(bt.a, {})
                                      }),
                                      Object(r.jsx)(tt.a, { primary: v.name.split(' ')[0] })
                                    ]
                                  })
                                : null,
                              Object(r.jsx)(We.b, {
                                to: '/profile',
                                className: a.link_menu_item,
                                children: Object(r.jsxs)(Ve.a, {
                                  onClick: _,
                                  children: [
                                    Object(r.jsx)(at.a, { children: Object(r.jsx)(mt.a, {}) }),
                                    Object(r.jsx)(tt.a, { primary: 'Profile' })
                                  ]
                                })
                              }),
                              Object(r.jsxs)(Ve.a, {
                                onClick: y,
                                className: a.link_menu_item,
                                children: [
                                  Object(r.jsx)(at.a, { children: Object(r.jsx)(lt.a, {}) }),
                                  Object(r.jsx)(tt.a, { primary: 'Logout' })
                                ]
                              })
                            ]
                          }),
                          v.isAdmin
                            ? Object(r.jsxs)(r.Fragment, {
                                children: [
                                  Object(r.jsxs)(rt.a, {
                                    'aria-label': 'account of admin user',
                                    'aria-controls': 'menu-admin-appbar',
                                    'aria-haspopup': 'true',
                                    onClick: function (e) {
                                      b(e.currentTarget);
                                    },
                                    color: 'inherit',
                                    style: { fontSize: '1.25rem' },
                                    children: [
                                      Object(r.jsx)(Tt.a, {}),
                                      '\xa0',
                                      t ? null : 'Admin'
                                    ]
                                  }),
                                  Object(r.jsxs)($e.a, {
                                    id: 'menu-appbar',
                                    className: a.menu,
                                    elevation: 4,
                                    getContentAnchorEl: null,
                                    anchorEl: u,
                                    anchorOrigin: { vertical: 'bottom', horizontal: 'center' },
                                    keepMounted: !0,
                                    transformOrigin: { vertical: 'top', horizontal: 'center' },
                                    TransitionComponent: Je.a,
                                    open: m,
                                    onClose: N,
                                    children: [
                                      Object(r.jsx)(We.b, {
                                        to: '/admin/userlist',
                                        className: a.link_menu_item,
                                        children: Object(r.jsxs)(Ve.a, {
                                          onClick: N,
                                          children: [
                                            Object(r.jsx)(at.a, {
                                              children: Object(r.jsx)(Dt.a, {})
                                            }),
                                            Object(r.jsx)(tt.a, { primary: 'Users' })
                                          ]
                                        })
                                      }),
                                      Object(r.jsx)(We.b, {
                                        to: '/admin/productlist',
                                        className: a.link_menu_item,
                                        children: Object(r.jsxs)(Ve.a, {
                                          onClick: N,
                                          children: [
                                            Object(r.jsx)(at.a, {
                                              children: Object(r.jsx)(Lt.a, {})
                                            }),
                                            Object(r.jsx)(tt.a, { primary: 'Products' })
                                          ]
                                        })
                                      }),
                                      Object(r.jsx)(We.b, {
                                        to: '/admin/orderlist',
                                        className: a.link_menu_item,
                                        children: Object(r.jsxs)(Ve.a, {
                                          onClick: N,
                                          children: [
                                            Object(r.jsx)(at.a, {
                                              children: Object(r.jsx)(Ut.a, {})
                                            }),
                                            Object(r.jsx)(tt.a, { primary: 'Orders' })
                                          ]
                                        })
                                      })
                                    ]
                                  })
                                ]
                              })
                            : null
                        ]
                      })
                    : Object(r.jsx)(We.b, {
                        className: a.link,
                        to: '/login',
                        children: Object(r.jsxs)(Ke.a, {
                          color: 'inherit',
                          children: [Object(r.jsx)(jt.a, {}), '\xa0 LOGIN']
                        })
                      })
                ]
              })
            }),
            Object(r.jsx)(Ze.a, {
              anchor: 'bottom',
              open: x,
              onClose: function () {
                return g(!1);
              },
              children: Object(r.jsxs)(Xe.a, {
                children: [
                  v
                    ? Object(r.jsxs)(et.a, {
                        button: !0,
                        className: a.link_drawer,
                        onClick: y,
                        children: [
                          Object(r.jsx)(at.a, { children: Object(r.jsx)(lt.a, {}) }),
                          Object(r.jsx)(tt.a, { primary: 'Logout' })
                        ]
                      })
                    : Object(r.jsx)(We.b, {
                        className: a.link_drawer,
                        to: '/login',
                        children: Object(r.jsxs)(et.a, {
                          button: !0,
                          children: [
                            Object(r.jsx)(at.a, { children: Object(r.jsx)(jt.a, {}) }),
                            Object(r.jsx)(tt.a, { primary: 'Login' })
                          ]
                        })
                      }),
                  Object(r.jsx)(We.b, {
                    className: a.link_drawer,
                    to: v ? '/cart' : '/login?redirect=cart',
                    children: Object(r.jsxs)(et.a, {
                      button: !0,
                      children: [
                        Object(r.jsx)(at.a, { children: Object(r.jsx)(it.a, {}) }),
                        Object(r.jsx)(tt.a, { primary: 'Cart' })
                      ]
                    })
                  })
                ]
              })
            })
          ]
        });
      }
      var Bt = a(308),
        zt = a(309),
        Mt = a(153),
        Wt = function () {
          return Object(r.jsx)('footer', {
            children: Object(r.jsx)(Bt.a, {
              children: Object(r.jsx)(zt.a, {
                children: Object(r.jsx)(Mt.a, {
                  children: Object(r.jsx)('p', {
                    className: 'text-center py-3',
                    style: { opacity: 0.8 },
                    children: 'Copyright \xa9 2021 by Shubham Dutta'
                  })
                })
              })
            })
          });
        },
        Ht = a(345),
        qt = a(79),
        Gt = a.n(qt),
        Yt =
          (a(239),
          a(240),
          function () {
            return { type: u };
          }),
        Qt = function (e) {
          return { type: b, payload: e };
        },
        Vt = function (e) {
          return { type: h, payload: e };
        },
        $t = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = arguments.length > 1 ? arguments[1] : void 0;
          return (function () {
            var a = Object(St.a)(
              Et.a.mark(function a(r) {
                var n, c;
                return Et.a.wrap(
                  function (a) {
                    for (;;)
                      switch ((a.prev = a.next)) {
                        case 0:
                          return (
                            (a.prev = 0),
                            r(Yt()),
                            (a.next = 4),
                            It.a.get(''.concat(t, '/products?keyword=').concat(e))
                          );
                        case 4:
                          (n = a.sent), (c = n.data), r(Qt(c)), console.log(c), (a.next = 13);
                          break;
                        case 10:
                          (a.prev = 10),
                            (a.t0 = a.catch(0)),
                            r(
                              Vt(
                                a.t0.response && a.t0.response.data.message
                                  ? a.t0.response.data.message
                                  : a.t0.message
                              )
                            );
                        case 13:
                        case 'end':
                          return a.stop();
                      }
                  },
                  a,
                  null,
                  [[0, 10]]
                );
              })
            );
            return function (e) {
              return a.apply(this, arguments);
            };
          })();
        },
        Kt = a(341);
      a(241);
      function Jt(e) {
        var t = e.value,
          a = e.text,
          n = e.color;
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsxs)('div', {
            className: 'rating',
            children: [
              Object(r.jsx)('span', {
                children: Object(r.jsx)('i', {
                  className:
                    t >= 1 ? 'fas fa-star' : t >= 0.5 ? 'fas fa-star-half-alt' : 'far fa-star',
                  style: { color: n }
                })
              }),
              Object(r.jsx)('span', {
                children: Object(r.jsx)('i', {
                  className:
                    t >= 2 ? 'fas fa-star' : t >= 1.5 ? 'fas fa-star-half-alt' : 'far fa-star',
                  style: { color: n }
                })
              }),
              Object(r.jsx)('span', {
                children: Object(r.jsx)('i', {
                  className:
                    t >= 3 ? 'fas fa-star' : t >= 2.5 ? 'fas fa-star-half-alt' : 'far fa-star',
                  style: { color: n }
                })
              }),
              Object(r.jsx)('span', {
                children: Object(r.jsx)('i', {
                  className:
                    t >= 4 ? 'fas fa-star' : t >= 3.5 ? 'fas fa-star-half-alt' : 'far fa-star',
                  style: { color: n }
                })
              }),
              Object(r.jsx)('span', {
                children: Object(r.jsx)('i', {
                  className:
                    t >= 5 ? 'fas fa-star' : t >= 4.5 ? 'fas fa-star-half-alt' : 'far fa-star',
                  style: { color: n }
                })
              }),
              Object(r.jsx)('span', { className: 'ml-2', children: a })
            ]
          })
        });
      }
      Jt.defaultProps = { color: '#FAAE20' };
      a(242);
      function Zt(e) {
        var t = e.product;
        e.path;
        return Object(r.jsx)(r.Fragment, {
          children: Object(r.jsxs)(Kt.a, {
            className: 'card my-3  rounded',
            children: [
              Object(r.jsx)(We.b, {
                to: 'products/'.concat(t.category, '/').concat(t._id),
                children: Object(r.jsx)('div', {
                  className: 'card_image_div',
                  children: Object(r.jsx)('img', {
                    className: 'card_image',
                    src: t.image,
                    alt: t.image
                  })
                })
              }),
              Object(r.jsxs)(Kt.a.Body, {
                children: [
                  Object(r.jsx)(We.b, {
                    to: 'products/'.concat(t.category, '/').concat(t._id),
                    children: Object(r.jsx)(Kt.a.Title, {
                      as: 'div',
                      style: { fontSize: '16px', textDecoration: 'none' },
                      children: Object(r.jsx)('strong', { children: t.name })
                    })
                  }),
                  Object(r.jsx)(Kt.a.Text, {
                    as: 'div',
                    children: Object(r.jsx)('div', {
                      className: 'my-3',
                      children: Object(r.jsx)(Jt, {
                        value: t.rating,
                        text: ''.concat(t.numReviews, ' rating')
                      })
                    })
                  }),
                  Object(r.jsxs)(Kt.a.Text, { as: 'h3', children: ['$', t.price] })
                ]
              })
            ]
          })
        });
      }
      var Xt = a(310);
      function ea() {
        return Object(r.jsx)(Xt.a, {
          animation: 'border',
          variant: 'primary',
          role: 'status',
          style: { width: '60px', height: '60px', margin: 'auto', display: 'block' },
          children: Object(r.jsx)('span', { className: 'sr-only', children: 'Loading...' })
        });
      }
      var ta = a(337),
        aa = function (e) {
          var t = e.varient,
            a = e.children;
          return Object(r.jsx)(ta.a, { className: 'mb-3', severity: t, children: a });
        },
        ra = a(336),
        na = Object(ft.a)(function (e) {
          return {
            root: {
              '& > *': {
                marginTop: e.spacing(2),
                width: '70rem',
                display: 'flex',
                justifyContent: 'center'
              }
            },
            mobile: {
              marginTop: e.spacing(2),
              width: '100%',
              display: 'flex',
              justifyContent: 'center'
            }
          };
        });
      function ca(e) {
        var t = e.totalPage,
          a = e.setPaginate,
          n = e.isMobile,
          c = na();
        return Object(r.jsx)('div', {
          className: n ? c.mobile : c.root,
          children: Object(r.jsx)(ra.a, {
            className: c.paginate,
            count: t,
            onChange: function (e, t) {
              a(function (e) {
                return Object(T.a)(Object(T.a)({}, e), {}, { currentPage: t });
              }),
                n ? window.scrollTo(0, 2820) : window.scrollTo(0, 3e3);
            },
            shape: 'rounded',
            color: 'primary',
            size: n ? 'small' : 'large'
          })
        });
      }
      var sa = a(154),
        ia = function (e) {
          var t = e.title,
            a = e.description,
            n = e.keywords;
          return Object(r.jsxs)(sa.a, {
            children: [
              Object(r.jsx)('title', { children: t }),
              Object(r.jsx)('meta', { name: 'description', content: a }),
              Object(r.jsx)('meta', { name: 'keyword', content: n })
            ]
          });
        };
      ia.defaultProps = {
        title: 'Welcome To eShop',
        description: 'Buy all the best products here at very cheap price',
        keyword:
          "eShop,ecommerce,cheap products,online store,ecommerce website,shopping cart,e commerce business,e commerce sites,free shopping cart,payment,payment integration,paypal,stripe,search by products,best products,buy electronics,buy men's accessories,buy women's accessories,buy home appliances"
      };
      var oa = ia,
        la = [
          {
            image_desktop: '/assets/images/carousal/Landing_electronics.png',
            image_mobile: '/assets/images/carousal/Landing_electronics_phone.png',
            heading: 'Electronics Accessories',
            para: 'Lorem Ipsum is simply dummy text of the print and type setting industry.',
            id: '#electronics'
          },
          {
            image_desktop: '/assets/images/carousal/Landing_home.png',
            image_mobile: '/assets/images/carousal/Landing_home_phone.png',
            heading: 'Home Appliances',
            para: 'Lorem Ipsum is simply dummy text of the print and type setting industry.',
            id: '#home_appliances'
          },
          {
            image_desktop: '/assets/images/carousal/Landing_mens.png',
            image_mobile: '/assets/images/carousal/Landing_mens_phone.png',
            heading: 'Mens Accessories',
            para: 'Lorem Ipsum is simply dummy text of the print and type setting industry.',
            id: '#mens_accessories'
          },
          {
            image_desktop: '/assets/images/carousal/Landing_womens.png',
            image_mobile: '/assets/images/carousal/Landing_womens_phone.png',
            heading: 'Womens Accessories',
            para: 'Lorem Ipsum is simply dummy text of the print and type setting industry.',
            id: '#womens_accessories'
          }
        ];
      a(243);
      function da(e) {
        var t = e.location,
          a = e.history,
          c = e.API,
          s = e.isMobile,
          i = {
            loop: !1,
            dots: !1,
            margin: 10,
            nav: !0,
            navText: [
              "<i class='fa fa-2x fa-angle-left'></i>",
              "<i class='fa fa-2x fa-angle-right'></i>"
            ],
            responsive: { 320: { items: 1 }, 768: { items: 3 }, 1e3: { items: 4 } }
          },
          l = Object(o.b)(),
          d = Object(o.c)(function (e) {
            return e.productList;
          }),
          j = d.loading,
          u = d.products,
          b = d.error,
          h = Object(n.useState)({
            allProducts: [],
            currentPage: 1,
            allProductsPerPage: s ? 1 : 6
          }),
          m = Object(qe.a)(h, 2),
          p = m[0],
          O = m[1];
        Object(n.useEffect)(
          function () {
            O(function (e) {
              return Object(T.a)(Object(T.a)({}, e), {}, { allProducts: u });
            }),
              window.scrollTo(0, 0);
          },
          [j, u]
        );
        var x = p.allProducts,
          g = p.currentPage,
          f = p.allProductsPerPage,
          v = g * f,
          y = v - f,
          _ = x.slice(y, v),
          N = Math.ceil(x.length / f),
          E = Object(n.useState)(!1),
          S = Object(qe.a)(E, 2),
          C = S[0],
          I = S[1],
          w = new URLSearchParams(t.search).get('name') || '';
        Object(n.useEffect)(
          function () {
            I(!!w), l($t(w, c));
          },
          [l, w, c]
        );
        var P = Object(n.useRef)(null),
          k = Object(n.useRef)(null),
          A = Object(n.useRef)(null),
          R = Object(n.useRef)(null);
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)(oa, {}),
            C
              ? Object(r.jsx)(r.Fragment, {
                  children: Object(r.jsxs)('div', {
                    className: s ? 'mx-3 px-3 py-4' : 'mx-5 px-4 py-4',
                    children: [
                      Object(r.jsx)('nav', {
                        'aria-label': 'breadcrumb',
                        children: Object(r.jsxs)('ol', {
                          className: 'breadcrumb',
                          children: [
                            Object(r.jsx)('li', {
                              className: 'breadcrumb-item',
                              children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                            }),
                            Object(r.jsx)('li', {
                              className: 'breadcrumb-item active',
                              'aria-current': 'page',
                              children: 'Search'
                            })
                          ]
                        })
                      }),
                      Object(r.jsx)(Ht.a, {
                        onClick: function () {
                          a.goBack();
                        },
                        className: 'btn btn-light mt-2 mb-3',
                        children: 'Go Back'
                      })
                    ]
                  })
                })
              : Object(r.jsx)(
                  Gt.a,
                  Object(T.a)(
                    Object(T.a)(
                      { className: 'owl-carousel owl-theme' },
                      {
                        loop: !0,
                        margin: 100,
                        autoplay: !0,
                        autoplayTimeout: 4e3,
                        lazyLoad: !0,
                        smartSpeed: 1e3,
                        items: 1
                      }
                    ),
                    {},
                    {
                      children: la.map(function (e, t) {
                        return Object(r.jsx)(
                          Mt.a,
                          {
                            children: Object(r.jsxs)('div', {
                              className: s ? 'carousal_phone' : 'carousal',
                              style: s
                                ? {
                                    background: 'url('.concat(e.image_mobile, ')'),
                                    backgroundPosition: '-30px',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                  }
                                : {
                                    background: 'url('.concat(e.image_desktop, ')'),
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat'
                                  },
                              children: [
                                Object(r.jsx)('h1', {
                                  className: s ? 'carousal_heading_phone' : 'carousal_heading',
                                  children: e.heading
                                }),
                                Object(r.jsx)('h2', {
                                  className: s ? 'carousal_para_phone' : 'carousal_para',
                                  children: e.para
                                }),
                                Object(r.jsx)('button', {
                                  onClick: function () {
                                    var t;
                                    '#electronics' === (t = e.id)
                                      ? P.current.scrollIntoView({ behavior: 'smooth' })
                                      : '#home_appliances' === t
                                      ? k.current.scrollIntoView({ behavior: 'smooth' })
                                      : '#mens_accessories' === t
                                      ? A.current.scrollIntoView({ behavior: 'smooth' })
                                      : '#womens_accessories' === t &&
                                        R.current.scrollIntoView({ behavior: 'smooth' });
                                  },
                                  className: s ? 'carousal_button_phone' : 'carousal_button',
                                  children: 'SHOP NOW'
                                })
                              ]
                            })
                          },
                          t
                        );
                      })
                    }
                  ),
                  u.length
                ),
            Object(r.jsxs)('div', {
              className: s ? 'products_section_phone' : 'products_section',
              children: [
                C
                  ? null
                  : Object(r.jsxs)(r.Fragment, {
                      children: [
                        Object(r.jsx)('h1', {
                          ref: P,
                          className: s
                            ? 'category_heading_phone mt-4'
                            : ' category_heading mt-5',
                          children: 'Electronics Accessories'
                        }),
                        Object(r.jsx)(zt.a, {
                          children: j
                            ? Object(r.jsx)(ea, {})
                            : b
                            ? Object(r.jsx)(aa, { varient: '#FC308B', children: b })
                            : u &&
                              Object(r.jsx)(
                                Gt.a,
                                Object(T.a)(
                                  Object(T.a)({ className: 'owl-theme' }, i),
                                  {},
                                  {
                                    children: u
                                      .filter(function (e) {
                                        return 'electronics' === e.category;
                                      })
                                      .map(function (e, t) {
                                        return Object(r.jsx)(
                                          Mt.a,
                                          { children: Object(r.jsx)(Zt, { product: e }) },
                                          t
                                        );
                                      })
                                  }
                                ),
                                u.length
                              )
                        }),
                        Object(r.jsx)('h1', {
                          ref: k,
                          className: s
                            ? 'category_heading_phone  pt-2 mt-4'
                            : 'category_heading pt-5 mt-5',
                          children: 'Home Appliances'
                        }),
                        Object(r.jsx)(zt.a, {
                          children: j
                            ? Object(r.jsx)(ea, {})
                            : b
                            ? Object(r.jsx)(aa, { varient: '#FC308B', children: b })
                            : u &&
                              Object(r.jsx)(
                                Gt.a,
                                Object(T.a)(
                                  Object(T.a)({ className: 'owl-theme' }, i),
                                  {},
                                  {
                                    children: u
                                      .filter(function (e) {
                                        return 'home_appliances' === e.category;
                                      })
                                      .map(function (e, t) {
                                        return Object(r.jsx)(
                                          Mt.a,
                                          { children: Object(r.jsx)(Zt, { product: e }) },
                                          t
                                        );
                                      })
                                  }
                                ),
                                u.length
                              )
                        }),
                        Object(r.jsx)('h1', {
                          ref: A,
                          className: s
                            ? 'category_heading_phone  pt-2 mt-4'
                            : 'category_heading pt-5 mt-5',
                          children: "Men's Accessories"
                        }),
                        Object(r.jsx)(zt.a, {
                          children: j
                            ? Object(r.jsx)(ea, {})
                            : b
                            ? Object(r.jsx)(aa, { varient: '#FC308B', children: b })
                            : u &&
                              Object(r.jsx)(
                                Gt.a,
                                Object(T.a)(
                                  Object(T.a)({ className: 'owl-theme' }, i),
                                  {},
                                  {
                                    children: u
                                      .filter(function (e) {
                                        return 'mens_accessories' === e.category;
                                      })
                                      .map(function (e, t) {
                                        return Object(r.jsx)(
                                          Mt.a,
                                          { children: Object(r.jsx)(Zt, { product: e }) },
                                          t
                                        );
                                      })
                                  }
                                ),
                                u.length
                              )
                        }),
                        Object(r.jsx)('h1', {
                          ref: R,
                          className: s
                            ? 'category_heading_phone  pt-2 mt-4'
                            : 'category_heading pt-5 mt-5',
                          children: "Women's Accessories"
                        }),
                        Object(r.jsx)(zt.a, {
                          children: j
                            ? Object(r.jsx)(ea, {})
                            : b
                            ? Object(r.jsx)(aa, { varient: '#FC308B', children: b })
                            : u &&
                              Object(r.jsx)(
                                Gt.a,
                                Object(T.a)(
                                  Object(T.a)({ className: 'owl-theme' }, i),
                                  {},
                                  {
                                    children: u
                                      .filter(function (e) {
                                        return 'womens_accessories' === e.category;
                                      })
                                      .map(function (e, t) {
                                        return Object(r.jsx)(
                                          Mt.a,
                                          { children: Object(r.jsx)(Zt, { product: e }) },
                                          t
                                        );
                                      })
                                  }
                                ),
                                u.length
                              )
                        })
                      ]
                    }),
                Object(r.jsx)('h1', {
                  className:
                    C && s
                      ? 'category_heading_phone mb-4'
                      : C
                      ? 'category_heading mb-5'
                      : s
                      ? 'category_heading_phone'
                      : 'category_heading pt-5 mt-5',
                  children: C ? 'Results of '.concat(w) : 'Latest Products'
                }),
                Object(r.jsxs)(zt.a, {
                  children: [
                    j
                      ? C
                        ? Object(r.jsxs)(r.Fragment, {
                            children: [
                              Object(r.jsx)(ea, {}),
                              Object(r.jsx)('h2', { children: 'Searching...' })
                            ]
                          })
                        : Object(r.jsx)(ea, {})
                      : b
                      ? Object(r.jsx)(aa, { varient: '#FC308B', children: b })
                      : 0 !== _.length
                      ? _.map(function (e, t) {
                          return Object(r.jsx)(
                            Mt.a,
                            { md: 4, lg: 3, children: Object(r.jsx)(Zt, { product: e }) },
                            t
                          );
                        })
                      : Object(r.jsx)(r.Fragment, {
                          children: Object(r.jsx)(Mt.a, {
                            xs: 12,
                            className: 'text-center',
                            children: Object(r.jsx)('h2', {
                              className: s ? 'noProduct_phone' : 'noProduct',
                              children: 'No Products Found'
                            })
                          })
                        }),
                    Object(r.jsx)(ca, {
                      totalPage: N,
                      currentPage: g,
                      setPaginate: O,
                      isMobile: s
                    })
                  ]
                })
              ]
            })
          ]
        });
      }
      var ja = a(312),
        ua = a(334),
        ba = a(335),
        ha = a(311),
        ma = function () {
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsxs)(zt.a, {
                children: [
                  Object(r.jsx)(Mt.a, {
                    md: 6,
                    children: Object(r.jsx)(ha.a, {
                      animation: 'wave',
                      variant: 'rect',
                      height: 440
                    })
                  }),
                  Object(r.jsx)(Mt.a, {
                    md: 3,
                    children: Object(r.jsx)(ha.a, { variant: 'rect', height: 320 })
                  }),
                  Object(r.jsx)(Mt.a, {
                    md: 3,
                    children: Object(r.jsx)(ha.a, { variant: 'rect', height: 200 })
                  })
                ]
              }),
              Object(r.jsx)('br', {}),
              Object(r.jsx)(zt.a, {
                children: Object(r.jsxs)(Mt.a, {
                  md: 6,
                  children: [
                    Object(r.jsx)(ha.a, { variant: 'text', height: 60, width: 360 }),
                    Object(r.jsx)(ha.a, { variant: 'rect', height: 16, width: 180 }),
                    Object(r.jsxs)('div', {
                      className: 'mt-4 ml-4 mb-3',
                      children: [
                        Object(r.jsx)(ha.a, { variant: 'text', height: 30, width: 180 }),
                        Object(r.jsx)(ha.a, { variant: 'text', height: 16, width: 190 }),
                        Object(r.jsx)(ha.a, { variant: 'text', height: 24, width: 300 })
                      ]
                    }),
                    Object(r.jsx)(ha.a, { variant: 'text', height: 60, width: 360 }),
                    Object(r.jsx)(ha.a, { variant: 'rect', height: 30, width: 500 })
                  ]
                })
              })
            ]
          });
        },
        pa = function (e) {
          return { type: S, payload: e };
        },
        Oa = function (e) {
          return { type: P, payload: e };
        },
        xa = function (e, t, a) {
          return (function () {
            var r = Object(St.a)(
              Et.a.mark(function r(n) {
                var c, s;
                return Et.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            n({ type: m }),
                            (r.next = 4),
                            It.a.get(''.concat(e, '/products/').concat(t, '/').concat(a))
                          );
                        case 4:
                          (c = r.sent), (s = c.data), n({ type: p, payload: s }), (r.next = 12);
                          break;
                        case 9:
                          (r.prev = 9),
                            (r.t0 = r.catch(0)),
                            n(
                              ((i =
                                r.t0.response && r.t0.response.data.message
                                  ? r.t0.response.data.message
                                  : r.t0.message),
                              { type: O, payload: i })
                            );
                        case 12:
                        case 'end':
                          return r.stop();
                      }
                    var i;
                  },
                  r,
                  null,
                  [[0, 9]]
                );
              })
            );
            return function (e) {
              return r.apply(this, arguments);
            };
          })();
        };
      a(244);
      function ga(e) {
        var t = e.history,
          a = e.match,
          c = e.API,
          s = e.isMobile,
          i = Object(n.useState)(1),
          l = Object(qe.a)(i, 2),
          d = l[0],
          j = l[1],
          u = Object(n.useState)(0),
          b = Object(qe.a)(u, 2),
          h = b[0],
          m = b[1],
          p = Object(n.useState)(''),
          O = Object(qe.a)(p, 2),
          y = O[0],
          _ = O[1],
          N = Object(o.b)(),
          E = Object(o.c)(function (e) {
            return e.productDetails;
          }),
          S = E.loading,
          C = E.product,
          I = E.error,
          w = Object(o.c)(function (e) {
            return e.productCreateReview;
          }),
          P = w.success,
          k = w.error,
          A = Object(o.c)(function (e) {
            return e.userLogin;
          }).userInfo;
        Object(n.useEffect)(
          function () {
            window.scrollTo(0, 0);
          },
          [S]
        ),
          Object(n.useEffect)(
            function () {
              P && (N({ type: v }), alert('Review Submitted Successfully'), m(0), _('')),
                N(xa(c, a.params.category, a.params.id));
            },
            [N, a, P, c]
          ),
          console.log(C.reviews);
        return Object(r.jsxs)(r.Fragment, {
          children: [
            Object(r.jsx)('nav', {
              'aria-label': 'breadcrumb',
              children: Object(r.jsxs)('ol', {
                className: 'breadcrumb',
                children: [
                  Object(r.jsx)('li', {
                    className: 'breadcrumb-item',
                    children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                  }),
                  Object(r.jsx)('li', {
                    className: 'breadcrumb-item active',
                    children: C.category
                  }),
                  s
                    ? null
                    : Object(r.jsx)('li', {
                        className: 'breadcrumb-item active',
                        'aria-current': 'page',
                        children: C.name
                      })
                ]
              })
            }),
            Object(r.jsx)(Ht.a, {
              onClick: function () {
                t.goBack();
              },
              className: 'btn btn-light my-3',
              children: 'Go Back'
            }),
            S
              ? Object(r.jsx)(ma, {})
              : I
              ? Object(r.jsx)(aa, { varient: '#FC308B', children: I })
              : Object(r.jsxs)(r.Fragment, {
                  children: [
                    Object(r.jsx)(oa, { title: ''.concat(C.name) }),
                    Object(r.jsxs)(zt.a, {
                      children: [
                        Object(r.jsx)(Mt.a, {
                          md: 6,
                          children: Object(r.jsx)(ja.a, {
                            className: 'shadow',
                            src: C.image,
                            alt: C.name,
                            fluid: !0
                          })
                        }),
                        Object(r.jsx)(Mt.a, {
                          md: 3,
                          children: Object(r.jsxs)(ua.a, {
                            className: 'shadow',
                            varient: 'flush',
                            children: [
                              Object(r.jsx)(ua.a.Item, {
                                children: Object(r.jsx)('h3', {
                                  className: 'font-weight-bold text-primary',
                                  children: C.name
                                })
                              }),
                              Object(r.jsxs)(ua.a.Item, {
                                children: [
                                  Object(r.jsx)('strong', {
                                    children: Object(r.jsx)('h5', {
                                      className: 'font-weight-bold text-secondary',
                                      children: 'Price:'
                                    })
                                  }),
                                  Object(r.jsx)('span', { children: C.price })
                                ]
                              }),
                              Object(r.jsxs)(ua.a.Item, {
                                children: [
                                  Object(r.jsx)('strong', {
                                    children: Object(r.jsx)('h5', {
                                      className: 'font-weight-bold text-secondary',
                                      children: 'Description:'
                                    })
                                  }),
                                  Object(r.jsx)('p', { children: C.description })
                                ]
                              }),
                              Object(r.jsx)(ua.a.Item, {
                                children: Object(r.jsx)(Jt, {
                                  value: C.rating,
                                  text: ''.concat(C.numReviews, ' reviews')
                                })
                              })
                            ]
                          })
                        }),
                        Object(r.jsx)(Mt.a, {
                          md: 3,
                          children: Object(r.jsx)(Kt.a, {
                            children: Object(r.jsxs)(ua.a, {
                              varient: 'flush',
                              children: [
                                Object(r.jsx)(ua.a.Item, {
                                  children: Object(r.jsxs)(zt.a, {
                                    children: [
                                      Object(r.jsx)(Mt.a, { children: 'Price: ' }),
                                      Object(r.jsx)(Mt.a, {
                                        children: Object(r.jsxs)('strong', {
                                          children: ['$', C.price]
                                        })
                                      })
                                    ]
                                  })
                                }),
                                Object(r.jsx)(ua.a.Item, {
                                  children: Object(r.jsxs)(zt.a, {
                                    children: [
                                      Object(r.jsx)(Mt.a, { children: 'Status: ' }),
                                      Object(r.jsx)(Mt.a, {
                                        children: Object(r.jsxs)('strong', {
                                          children: [
                                            '$',
                                            C.countInStock ? 'In Stock' : 'Out Of Stock'
                                          ]
                                        })
                                      })
                                    ]
                                  })
                                }),
                                C.countInStock > 0 &&
                                  Object(r.jsx)(ua.a.Item, {
                                    children: Object(r.jsxs)(zt.a, {
                                      children: [
                                        Object(r.jsx)(Mt.a, { children: 'Quantity: ' }),
                                        Object(r.jsx)(Mt.a, {
                                          children: Object(r.jsx)(ba.a.Control, {
                                            as: 'select',
                                            value: d,
                                            onChange: function (e) {
                                              return j(e.target.value);
                                            },
                                            children: Object(R.a)(
                                              Array(C.countInStock).keys()
                                            ).map(function (e) {
                                              return Object(r.jsx)(
                                                'option',
                                                { value: e + 1, children: e + 1 },
                                                e + 1
                                              );
                                            })
                                          })
                                        })
                                      ]
                                    })
                                  }),
                                Object(r.jsx)(ua.a.Item, {
                                  children: Object(r.jsx)(Ht.a, {
                                    className:
                                      0 === C.countInStock
                                        ? 'btn-block p-3 disabled'
                                        : 'btn-block p-3',
                                    onClick: function () {
                                      t.push(
                                        '/cart/'
                                          .concat(a.params.category, '/')
                                          .concat(a.params.id, '?qty=')
                                          .concat(d)
                                      );
                                    },
                                    type: 'button',
                                    disabled: 0 === C.countInStock,
                                    children: 'ADD TO CART'
                                  })
                                })
                              ]
                            })
                          })
                        })
                      ]
                    }),
                    Object(r.jsx)(zt.a, {
                      children: Object(r.jsxs)(Mt.a, {
                        sm: 12,
                        md: 9,
                        children: [
                          Object(r.jsx)('h2', {
                            className: 'mt-5 font-weight-bolder  text-primary display-5',
                            style: s ? { fontSize: '2rem' } : { fontSize: '3rem' },
                            children: 'Product Reviews'
                          }),
                          Object(r.jsx)(Jt, { value: C.rating }),
                          C.reviews &&
                            0 === C.reviews.length &&
                            Object(r.jsx)(aa, { children: 'No Reviews' }),
                          Object(r.jsx)(ua.a, {
                            className: 'pt-3',
                            variant: 'flush',
                            children:
                              C.reviews &&
                              C.reviews.map(function (e) {
                                return Object(r.jsxs)(
                                  ua.a.Item,
                                  {
                                    children: [
                                      Object(r.jsxs)('div', {
                                        children: [
                                          Object(r.jsx)('h4', {
                                            children: Object(r.jsx)('strong', {
                                              children: e.name
                                            })
                                          }),
                                          ' ',
                                          Object(r.jsx)(Jt, { value: e.rating })
                                        ]
                                      }),
                                      Object(r.jsxs)('div', {
                                        children: [
                                          Object(r.jsxs)('strong', {
                                            children: [e.createdAt.substring(0, 10), ' ']
                                          }),
                                          Object(r.jsxs)('span', {
                                            className: 'pl-3',
                                            children: [' ', e.comment]
                                          })
                                        ]
                                      })
                                    ]
                                  },
                                  e._id
                                );
                              })
                          }),
                          Object(r.jsx)(ua.a, {
                            varient: 'flush',
                            children: Object(r.jsxs)(ua.a.Item, {
                              className: 'pt-2 mt-4',
                              children: [
                                Object(r.jsx)('h2', {
                                  className: 'font-weight-bold pb-2 text-primary',
                                  style: s ? { fontSize: '1.5rem' } : { fontSize: '2.3rem' },
                                  children: 'Write Your Review'
                                }),
                                k && Object(r.jsx)(aa, { varient: 'error', children: k }),
                                A
                                  ? Object(r.jsxs)(ba.a, {
                                      children: [
                                        Object(r.jsxs)(ba.a.Group, {
                                          controlId: 'rating',
                                          children: [
                                            Object(r.jsx)(ba.a.Label, {
                                              style: s ? { fontSize: '1.3rem' } : {},
                                              className: 'review_form_label  text-primary',
                                              children: 'Rating'
                                            }),
                                            Object(r.jsxs)(ba.a.Control, {
                                              as: 'select',
                                              value: h,
                                              onChange: function (e) {
                                                return m(e.target.value);
                                              },
                                              children: [
                                                Object(r.jsx)('option', {
                                                  children: 'Select Rating...'
                                                }),
                                                Object(r.jsx)('option', {
                                                  value: '1',
                                                  children: '1 - Very Bad'
                                                }),
                                                Object(r.jsx)('option', {
                                                  value: '2',
                                                  children: '2 - Not too Bad'
                                                }),
                                                Object(r.jsx)('option', {
                                                  value: '3',
                                                  children: '3 - Noice'
                                                }),
                                                Object(r.jsx)('option', {
                                                  value: '4',
                                                  children: '4 - Loved it'
                                                }),
                                                Object(r.jsx)('option', {
                                                  value: '5',
                                                  children: '5 - WoW Amazing'
                                                })
                                              ]
                                            })
                                          ]
                                        }),
                                        Object(r.jsxs)(ba.a.Group, {
                                          controlId: 'comment',
                                          children: [
                                            Object(r.jsx)(ba.a.Label, {
                                              style: s ? { fontSize: '1.3rem' } : {},
                                              className: 'review_form_label  text-primary',
                                              children: 'Your Comment'
                                            }),
                                            Object(r.jsx)(ba.a.Control, {
                                              as: 'textarea',
                                              row: '8',
                                              value: y,
                                              onChange: function (e) {
                                                return _(e.target.value);
                                              }
                                            })
                                          ]
                                        }),
                                        Object(r.jsx)(Ht.a, {
                                          className: 'review_submit',
                                          onClick: function (e) {
                                            e.preventDefault(),
                                              N(
                                                (function (e, t, a, r) {
                                                  return (function () {
                                                    var n = Object(St.a)(
                                                      Et.a.mark(function n(c, s) {
                                                        var i, o, l;
                                                        return Et.a.wrap(
                                                          function (n) {
                                                            for (;;)
                                                              switch ((n.prev = n.next)) {
                                                                case 0:
                                                                  return (
                                                                    (n.prev = 0),
                                                                    c({ type: x }),
                                                                    (i = s()),
                                                                    (o = i.userLogin.userInfo),
                                                                    (l = {
                                                                      'Content-Type':
                                                                        'application/json',
                                                                      headers: {
                                                                        Authorization:
                                                                          'Bearer '.concat(
                                                                            o.token
                                                                          )
                                                                      }
                                                                    }),
                                                                    (n.next = 6),
                                                                    It.a.post(
                                                                      ''
                                                                        .concat(e, '/products/')
                                                                        .concat(t, '/')
                                                                        .concat(a, '/reviews'),
                                                                      r,
                                                                      l
                                                                    )
                                                                  );
                                                                case 6:
                                                                  c({ type: g }), (n.next = 12);
                                                                  break;
                                                                case 9:
                                                                  (n.prev = 9),
                                                                    (n.t0 = n.catch(0)),
                                                                    c(
                                                                      ((d =
                                                                        n.t0.response &&
                                                                        n.t0.response.data
                                                                          .message
                                                                          ? n.t0.response.data
                                                                              .message
                                                                          : n.t0.message),
                                                                      { type: f, payload: d })
                                                                    );
                                                                case 12:
                                                                case 'end':
                                                                  return n.stop();
                                                              }
                                                            var d;
                                                          },
                                                          n,
                                                          null,
                                                          [[0, 9]]
                                                        );
                                                      })
                                                    );
                                                    return function (e, t) {
                                                      return n.apply(this, arguments);
                                                    };
                                                  })();
                                                })(c, a.params.category, a.params.id, {
                                                  rating: h,
                                                  comment: y
                                                })
                                              );
                                          },
                                          type: 'submit',
                                          variant: 'primary',
                                          children: 'Submit'
                                        })
                                      ]
                                    })
                                  : Object(r.jsxs)(aa, {
                                      children: [
                                        'Please ',
                                        Object(r.jsx)(We.b, {
                                          to: '/login',
                                          children: 'sign in'
                                        }),
                                        ' to write a review'
                                      ]
                                    })
                              ]
                            })
                          })
                        ]
                      })
                    })
                  ]
                })
          ]
        });
      }
      var fa = function (e, t) {
          return {
            type: D,
            payload: {
              product: e._id,
              name: e.name,
              image: e.image,
              price: e.price,
              category: e.category,
              countInStock: e.countInStock,
              qty: t
            }
          };
        },
        va = function (e, t, a, r) {
          return (function () {
            var n = Object(St.a)(
              Et.a.mark(function n(c, s) {
                var i, o;
                return Et.a.wrap(function (n) {
                  for (;;)
                    switch ((n.prev = n.next)) {
                      case 0:
                        return (
                          (n.next = 2),
                          It.a.get(''.concat(e, '/products/').concat(a, '/').concat(t))
                        );
                      case 2:
                        (i = n.sent),
                          (o = i.data),
                          c(fa(o, r)),
                          localStorage.setItem('cartItems', JSON.stringify(s().cart.cartItems));
                      case 6:
                      case 'end':
                        return n.stop();
                    }
                }, n);
              })
            );
            return function (e, t) {
              return n.apply(this, arguments);
            };
          })();
        },
        ya = function (e) {
          return function (t, a) {
            t(
              (function (e) {
                return { type: L, payload: e };
              })(e)
            ),
              localStorage.setItem('cartItems', JSON.stringify(a().cart.cartItems));
          };
        },
        _a = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: F, payload: e };
              })(e)
            ),
              localStorage.setItem('shippingAddress', JSON.stringify(e));
          };
        },
        Na = function (e) {
          return function (t) {
            t(
              (function (e) {
                return { type: B, payload: e };
              })(e)
            ),
              localStorage.setItem('paymentMethod', JSON.stringify(e));
          };
        },
        Ea = function () {
          return function (e) {
            e({ type: U }), localStorage.removeItem('cartItems');
          };
        },
        Sa =
          (a(246),
          function (e) {
            var t = e.match,
              a = e.location,
              c = e.history,
              s = e.isMobile,
              i = e.API,
              l = t.params.id,
              d = t.params.category,
              j = a.search ? Number(a.search.split('=')[1]) : 1,
              u = Object(o.b)(),
              b = Object(o.c)(function (e) {
                return e.userLogin;
              }).userInfo,
              h = Object(o.c)(function (e) {
                return e.cart;
              }).cartItems;
            Object(n.useEffect)(
              function () {
                b ? l && u(va(i, l, d, j)) : c.push('/login');
              },
              [u, l, j, d, b, c, i]
            );
            return Object(r.jsxs)(r.Fragment, {
              children: [
                Object(r.jsx)(oa, { title: 'Shopping Cart' }),
                Object(r.jsx)('nav', {
                  'aria-label': 'breadcrumb',
                  children: Object(r.jsxs)('ol', {
                    className: 'breadcrumb',
                    children: [
                      Object(r.jsx)('li', {
                        className: 'breadcrumb-item',
                        children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                      }),
                      Object(r.jsx)('li', {
                        className: 'breadcrumb-item active',
                        'aria-current': 'page',
                        children: 'CART'
                      })
                    ]
                  })
                }),
                Object(r.jsx)(Ht.a, {
                  onClick: function () {
                    c.goBack();
                  },
                  className: 'btn btn-light mt-2',
                  children: 'Go Back'
                }),
                Object(r.jsxs)(zt.a, {
                  className: 'mt-4',
                  children: [
                    Object(r.jsxs)(Mt.a, {
                      md: 8,
                      children: [
                        Object(r.jsxs)('h1', {
                          className: 'cart__name ',
                          children: [
                            'YOUR CART (',
                            h && h.length,
                            ')',
                            Object(r.jsx)('span', {
                              className: 'cart__name__span',
                              children: ' ITEM'
                            })
                          ]
                        }),
                        Object(r.jsx)('br', {}),
                        0 === h.length
                          ? Object(r.jsxs)(aa, {
                              varient: 'info',
                              children: [
                                Object(r.jsx)('span', {
                                  className: 'cart__empty',
                                  children: 'Your cart is empty '
                                }),
                                Object(r.jsx)(We.b, { to: '/', children: 'Keep Shopping' })
                              ]
                            })
                          : Object(r.jsxs)(ua.a, {
                              varient: 'flush',
                              className: 'shadow-lg',
                              children: [
                                s
                                  ? null
                                  : Object(r.jsx)(ua.a.Item, {
                                      className: 'cart__left__heading',
                                      children: Object(r.jsxs)(zt.a, {
                                        children: [
                                          Object(r.jsx)(Mt.a, {
                                            sm: 3,
                                            children: Object(r.jsx)('h3', { children: 'Image' })
                                          }),
                                          Object(r.jsx)(Mt.a, {
                                            sm: 3,
                                            children: Object(r.jsx)('h3', { children: 'Name' })
                                          }),
                                          Object(r.jsx)(Mt.a, {
                                            sm: 2,
                                            children: Object(r.jsx)('h3', { children: 'Price' })
                                          }),
                                          Object(r.jsx)(Mt.a, {
                                            sm: 2,
                                            children: Object(r.jsx)('h3', {
                                              children: 'Quantity'
                                            })
                                          })
                                        ]
                                      })
                                    }),
                                h.map(function (e) {
                                  return Object(r.jsx)(
                                    ua.a.Item,
                                    {
                                      children: Object(r.jsxs)(zt.a, {
                                        children: [
                                          Object(r.jsx)(Mt.a, {
                                            sm: 3,
                                            children: Object(r.jsx)(ja.a, {
                                              className: 'cart__left__item__image',
                                              width: s ? '360' : '200',
                                              src: e.image,
                                              alt: e.name,
                                              fluid: !0,
                                              rounded: !0
                                            })
                                          }),
                                          Object(r.jsx)(Mt.a, {
                                            className: 'mt-4',
                                            sm: 3,
                                            children: Object(r.jsx)(We.b, {
                                              className: 'cart__left__item__name',
                                              to: '/products/'
                                                .concat(e.category, '/')
                                                .concat(e.product),
                                              children: e.name
                                            })
                                          }),
                                          Object(r.jsxs)(Mt.a, {
                                            sm: 2,
                                            className: 'cart__left__item__price',
                                            children: ['$', e.price]
                                          }),
                                          Object(r.jsx)(Mt.a, {
                                            className: s ? 'mt-3' : '',
                                            sm: 2,
                                            children: Object(r.jsx)(ba.a.Control, {
                                              as: 'select',
                                              style: { border: 'none', outline: 'none' },
                                              value: e.qty,
                                              onChange: function (t) {
                                                return u(
                                                  va(
                                                    e.product,
                                                    e.category,
                                                    Number(t.target.value)
                                                  )
                                                );
                                              },
                                              children: Object(R.a)(
                                                Array(e.countInStock).keys()
                                              ).map(function (e) {
                                                return Object(r.jsx)(
                                                  'option',
                                                  { value: e + 1, children: e + 1 },
                                                  e + 1
                                                );
                                              })
                                            })
                                          }),
                                          Object(r.jsx)(Mt.a, {
                                            className: s ? 'mt-3 mb-2' : '',
                                            sm: 2,
                                            children: Object(r.jsx)(Ht.a, {
                                              className: 'cart__left__item__remove',
                                              type: 'button',
                                              variant: 'light',
                                              onClick: function () {
                                                return (function (e) {
                                                  console.log(e), u(ya(e));
                                                })(e.product);
                                              },
                                              children: Object(r.jsx)('i', {
                                                className: 'fas fa-trash'
                                              })
                                            })
                                          })
                                        ]
                                      })
                                    },
                                    e.product
                                  );
                                })
                              ]
                            })
                      ]
                    }),
                    Object(r.jsx)(Mt.a, {
                      md: 4,
                      children: Object(r.jsx)(Kt.a, {
                        children: Object(r.jsxs)(ua.a, {
                          children: [
                            Object(r.jsx)(ua.a.Item, {
                              className: s ? 'pt-4' : 'pb-4',
                              children: Object(r.jsx)(Ht.a, {
                                className: 'btn-block p-2 cart__right__checkout',
                                disabled: 0 === h.length,
                                onClick: function () {
                                  c.push('/login?redirect=shipping'), console.log('CHECKOUT');
                                },
                                children: 'PROCEED TO PAY'
                              })
                            }),
                            Object(r.jsx)(ua.a.Item, {
                              children: Object(r.jsx)('h4', {
                                className: 'cart__right__order__heading',
                                children: Object(r.jsx)('strong', { children: 'ORDER SUMMARY' })
                              })
                            }),
                            Object(r.jsx)(ua.a.Item, {
                              children: Object(r.jsxs)(zt.a, {
                                children: [
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsx)('h4', {
                                      className: 'cart__right__subtotal',
                                      children: 'Subtotal:'
                                    })
                                  }),
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsxs)('h5', {
                                      className: 'cart__right__subtotal--value',
                                      children: [
                                        '(',
                                        h.reduce(function (e, t) {
                                          return e + t.qty;
                                        }, 0),
                                        ')'
                                      ]
                                    })
                                  })
                                ]
                              })
                            }),
                            Object(r.jsx)(ua.a.Item, {
                              children: Object(r.jsxs)(zt.a, {
                                children: [
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsx)('h4', {
                                      className: 'cart__right__price',
                                      children: 'Price:'
                                    })
                                  }),
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsxs)('h5', {
                                      className: 'cart__right__price--value',
                                      children: [
                                        '$',
                                        h
                                          .reduce(function (e, t) {
                                            return e + t.qty * t.price;
                                          }, 0)
                                          .toFixed(2)
                                      ]
                                    })
                                  })
                                ]
                              })
                            }),
                            Object(r.jsx)(ua.a.Item, {
                              children: Object(r.jsxs)(zt.a, {
                                children: [
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsx)('h4', {
                                      className: 'cart__right__delivery',
                                      children: 'Delivery:'
                                    })
                                  }),
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsx)('h5', {
                                      className: 'cart__right__delivery--value',
                                      children: 'Free'
                                    })
                                  })
                                ]
                              })
                            }),
                            Object(r.jsx)(ua.a.Item, {
                              children: Object(r.jsxs)(zt.a, {
                                children: [
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsx)('h4', {
                                      className: 'cart__right__total__price',
                                      children: 'Total:'
                                    })
                                  }),
                                  Object(r.jsx)(Mt.a, {
                                    children: Object(r.jsxs)('h5', {
                                      className: 'cart__right__total__price--value',
                                      children: [
                                        '$',
                                        h
                                          .reduce(function (e, t) {
                                            return e + t.qty * t.price;
                                          }, 0)
                                          .toFixed(2)
                                      ]
                                    })
                                  })
                                ]
                              })
                            })
                          ]
                        })
                      })
                    })
                  ]
                })
              ]
            });
          }),
        Ca = a(317),
        Ia = a(180),
        wa = a(347),
        Pa = a(348),
        ka = a(318),
        Aa = a(319),
        Ra = a(346),
        Ta = a(74),
        Da = a.n(Ta),
        La = a(59),
        Ua = a.n(La),
        Fa = a(91),
        Ba = a.n(Fa),
        za = a(92),
        Ma = a.n(za),
        Wa = a(90),
        Ha = a.n(Wa),
        qa = Object(ft.a)(function (e) {
          return {
            root: { background: '#fff' },
            image: { width: '100%', marginTop: '16%' },
            image2: { marginTop: '40vh', width: '100%' },
            display: { display: 'none' },
            form: {
              padding: e.spacing(2.6),
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center'
            },
            paper: Object(gt.a)(
              { width: '80%', margin: 'auto', marginTop: '3rem', paddingTop: e.spacing(2.4) },
              e.breakpoints.down('sm'),
              { width: '100%' }
            ),
            paperUserEdit: Object(gt.a)(
              { width: '60%', margin: 'auto', marginTop: '1.2rem', paddingTop: e.spacing(2.4) },
              e.breakpoints.down('sm'),
              { width: '100%' }
            ),
            paperProductEdit: Object(gt.a)(
              {
                width: '100%',
                margin: 'auto',
                marginTop: '1rem',
                padding: '3.6rem',
                paddingTop: e.spacing(2.4)
              },
              e.breakpoints.down('sm'),
              { width: '100%', padding: '1.6rem' }
            ),
            avatar: {
              width: '3.1rem',
              height: '3.1rem',
              marginLeft: '50%',
              marginBottom: '0.6rem',
              transform: 'translateX(-50%)',
              backgroundImage: 'linear-gradient(45deg, #2196f3,  70%, #045694 90%)'
            },
            heading: Object(gt.a)(
              {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                marginBottom: '0.4rem',
                marginTop: '0.6rem',
                color: '#1853F3',
                fontSize: '2rem'
              },
              e.breakpoints.down('xs'),
              { fontSize: '1.4rem' }
            ),
            input: Object(gt.a)(
              {
                '& label': {
                  color: e.palette.info.main,
                  fontSize: '1.2rem',
                  fontWeight: '550'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#2196f3 ', paddingBottom: '2.8rem' }
                },
                paddingBottom: e.spacing(2.8),
                width: '80%'
              },
              e.breakpoints.down('xs'),
              { width: '100%' }
            ),
            inputProduct: Object(gt.a)(
              {
                '& label': {
                  color: e.palette.info.main,
                  fontSize: '1.2rem',
                  fontWeight: '550'
                },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': { borderColor: '#2196f3 ', paddingBottom: '2.8rem' }
                },
                paddingBottom: e.spacing(3.8),
                width: '100%'
              },
              e.breakpoints.down('xs'),
              { width: '100%' }
            ),
            button: Object(gt.a)(
              {
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                width: '80%',
                marginTop: '0.8rem',
                marginBottom: '0rem'
              },
              e.breakpoints.down('xs'),
              { width: '100%' }
            ),
            buttonProduct: Object(gt.a)(
              {
                background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
                width: '50%',
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '1rem'
              },
              e.breakpoints.down('xs'),
              { width: '76%', marginBottom: '3rem' }
            ),
            uploadButton: {
              marginTop: '0.8rem',
              marginBottom: '0.4rem',
              marginRight: '0rem',
              width: '100%',
              '&:hover': { cursor: 'pointer' }
            },
            icon: { width: '1.2rem' },
            register: Object(gt.a)(
              { paddingTop: e.spacing(2.8), marginLeft: '10rem' },
              e.breakpoints.down('xs'),
              { marginLeft: 'auto' }
            ),
            login: Object(gt.a)(
              { paddingTop: e.spacing(2), marginLeft: '10rem' },
              e.breakpoints.down('xs'),
              { marginLeft: 'auto' }
            ),
            selectLabel: { fontSize: '1.4rem', textAlign: 'center', color: '#1853F3' },
            back: {
              marginLeft: '0.6rem',
              width: '2rem',
              height: '2rem',
              marginBottom: '-1rem',
              backgroundImage: 'linear-gradient(45deg, #2196f3,  70%, #045694 90%)',
              borderRadius: '2rem',
              padding: '0.3rem 0 0.3rem 0.5rem',
              color: 'white',
              cursor: 'pointer'
            }
          };
        }),
        Ga = a(315),
        Ya = a(316),
        Qa = a(343),
        Va = a(6),
        $a = a(253),
        Ka = Object(Va.a)({
          alternativeLabel: { top: 22 },
          active: {
            '& $line': { backgroundImage: 'linear-gradient(45deg, #2196f3,  30%, #045694 90%)' }
          },
          completed: {
            '& $line': { backgroundImage: 'linear-gradient(45deg, #045694,  30%, #2196f3 90%)' }
          },
          line: { height: 3, border: 0, backgroundColor: '#eaeaf0', borderRadius: 1 }
        })($a.a),
        Ja = a(4),
        Za = a(313),
        Xa = a(314),
        er = Object(ft.a)(function (e) {
          return {
            root: Object(gt.a)(
              {
                backgroundColor: '#ccc',
                zIndex: 1,
                color: '#fff',
                width: '3.2rem',
                height: '3.2rem',
                display: 'flex',
                borderRadius: '50%',
                justifyContent: 'center',
                alignItems: 'center'
              },
              e.breakpoints.down('xs'),
              { width: '2.4rem', height: '2.4rem' }
            ),
            active: {
              backgroundImage: 'linear-gradient(45deg, #045694,  30%, #2196f3 90%)',
              boxShadow: '0 8px 22px 0 rgba(0,0,0,.25)'
            },
            completed: { backgroundImage: 'linear-gradient(45deg, #045694,  30%, #2196f3 90%)' }
          };
        });
      function tr(e) {
        var t,
          a = er(),
          n = e.active,
          c = e.completed,
          s = {
            1: Object(r.jsx)(Dt.a, { fontSize: 'small' }),
            2: Object(r.jsx)(Za.a, { fontSize: 'small' }),
            3: Object(r.jsx)(Xa.a, { fontSize: 'small' }),
            4: Object(r.jsx)(Lt.a, { fontSize: 'small' })
          };
        return Object(r.jsx)('div', {
          className: Object(Ja.a)(
            a.root,
            ((t = {}), Object(gt.a)(t, a.active, n), Object(gt.a)(t, a.completed, c), t)
          ),
          children: s[String(e.icon)]
        });
      }
      var ar = Object(ft.a)(function () {
        return { root: { display: 'flex', justifyContent: 'center' } };
      });
      function rr(e) {
        var t = e.step,
          a = ar(),
          n = ['Sign In', 'Shipping', 'Payment', 'Place Order'];
        return Object(r.jsx)('div', {
          children: Object(r.jsx)(Ga.a, {
            className: a.root,
            activeStep: t,
            alternativeLabel: !0,
            connector: Object(r.jsx)(Ka, {}),
            children: n.map(function (e) {
              return Object(r.jsx)(
                Ya.a,
                { children: Object(r.jsx)(Qa.a, { StepIconComponent: tr, children: e }) },
                e
              );
            })
          })
        });
      }
      var nr = function (e) {
          var t = e.isMobile,
            a = e.history,
            c = e.location,
            s = e.API,
            i = qa(),
            l = Object(n.useState)(''),
            d = Object(qe.a)(l, 2),
            j = d[0],
            u = d[1],
            b = Object(n.useState)(''),
            h = Object(qe.a)(b, 2),
            m = h[0],
            p = h[1],
            O = Object(n.useState)(!1),
            x = Object(qe.a)(O, 2),
            g = x[0],
            f = x[1],
            v = Object(o.b)(),
            y = Object(o.c)(function (e) {
              return e.userLogin;
            }),
            _ = y.loading,
            N = y.error,
            E = y.userInfo,
            S = c.search ? c.search.split('=')[1] : '/';
          Object(n.useEffect)(
            function () {
              E && a.push(S);
            },
            [E, a, S]
          );
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'eShop Login' }),
              'shipping' === S ? Object(r.jsx)(rr, { step: 0 }) : null,
              Object(r.jsxs)(Ca.a, {
                container: !0,
                component: 'main',
                className: i.root,
                children: [
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    xs: !1,
                    sm: !1,
                    md: 3,
                    children: Object(r.jsx)('img', {
                      src: '/assets/images/auth/add_to_cart.svg',
                      className: t ? i.display : i.image,
                      alt: 'Login'
                    })
                  }),
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    xs: 12,
                    sm: 12,
                    md: 6,
                    component: Ia.a,
                    elevation: 0,
                    children: Object(r.jsxs)(Ia.a, {
                      elevation: 14,
                      className: i.paper,
                      children: [
                        Object(r.jsx)(Ra.a, {
                          className: i.avatar,
                          children: Object(r.jsx)(Ua.a, {})
                        }),
                        Object(r.jsx)(Qe.a, {
                          className: i.heading,
                          component: 'h1',
                          variant: 'h5',
                          children: 'Sign in'
                        }),
                        _ && Object(r.jsx)(ea, {}),
                        Object(r.jsxs)('form', {
                          className: i.form,
                          children: [
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: i.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-email',
                                  children: 'Email'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-email',
                                  placeholder: 'Email Address',
                                  required: !0,
                                  type: 'text',
                                  value: j,
                                  onChange: function (e) {
                                    return u(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Da.a, { className: i.icon })
                                  }),
                                  labelWidth: 54
                                })
                              ]
                            }),
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: i.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-password',
                                  children: 'Password'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-password',
                                  placeholder: 'Password',
                                  required: !0,
                                  type: g ? 'text' : 'password',
                                  value: m,
                                  onChange: function (e) {
                                    return p(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Ha.a, { className: i.icon })
                                  }),
                                  endAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'end',
                                    children: Object(r.jsx)(rt.a, {
                                      'aria-label': 'toggle password visibility',
                                      onClick: function () {
                                        return f(!g);
                                      },
                                      onMouseDown: function (e) {
                                        return e.preventDefault();
                                      },
                                      edge: 'end',
                                      children: g
                                        ? Object(r.jsx)(Ba.a, {})
                                        : Object(r.jsx)(Ma.a, {})
                                    })
                                  }),
                                  labelWidth: 90
                                })
                              ]
                            }),
                            N && Object(r.jsx)(aa, { varient: 'error', children: N }),
                            Object(r.jsx)(Ke.a, {
                              className: i.button,
                              onClick: function (e) {
                                e.preventDefault(),
                                  v(
                                    (function (e, t, a) {
                                      return (function () {
                                        var r = Object(St.a)(
                                          Et.a.mark(function r(n) {
                                            var c, s, i;
                                            return Et.a.wrap(
                                              function (r) {
                                                for (;;)
                                                  switch ((r.prev = r.next)) {
                                                    case 0:
                                                      return (
                                                        (r.prev = 0),
                                                        n({ type: z }),
                                                        (c = {
                                                          'Content-Type': 'application/json'
                                                        }),
                                                        (r.next = 5),
                                                        It.a.post(
                                                          ''.concat(e, '/user/login'),
                                                          { email: t, password: a },
                                                          c
                                                        )
                                                      );
                                                    case 5:
                                                      (s = r.sent),
                                                        (i = s.data),
                                                        n(wt(i)),
                                                        localStorage.setItem(
                                                          'userInfo',
                                                          JSON.stringify(i)
                                                        ),
                                                        (r.next = 14);
                                                      break;
                                                    case 11:
                                                      (r.prev = 11),
                                                        (r.t0 = r.catch(0)),
                                                        n(
                                                          ((o =
                                                            r.t0.response &&
                                                            r.t0.response.data.message
                                                              ? r.t0.response.data.message
                                                              : r.t0.message),
                                                          { type: W, payload: o })
                                                        );
                                                    case 14:
                                                    case 'end':
                                                      return r.stop();
                                                  }
                                                var o;
                                              },
                                              r,
                                              null,
                                              [[0, 11]]
                                            );
                                          })
                                        );
                                        return function (e) {
                                          return r.apply(this, arguments);
                                        };
                                      })();
                                    })(s, j, m)
                                  );
                              },
                              size: 'large',
                              variant: 'contained',
                              color: 'primary',
                              children: 'Sign In'
                            }),
                            Object(r.jsx)(Ca.a, {
                              container: !0,
                              children: Object(r.jsx)(Ca.a, {
                                item: !0,
                                children: Object(r.jsxs)(Qe.a, {
                                  component: 'h5',
                                  className: i.register,
                                  children: [
                                    "Haven't Registered yet? \xa0",
                                    Object(r.jsx)(We.b, {
                                      to: S ? '/register?redirect='.concat(S) : '/register',
                                      variant: 'body2',
                                      children: 'Register'
                                    })
                                  ]
                                })
                              })
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    xs: !1,
                    sm: !1,
                    md: 3,
                    children: Object(r.jsx)('img', {
                      src: '/assets/images/auth/payments.svg',
                      className: t ? i.display : i.image2,
                      alt: 'Login'
                    })
                  })
                ]
              })
            ]
          });
        },
        cr = function (e) {
          var t = e.isMobile,
            a = e.history,
            c = e.location,
            s = e.API,
            i = qa(),
            l = Object(n.useState)(''),
            d = Object(qe.a)(l, 2),
            j = d[0],
            u = d[1],
            b = Object(n.useState)(''),
            h = Object(qe.a)(b, 2),
            m = h[0],
            p = h[1],
            O = Object(n.useState)(''),
            x = Object(qe.a)(O, 2),
            g = x[0],
            f = x[1],
            v = Object(n.useState)(''),
            y = Object(qe.a)(v, 2),
            _ = y[0],
            N = y[1],
            E = Object(n.useState)(!1),
            S = Object(qe.a)(E, 2),
            C = S[0],
            I = S[1],
            w = Object(n.useState)(!1),
            P = Object(qe.a)(w, 2),
            k = P[0],
            A = P[1],
            R = Object(n.useState)(null),
            T = Object(qe.a)(R, 2),
            D = T[0],
            L = T[1],
            U = Object(o.b)(),
            F = Object(o.c)(function (e) {
              return e.userRegister;
            }),
            B = F.loading,
            z = F.error,
            M = F.userInfo,
            W = c.search ? c.search.split('=')[1] : '/';
          Object(n.useEffect)(
            function () {
              M && a.push(W);
            },
            [M, a, W]
          );
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'eShop Register' }),
              Object(r.jsxs)(Ca.a, {
                container: !0,
                component: 'main',
                className: i.root,
                children: [
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    xs: !1,
                    sm: !1,
                    md: 3,
                    children: Object(r.jsx)('img', {
                      src: '/assets/images/auth/shopping_app.svg',
                      className: t ? i.display : i.image,
                      alt: 'Login'
                    })
                  }),
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    xs: 12,
                    sm: 12,
                    md: 6,
                    component: Ia.a,
                    elevation: 0,
                    children: Object(r.jsxs)(Ia.a, {
                      elevation: 14,
                      className: i.paper,
                      children: [
                        Object(r.jsx)(Ra.a, {
                          className: i.avatar,
                          children: Object(r.jsx)(Ua.a, {})
                        }),
                        Object(r.jsx)(Qe.a, {
                          className: i.heading,
                          component: 'h1',
                          variant: 'h5',
                          children: 'Sign Up'
                        }),
                        B && Object(r.jsx)(ea, {}),
                        Object(r.jsxs)('form', {
                          className: i.form,
                          children: [
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: i.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-name',
                                  children: 'Name'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-name',
                                  placeholder: 'Your Name',
                                  required: !0,
                                  type: 'text',
                                  value: g,
                                  onChange: function (e) {
                                    return f(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Ua.a, { className: i.icon })
                                  }),
                                  labelWidth: 55
                                })
                              ]
                            }),
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: i.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-email',
                                  children: 'Email'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-email',
                                  placeholder: 'Email Address',
                                  required: !0,
                                  type: 'text',
                                  value: j,
                                  onChange: function (e) {
                                    return u(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Da.a, { className: i.icon })
                                  }),
                                  labelWidth: 54
                                })
                              ]
                            }),
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: i.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-password',
                                  children: 'Password'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-password',
                                  placeholder: 'Password',
                                  required: !0,
                                  type: C ? 'text' : 'password',
                                  value: m,
                                  onChange: function (e) {
                                    return p(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Ha.a, { className: i.icon })
                                  }),
                                  endAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'end',
                                    children: Object(r.jsx)(rt.a, {
                                      'aria-label': 'toggle password visibility',
                                      onClick: function () {
                                        return I(!C);
                                      },
                                      onMouseDown: function (e) {
                                        return e.preventDefault();
                                      },
                                      edge: 'end',
                                      children: C
                                        ? Object(r.jsx)(Ba.a, {})
                                        : Object(r.jsx)(Ma.a, {})
                                    })
                                  }),
                                  labelWidth: 90
                                })
                              ]
                            }),
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: i.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-confirmPassword',
                                  children: 'Confirm Password'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-confirmPassword',
                                  placeholder: 'Confirm Password',
                                  required: !0,
                                  type: k ? 'text' : 'password',
                                  value: _,
                                  onChange: function (e) {
                                    return N(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Ha.a, { className: i.icon })
                                  }),
                                  endAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'end',
                                    children: Object(r.jsx)(rt.a, {
                                      'aria-label': 'toggle password visibility',
                                      onClick: function () {
                                        return A(!k);
                                      },
                                      onMouseDown: function (e) {
                                        return e.preventDefault();
                                      },
                                      edge: 'end',
                                      children: k
                                        ? Object(r.jsx)(Ba.a, {})
                                        : Object(r.jsx)(Ma.a, {})
                                    })
                                  }),
                                  labelWidth: 168
                                })
                              ]
                            }),
                            z && Object(r.jsx)(aa, { varient: 'error', children: z }),
                            D && Object(r.jsx)(aa, { varient: 'error', children: D }),
                            Object(r.jsx)(Ke.a, {
                              className: i.button,
                              onClick: function (e) {
                                e.preventDefault(),
                                  m === _
                                    ? U(
                                        (function (e, t, a, r) {
                                          return (function () {
                                            var n = Object(St.a)(
                                              Et.a.mark(function n(c) {
                                                var s, i, o;
                                                return Et.a.wrap(
                                                  function (n) {
                                                    for (;;)
                                                      switch ((n.prev = n.next)) {
                                                        case 0:
                                                          return (
                                                            (n.prev = 0),
                                                            c({ type: q }),
                                                            (s = {
                                                              'Content-Type': 'application/json'
                                                            }),
                                                            (n.next = 5),
                                                            It.a.post(
                                                              ''.concat(e, '/user/register'),
                                                              {
                                                                name: t,
                                                                email: a,
                                                                password: r
                                                              },
                                                              s
                                                            )
                                                          );
                                                        case 5:
                                                          (i = n.sent),
                                                            (o = i.data),
                                                            c({ type: G, payload: o }),
                                                            c(wt(o)),
                                                            localStorage.setItem(
                                                              'userInfo',
                                                              JSON.stringify(o)
                                                            ),
                                                            (n.next = 15);
                                                          break;
                                                        case 12:
                                                          (n.prev = 12),
                                                            (n.t0 = n.catch(0)),
                                                            c(
                                                              ((l =
                                                                n.t0.response &&
                                                                n.t0.response.data.message
                                                                  ? n.t0.response.data.message
                                                                  : n.t0.message),
                                                              { type: Y, payload: l })
                                                            );
                                                        case 15:
                                                        case 'end':
                                                          return n.stop();
                                                      }
                                                    var l;
                                                  },
                                                  n,
                                                  null,
                                                  [[0, 12]]
                                                );
                                              })
                                            );
                                            return function (e) {
                                              return n.apply(this, arguments);
                                            };
                                          })();
                                        })(s, g, j, m)
                                      )
                                    : L('Password does not match');
                              },
                              size: 'large',
                              variant: 'contained',
                              color: 'primary',
                              children: 'Register'
                            }),
                            Object(r.jsx)(Ca.a, {
                              container: !0,
                              children: Object(r.jsx)(Ca.a, {
                                item: !0,
                                children: Object(r.jsxs)(Qe.a, {
                                  component: 'h5',
                                  className: i.login,
                                  children: [
                                    'Already Registered? \xa0',
                                    Object(r.jsx)(We.b, {
                                      to: W ? '/login?redirect='.concat(W) : '/login',
                                      variant: 'body2',
                                      children: 'Login'
                                    })
                                  ]
                                })
                              })
                            })
                          ]
                        })
                      ]
                    })
                  }),
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    xs: !1,
                    sm: !1,
                    md: 3,
                    children: Object(r.jsx)('img', {
                      src: '/assets/images/auth/shopping.svg',
                      className: t ? i.display : i.image2,
                      alt: 'Login'
                    })
                  })
                ]
              })
            ]
          });
        },
        sr = a(325),
        ir = a(327),
        or = a(324),
        lr = a(326),
        dr = a(323),
        jr = a(157),
        ur = a.n(jr),
        br = a(342),
        hr = function (e) {
          return { type: pe, payload: e };
        },
        mr = function (e, t, a) {
          return (function () {
            var r = Object(St.a)(
              Et.a.mark(function r(n, c) {
                var s, i, o, l, d;
                return Et.a.wrap(
                  function (r) {
                    for (;;)
                      switch ((r.prev = r.next)) {
                        case 0:
                          return (
                            (r.prev = 0),
                            n({ type: _e }),
                            (s = c()),
                            (i = s.userLogin.userInfo),
                            (o = {
                              'Content-Type': 'application/json',
                              headers: { Authorization: 'Bearer '.concat(i.token) }
                            }),
                            (r.next = 6),
                            It.a.put(''.concat(e, '/orders/').concat(t, '/payment'), a, o)
                          );
                        case 6:
                          (l = r.sent),
                            (d = l.data),
                            n({ type: Ne, payload: d }),
                            (r.next = 14);
                          break;
                        case 11:
                          (r.prev = 11),
                            (r.t0 = r.catch(0)),
                            r.t0.response && r.t0.response.data.message
                              ? r.t0.response.data.message
                              : r.t0.message;
                        case 14:
                        case 'end':
                          return r.stop();
                      }
                  },
                  r,
                  null,
                  [[0, 11]]
                );
              })
            );
            return function (e, t) {
              return r.apply(this, arguments);
            };
          })();
        },
        pr = a(352),
        Or = a(351),
        xr = a(322),
        gr = Object(ft.a)(function (e) {
          return {
            form: {
              '& .MuiTextField-root': { margin: e.spacing(1.4), width: '76%' },
              marginTop: '1.4rem'
            },
            heading: { color: '#2071E3', fontWeight: '550' },
            button: {
              background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
              margin: e.spacing(1.4),
              width: '76%'
            },
            table: { borderRadius: '.4rem', marginTop: '1.4rem' },
            details: {
              boxShadow:
                'rgba(0, 0, 0, 0.2) 0px 2px 1px -1px, rgba(0, 0, 0, 0.14) 0px 1px 1px 0px, rgba(0, 0, 0, 0.12) 0px 1px 3px 0px',
              '&:hover': {
                border: 'none',
                backgroundColor: '#4EABDE',
                color: e.palette.common.white
              }
            }
          };
        }),
        fr = Object(Va.a)({
          root: {
            '& label': { color: 'green' },
            '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: 'green' } }
          }
        })(Or.a),
        vr = Object(Va.a)(function (e) {
          return Object(pr.a)({
            head: { background: '#2196F3', color: e.palette.common.white },
            body: { fontSize: 14 }
          });
        })(xr.a),
        yr = Object(Va.a)(function (e) {
          return Object(pr.a)({
            root: {
              '&:nth-of-type(odd)': {
                backgroundColor: e.palette.action.selected,
                '&:hover': { backgroundColor: e.palette.action.hover }
              }
            }
          });
        })(dr.a),
        _r = function (e) {
          var t = e.history,
            a = e.API,
            s = gr(),
            i = Object(n.useState)(''),
            l = Object(qe.a)(i, 2),
            d = l[0],
            j = l[1],
            u = Object(n.useState)(''),
            b = Object(qe.a)(u, 2),
            h = b[0],
            m = b[1],
            p = Object(n.useState)(''),
            O = Object(qe.a)(p, 2),
            x = O[0],
            g = O[1],
            f = Object(n.useState)(''),
            v = Object(qe.a)(f, 2),
            y = v[0],
            _ = v[1],
            N = Object(n.useState)(null),
            E = Object(qe.a)(N, 2),
            S = E[0],
            C = E[1],
            I = c.a.useState(0),
            w = Object(qe.a)(I, 2),
            P = w[0],
            k = w[1],
            A = c.a.useState(5),
            R = Object(qe.a)(A, 2),
            T = R[0],
            D = R[1],
            L = Object(o.b)(),
            U = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            F = Object(o.c)(function (e) {
              return e.userDetails;
            }),
            B = F.loading,
            z = F.user,
            M = F.error,
            W = Object(o.c)(function (e) {
              return e.userUpdateProfile;
            }).success,
            H = Object(o.c)(function (e) {
              return e.myOrders;
            }),
            q = H.loading,
            G = H.error,
            Y = H.orders;
          Object(n.useEffect)(
            function () {
              U
                ? z
                  ? (g(z.name), j(z.email))
                  : 'jwt expired' === M &&
                    (alert('Logged Out!! Again log in to view profile'), L(At()))
                : t.push('/login');
            },
            [L, U, z, t, M]
          ),
            Object(n.useEffect)(
              function () {
                L(Rt(a, 'profile')),
                  L(
                    (function (e) {
                      return (function () {
                        var t = Object(St.a)(
                          Et.a.mark(function t(a, r) {
                            var n, c, s, i, o;
                            return Et.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        a({ type: Ce }),
                                        (n = r()),
                                        (c = n.userLogin.userInfo),
                                        (s = {
                                          headers: { Authorization: 'Bearer '.concat(c.token) }
                                        }),
                                        (t.next = 6),
                                        It.a.get(''.concat(e, '/orders/myorders'), s)
                                      );
                                    case 6:
                                      (i = t.sent),
                                        (o = i.data),
                                        a({ type: Ie, payload: o }),
                                        (t.next = 14);
                                      break;
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(0)),
                                        t.t0.response && t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message;
                                    case 14:
                                    case 'end':
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e, a) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(a)
                  );
              },
              [L, a]
            );
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'User profile' }),
              Object(r.jsx)('nav', {
                'aria-label': 'breadcrumb',
                children: Object(r.jsxs)('ol', {
                  className: 'breadcrumb',
                  children: [
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'PROFILE'
                    })
                  ]
                })
              }),
              Object(r.jsx)(Ht.a, {
                onClick: function () {
                  t.goBack();
                },
                className: 'btn btn-light mt-2 mb-4',
                children: 'Go Back'
              }),
              Object(r.jsxs)(Ca.a, {
                container: !0,
                spacing: 2,
                children: [
                  Object(r.jsxs)(Ca.a, {
                    item: !0,
                    sm: 4,
                    xs: 12,
                    children: [
                      Object(r.jsx)('h2', { className: s.heading, children: 'PROFILE' }),
                      B && Object(r.jsx)(ea, {}),
                      Object(r.jsxs)('form', {
                        className: s.form,
                        children: [
                          Object(r.jsx)(fr, {
                            id: 'outlined-name',
                            label: 'Name',
                            value: x,
                            multiline: !0,
                            placeholder: 'Name',
                            onChange: function (e) {
                              return g(e.target.value);
                            },
                            variant: 'outlined',
                            InputLabelProps: { shrink: !0 }
                          }),
                          Object(r.jsx)(fr, {
                            id: 'outlined-email',
                            label: 'Email',
                            value: d,
                            multiline: !0,
                            placeholder: 'Email',
                            onChange: function (e) {
                              return j(e.target.value);
                            },
                            variant: 'outlined',
                            InputLabelProps: { shrink: !0 }
                          }),
                          Object(r.jsx)(fr, {
                            type: 'password',
                            autoComplete: 'current-password',
                            label: 'Password',
                            value: h,
                            onChange: function (e) {
                              return m(e.target.value);
                            },
                            placeholder: 'Password',
                            variant: 'outlined',
                            InputLabelProps: { shrink: !0 }
                          }),
                          Object(r.jsx)(fr, {
                            type: 'password',
                            autoComplete: 'current-password',
                            id: 'outlined-password',
                            required: !0,
                            label: 'Confirm Password',
                            value: y,
                            placeholder: 'Confirm Password',
                            onChange: function (e) {
                              return _(e.target.value);
                            },
                            variant: 'outlined',
                            InputLabelProps: { shrink: !0 }
                          }),
                          M && Object(r.jsx)(aa, { varient: 'error', children: M }),
                          S && Object(r.jsx)(aa, { varient: 'error', children: S }),
                          W &&
                            Object(r.jsx)(aa, {
                              varient: 'success',
                              children: 'Profile Updated Successfully'
                            }),
                          Object(r.jsx)(Ke.a, {
                            className: s.button,
                            onClick: function (e) {
                              e.preventDefault(),
                                h !== y
                                  ? C('Password does not match')
                                  : L(
                                      (function (e, t) {
                                        return (function () {
                                          var a = Object(St.a)(
                                            Et.a.mark(function a(r, n) {
                                              var c, s, i, o, l;
                                              return Et.a.wrap(
                                                function (a) {
                                                  for (;;)
                                                    switch ((a.prev = a.next)) {
                                                      case 0:
                                                        return (
                                                          (a.prev = 0),
                                                          r({ type: J }),
                                                          (c = n()),
                                                          (s = c.userLogin.userInfo),
                                                          (i = {
                                                            'Content-Type': 'application/json',
                                                            headers: {
                                                              Authorization: 'Bearer '.concat(
                                                                s.token
                                                              )
                                                            }
                                                          }),
                                                          (a.next = 6),
                                                          It.a.put(
                                                            ''.concat(e, '/user/profile'),
                                                            t,
                                                            i
                                                          )
                                                        );
                                                      case 6:
                                                        (o = a.sent),
                                                          (l = o.data),
                                                          r(Pt(l)),
                                                          (a.next = 14);
                                                        break;
                                                      case 11:
                                                        (a.prev = 11),
                                                          (a.t0 = a.catch(0)),
                                                          r(
                                                            ((d =
                                                              a.t0.response &&
                                                              a.t0.response.data.message
                                                                ? a.t0.response.data.message
                                                                : a.t0.message),
                                                            { type: X, payload: d })
                                                          );
                                                      case 14:
                                                      case 'end':
                                                        return a.stop();
                                                    }
                                                  var d;
                                                },
                                                a,
                                                null,
                                                [[0, 11]]
                                              );
                                            })
                                          );
                                          return function (e, t) {
                                            return a.apply(this, arguments);
                                          };
                                        })();
                                      })(a, { id: z._id, name: x, email: d, password: h })
                                    );
                            },
                            size: 'large',
                            variant: 'contained',
                            color: 'primary',
                            children: 'Update'
                          })
                        ]
                      })
                    ]
                  }),
                  Object(r.jsxs)(Ca.a, {
                    item: !0,
                    sm: 8,
                    xs: 12,
                    children: [
                      Object(r.jsx)('h2', { className: s.heading, children: 'MY ORDERS' }),
                      q
                        ? Object(r.jsx)(ea, {})
                        : G
                        ? Object(r.jsx)(aa, { varient: 'danger', children: G })
                        : Object(r.jsxs)(Ia.a, {
                            elevation: 8,
                            className: s.table,
                            children: [
                              Object(r.jsx)(or.a, {
                                className: s.table,
                                children: Object(r.jsxs)(sr.a, {
                                  'aria-label': 'customized table',
                                  children: [
                                    Object(r.jsx)(lr.a, {
                                      children: Object(r.jsxs)(dr.a, {
                                        children: [
                                          Object(r.jsx)(vr, {
                                            align: 'center',
                                            children: 'ORDER ID'
                                          }),
                                          Object(r.jsx)(vr, {
                                            align: 'center',
                                            children: 'DATE'
                                          }),
                                          Object(r.jsx)(vr, {
                                            align: 'center',
                                            children: 'TOTAL'
                                          }),
                                          Object(r.jsx)(vr, {
                                            align: 'center',
                                            children: 'PAID'
                                          }),
                                          Object(r.jsx)(vr, {
                                            align: 'center',
                                            children: 'DELIVERED'
                                          }),
                                          Object(r.jsx)(vr, { align: 'center' })
                                        ]
                                      })
                                    }),
                                    Object(r.jsx)(ir.a, {
                                      children:
                                        Y &&
                                        Y.slice(P * T, P * T + T).map(function (e) {
                                          return Object(r.jsxs)(
                                            yr,
                                            {
                                              children: [
                                                Object(r.jsx)(vr, {
                                                  component: 'th',
                                                  scope: 'row',
                                                  children: e._id
                                                }),
                                                Object(r.jsx)(vr, {
                                                  align: 'center',
                                                  children: e.createdAt.substring(0, 10)
                                                }),
                                                Object(r.jsx)(vr, {
                                                  align: 'center',
                                                  children: e.totalPrice
                                                }),
                                                Object(r.jsx)(vr, {
                                                  align: 'center',
                                                  children: e.isPaid
                                                    ? Object(r.jsxs)('div', {
                                                        children: [
                                                          Object(r.jsx)(ur.a, {
                                                            color: 'primary'
                                                          }),
                                                          '\xa0 \xa0',
                                                          Object(r.jsx)('span', {
                                                            children: e.paidAt.substring(0, 10)
                                                          })
                                                        ]
                                                      })
                                                    : Object(r.jsx)('i', {
                                                        className: 'fa fa-times',
                                                        style: { color: '#f44336' }
                                                      })
                                                }),
                                                Object(r.jsx)(vr, {
                                                  align: 'center',
                                                  children: e.isDelivered
                                                    ? e.deliveredAt.substring(0, 10)
                                                    : Object(r.jsx)('i', {
                                                        className: 'fa fa-times',
                                                        style: { color: '#f44336' }
                                                      })
                                                }),
                                                Object(r.jsx)(vr, {
                                                  align: 'center',
                                                  children: Object(r.jsx)(We.b, {
                                                    to: '/orders/'.concat(e._id),
                                                    children: Object(r.jsx)(Ke.a, {
                                                      className: s.details,
                                                      variant: 'outlined',
                                                      color: 'primary',
                                                      children: 'DETAILS'
                                                    })
                                                  })
                                                })
                                              ]
                                            },
                                            e._id
                                          );
                                        })
                                    })
                                  ]
                                })
                              }),
                              Y &&
                                Object(r.jsx)(br.a, {
                                  rowsPerPageOptions: [5, 10, 25],
                                  component: 'div',
                                  count: Y.length,
                                  rowsPerPage: T,
                                  page: P,
                                  onChangePage: function (e, t) {
                                    return k(t);
                                  },
                                  onChangeRowsPerPage: function (e) {
                                    D(parseInt(e.target.value, 10)), k(0);
                                  }
                                })
                            ]
                          })
                    ]
                  })
                ]
              })
            ]
          });
        },
        Nr = a(158),
        Er = a.n(Nr),
        Sr = a(159),
        Cr = a.n(Sr),
        Ir = a(160),
        wr = a.n(Ir),
        Pr = a(161),
        kr = a.n(Pr),
        Ar = a(162),
        Rr = a.n(Ar),
        Tr = a(104),
        Dr = a.n(Tr),
        Lr = function (e) {
          var t = e.history,
            a = qa(),
            c = Object(o.c)(function (e) {
              return e.cart;
            }).shippingAddress,
            s = Object(n.useState)(c.address),
            i = Object(qe.a)(s, 2),
            l = i[0],
            d = i[1],
            j = Object(n.useState)(c.city),
            u = Object(qe.a)(j, 2),
            b = u[0],
            h = u[1],
            m = Object(n.useState)(c.postalCode),
            p = Object(qe.a)(m, 2),
            O = p[0],
            x = p[1],
            g = Object(n.useState)(c.country),
            f = Object(qe.a)(g, 2),
            v = f[0],
            y = f[1],
            _ = Object(o.b)(),
            N = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo;
          Object(n.useEffect)(
            function () {
              N || t.push('/login');
            },
            [t, N]
          );
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'Shipping Address' }),
              Object(r.jsx)(rr, { step: 1 }),
              Object(r.jsxs)(Ia.a, {
                elevation: 14,
                className: a.paper,
                children: [
                  Object(r.jsx)('div', {
                    onClick: function () {
                      t.goBack();
                    },
                    children: Object(r.jsx)(Dr.a, { className: a.back })
                  }),
                  Object(r.jsx)(Ra.a, {
                    className: a.avatar,
                    children: Object(r.jsx)(Er.a, {})
                  }),
                  Object(r.jsx)(Qe.a, {
                    className: a.heading,
                    component: 'h1',
                    variant: 'h5',
                    children: 'Shipping Address'
                  }),
                  Object(r.jsxs)('form', {
                    className: a.form,
                    children: [
                      Object(r.jsxs)(ka.a, {
                        variant: 'outlined',
                        className: a.input,
                        children: [
                          Object(r.jsx)(wa.a, {
                            htmlFor: 'outlined-adornment-address',
                            children: 'Address'
                          }),
                          Object(r.jsx)(Pa.a, {
                            id: 'outlined-adornment-address',
                            placeholder: 'Your Address',
                            required: !0,
                            type: 'text',
                            value: l,
                            onChange: function (e) {
                              return d(e.target.value);
                            },
                            startAdornment: Object(r.jsx)(Aa.a, {
                              position: 'start',
                              children: Object(r.jsx)(Cr.a, { className: a.icon })
                            }),
                            labelWidth: 60
                          })
                        ]
                      }),
                      Object(r.jsxs)(ka.a, {
                        variant: 'outlined',
                        className: a.input,
                        children: [
                          Object(r.jsx)(wa.a, {
                            htmlFor: 'outlined-adornment-city',
                            children: 'City'
                          }),
                          Object(r.jsx)(Pa.a, {
                            id: 'outlined-adornment-city',
                            placeholder: 'Your City',
                            required: !0,
                            type: 'text',
                            value: b,
                            onChange: function (e) {
                              return h(e.target.value);
                            },
                            startAdornment: Object(r.jsx)(Aa.a, {
                              position: 'start',
                              children: Object(r.jsx)(wr.a, { className: a.icon })
                            }),
                            labelWidth: 30
                          })
                        ]
                      }),
                      Object(r.jsxs)(ka.a, {
                        variant: 'outlined',
                        className: a.input,
                        children: [
                          Object(r.jsx)(wa.a, {
                            htmlFor: 'outlined-adornment-postalCode',
                            children: 'Postal Code'
                          }),
                          Object(r.jsx)(Pa.a, {
                            id: 'outlined-adornment-postalCode',
                            placeholder: 'Postal Code',
                            required: !0,
                            type: 'text',
                            value: O,
                            onChange: function (e) {
                              return x(e.target.value);
                            },
                            startAdornment: Object(r.jsx)(Aa.a, {
                              position: 'start',
                              children: Object(r.jsx)(kr.a, { className: a.icon })
                            }),
                            labelWidth: 90
                          })
                        ]
                      }),
                      Object(r.jsxs)(ka.a, {
                        variant: 'outlined',
                        className: a.input,
                        children: [
                          Object(r.jsx)(wa.a, {
                            htmlFor: 'outlined-adornment-confirmPassword',
                            children: 'Country'
                          }),
                          Object(r.jsx)(Pa.a, {
                            id: 'outlined-adornment-country',
                            placeholder: 'Your Country',
                            required: !0,
                            type: 'text',
                            value: v,
                            onChange: function (e) {
                              return y(e.target.value);
                            },
                            startAdornment: Object(r.jsx)(Aa.a, {
                              position: 'start',
                              children: Object(r.jsx)(Rr.a, { className: a.icon })
                            }),
                            labelWidth: 58
                          })
                        ]
                      }),
                      Object(r.jsx)(Ke.a, {
                        className: a.button,
                        onClick: function (e) {
                          e.preventDefault(),
                            _(_a({ address: l, city: b, postalCode: O, country: v })),
                            t.push('/paymentMethod');
                        },
                        size: 'large',
                        variant: 'contained',
                        color: 'primary',
                        children: 'CONTINUE'
                      })
                    ]
                  })
                ]
              })
            ]
          });
        },
        Ur = a(338),
        Fr = a(349),
        Br = a(328),
        zr = a(163),
        Mr = a.n(zr),
        Wr = function (e) {
          var t = e.history,
            a = qa(),
            c = Object(n.useState)(''),
            s = Object(qe.a)(c, 2),
            i = s[0],
            l = s[1],
            d = Object(o.b)();
          Object(o.c)(function (e) {
            return e.cart;
          }).shippingAddress || t.push('/shipping');
          var j = Object(o.c)(function (e) {
            return e.userLogin;
          }).userInfo;
          Object(n.useEffect)(
            function () {
              j || t.push('/login');
            },
            [t, j]
          );
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'Payment Method' }),
              Object(r.jsx)(rr, { step: 2 }),
              Object(r.jsxs)(Ia.a, {
                elevation: 14,
                className: a.paper,
                children: [
                  Object(r.jsx)('div', {
                    onClick: function () {
                      t.goBack();
                    },
                    children: Object(r.jsx)(Dr.a, { className: a.back })
                  }),
                  Object(r.jsx)(Ra.a, {
                    className: a.avatar,
                    children: Object(r.jsx)(Mr.a, {})
                  }),
                  Object(r.jsx)(Qe.a, {
                    className: a.heading,
                    component: 'h1',
                    variant: 'h5',
                    children: 'Payment Method'
                  }),
                  Object(r.jsxs)('form', {
                    className: a.form,
                    children: [
                      Object(r.jsx)(ka.a, {
                        component: 'fieldset',
                        className: a.input,
                        children: Object(r.jsxs)(Fr.a, {
                          'aria-label': 'payment method',
                          name: 'payment method',
                          value: i,
                          onChange: function (e) {
                            return l(e.target.value);
                          },
                          children: [
                            Object(r.jsx)(Br.a, {
                              value: 'PayPal',
                              control: Object(r.jsx)(Ur.a, { required: !0 }),
                              label: 'PayPal'
                            }),
                            Object(r.jsx)(Br.a, {
                              value: 'Stripe',
                              control: Object(r.jsx)(Ur.a, { required: !0 }),
                              label: 'Stripe'
                            })
                          ]
                        })
                      }),
                      Object(r.jsx)(Ke.a, {
                        className: a.button,
                        onClick: function (e) {
                          e.preventDefault(), d(Na(i)), t.push('/placeorder');
                        },
                        size: 'large',
                        variant: 'contained',
                        color: 'primary',
                        children: 'CONTINUE'
                      })
                    ]
                  })
                ]
              })
            ]
          });
        },
        Hr = a(332),
        qr = a(329),
        Gr = a(331),
        Yr = a(330),
        Qr = window.innerWidth <= 768,
        Vr = Object(ft.a)(function (e) {
          return Object(pr.a)({
            root: {
              width: '100%',
              maxWidth: '36ch',
              backgroundColor: e.palette.background.paper
            },
            inline: { display: 'inline' },
            divider: { marginBottom: '0.5rem', marginTop: '0.3rem' },
            avatar: {
              width: Qr ? '3.9rem' : '6.5rem',
              height: Qr ? '3.9rem' : '6.5rem',
              marginRight: '1rem'
            },
            paper: { marginBottom: '1.8rem', padding: '0.4rem 1rem 1rem 0' },
            list_item: {
              paddingLeft: Qr ? '1.2rem' : '3.4rem',
              paddingRight: '1rem',
              paddingBottom: '1.4rem'
            },
            order_summary: { fontSize: '1.6rem', margin: 'auto' },
            order_link: { textDecoration: 'none' },
            message: { paddingLeft: '2rem', marginTop: '0.8rem', width: '100%' },
            shipping: { marginRight: Qr ? '1.8rem' : '2.8rem' },
            email: { color: '#000' },
            qty: { fontSize: '1.3rem', fontWeight: '450' },
            deliver_button: Object(gt.a)(
              {
                width: '100%',
                height: '3.6rem',
                border: 'none',
                outline: 'none',
                float: 'right',
                background: 'linear-gradient(45deg, #2196f3 30%, #21cbf3 90%)',
                justifyContent: 'center',
                fontFamily: 'Montserrat, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                letterSpacing: '0.005em',
                color: '#ffffff',
                filter: 'drop-shadow(12px 12px 10px rgba(0, 0, 0, 0.42))'
              },
              e.breakpoints.down('xs'),
              { width: '14rem', height: '3rem', fontSize: '1rem' }
            )
          });
        }),
        $r = function (e) {
          var t = e.history,
            a = e.API,
            c = e.isMobile,
            s = Vr(),
            i = Object(o.b)(),
            l = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            d = Object(o.c)(function (e) {
              return e.cart;
            }),
            j = d.cartItems,
            u = d.shippingAddress,
            b = d.paymentMethod;
          (d.itemsPrice = j
            .reduce(function (e, t) {
              return e + t.qty * t.price;
            }, 0)
            .toFixed(2)),
            (d.shippingPrice = (d.itemsPrice > 150 ? 100 : 0).toFixed(2)),
            (d.taxPrice = ((25 * d.itemsPrice) / 100).toFixed(2)),
            (d.totalPrice = (
              Number(d.itemsPrice) +
              Number(d.shippingPrice) +
              Number(d.taxPrice)
            ).toFixed(2));
          var h = Object(o.c)(function (e) {
              return e.order;
            }),
            m = h.order,
            p = h.success;
          return (
            Object(n.useEffect)(
              function () {
                l || t.push('/login'), p && (t.push('/orders/'.concat(m._id)), i({ type: xe }));
              },
              [i, t, m, p, l, a]
            ),
            Object(r.jsxs)(r.Fragment, {
              children: [
                Object(r.jsx)(oa, { title: 'Place Order' }),
                Object(r.jsx)(rr, { step: 3 }),
                Object(r.jsxs)(Ca.a, {
                  container: !0,
                  spacing: 4,
                  children: [
                    Object(r.jsxs)(Ca.a, {
                      item: !0,
                      md: 8,
                      xs: 12,
                      children: [
                        Object(r.jsxs)(Ia.a, {
                          className: s.paper,
                          elevation: 6,
                          children: [
                            Object(r.jsxs)(Xe.a, {
                              className: s.list,
                              children: [
                                Object(r.jsx)(et.a, {
                                  className: s.list_item,
                                  children: Object(r.jsx)(Qe.a, {
                                    color: 'primary',
                                    variant: c ? 'h6' : 'h5',
                                    component: 'h3',
                                    children: Object(r.jsx)('strong', {
                                      children: 'SHIPPING DETAILS'
                                    })
                                  })
                                }),
                                Object(r.jsx)(et.a, {
                                  className: s.list_item,
                                  children: Object(r.jsxs)(Qe.a, {
                                    color: 'textPrimary',
                                    varient: 'p',
                                    component: 'h6',
                                    children: [
                                      u.address,
                                      ',',
                                      Object(r.jsx)('br', {}),
                                      u.city,
                                      ',',
                                      Object(r.jsx)('br', {}),
                                      u.country,
                                      ',',
                                      Object(r.jsx)('br', {}),
                                      u.postalCode
                                    ]
                                  })
                                })
                              ]
                            }),
                            Object(r.jsx)(qr.a, { variant: 'fullWidth', className: s.divider }),
                            Object(r.jsxs)(Xe.a, {
                              className: s.list,
                              children: [
                                Object(r.jsx)(et.a, {
                                  className: s.list_item,
                                  children: Object(r.jsx)(Qe.a, {
                                    color: 'primary',
                                    variant: c ? 'h6' : 'h5',
                                    component: 'h3',
                                    children: Object(r.jsx)('strong', {
                                      children: 'PAYMENT METHOD'
                                    })
                                  })
                                }),
                                Object(r.jsx)(et.a, {
                                  className: s.list_item,
                                  children: Object(r.jsx)(Qe.a, {
                                    color: 'textPrimary',
                                    varient: 'p',
                                    component: 'h6',
                                    children: b
                                  })
                                })
                              ]
                            })
                          ]
                        }),
                        Object(r.jsxs)(Ia.a, {
                          className: s.paper,
                          elevation: 6,
                          children: [
                            Object(r.jsx)(Xe.a, {
                              className: s.list,
                              children: Object(r.jsx)(et.a, {
                                className: s.list_item,
                                children: Object(r.jsx)(Qe.a, {
                                  color: 'primary',
                                  variant: 'h5',
                                  component: 'h3',
                                  children: Object(r.jsx)('strong', {
                                    children: 'ORDER DETAILS'
                                  })
                                })
                              })
                            }),
                            j.length
                              ? Object(r.jsx)(Xe.a, {
                                  children: j.map(function (e, t) {
                                    return Object(r.jsxs)(
                                      'div',
                                      {
                                        children: [
                                          Object(r.jsxs)(et.a, {
                                            className: s.list_item,
                                            alignItems: 'flex-start',
                                            children: [
                                              Object(r.jsx)(Gr.a, {
                                                children: Object(r.jsx)(Ra.a, {
                                                  className: s.avatar,
                                                  alt: e.name,
                                                  variant: 'square',
                                                  src: e.image
                                                })
                                              }),
                                              Object(r.jsx)(We.b, {
                                                className: s.order_link,
                                                to: '/products/'
                                                  .concat(e.category, '/')
                                                  .concat(e.product),
                                                children: Object(r.jsx)(tt.a, {
                                                  primary: e.name,
                                                  secondary: Object(r.jsxs)(Qe.a, {
                                                    color: 'primary',
                                                    variant: c ? 'span' : 'body2',
                                                    component: 'span',
                                                    children: [
                                                      e.qty,
                                                      ' x ',
                                                      e.price,
                                                      ' =',
                                                      ' ',
                                                      (e.qty * e.price).toFixed(2)
                                                    ]
                                                  })
                                                })
                                              }),
                                              Object(r.jsx)(Hr.a, {
                                                style: c
                                                  ? {
                                                      marginTop: '2.2rem',
                                                      marginRight: '-1.8rem'
                                                    }
                                                  : {},
                                                children: Object(r.jsx)(Ht.a, {
                                                  type: 'button',
                                                  variant: 'light',
                                                  onClick: function () {
                                                    return (t = e.product), void i(ya(t));
                                                    var t;
                                                  },
                                                  children: Object(r.jsx)('i', {
                                                    className: 'fas fa-trash'
                                                  })
                                                })
                                              })
                                            ]
                                          }),
                                          Object(r.jsx)(qr.a, {
                                            variant: 'fullWidth',
                                            className: s.divider,
                                            component: 'li'
                                          })
                                        ]
                                      },
                                      t
                                    );
                                  })
                                })
                              : Object(r.jsx)(Yr.a, {
                                  maxWidth: 'md',
                                  children: Object(r.jsxs)(aa, {
                                    varient: 'info',
                                    children: [
                                      'Your Cart Is Empty ',
                                      Object(r.jsx)(We.b, {
                                        to: '/',
                                        children: 'Keep Shopping'
                                      })
                                    ]
                                  })
                                })
                          ]
                        })
                      ]
                    }),
                    Object(r.jsx)(Ca.a, {
                      item: !0,
                      md: 4,
                      xs: 12,
                      children: Object(r.jsx)(Ia.a, {
                        elevation: 6,
                        children: Object(r.jsxs)(Xe.a, {
                          children: [
                            Object(r.jsx)(et.a, {
                              children: Object(r.jsx)(Qe.a, {
                                className: s.order_summary,
                                color: 'primary',
                                variant: 'h4',
                                component: 'h3',
                                children: Object(r.jsx)('strong', { children: 'ORDER SUMMARY' })
                              })
                            }),
                            Object(r.jsx)(qr.a, { variant: 'inset', component: 'br' }),
                            Object(r.jsx)(et.a, {
                              children: Object(r.jsxs)(Ca.a, {
                                container: !0,
                                children: [
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsx)(Qe.a, {
                                      color: 'primary',
                                      varient: 'h6',
                                      component: 'h6',
                                      children: Object(r.jsx)('strong', { children: 'Items' })
                                    })
                                  }),
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsxs)(Qe.a, {
                                      color: 'textPrimary',
                                      varient: 'p',
                                      component: 'h6',
                                      children: ['$', d.itemsPrice]
                                    })
                                  })
                                ]
                              })
                            }),
                            Object(r.jsx)(qr.a, {
                              variant: 'fullWidth',
                              className: s.divider,
                              component: 'li'
                            }),
                            Object(r.jsx)(et.a, {
                              children: Object(r.jsxs)(Ca.a, {
                                container: !0,
                                children: [
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsx)(Qe.a, {
                                      color: 'primary',
                                      varient: 'h6',
                                      component: 'h6',
                                      children: Object(r.jsx)('strong', {
                                        children: 'Shipping'
                                      })
                                    })
                                  }),
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsxs)(Qe.a, {
                                      color: 'textPrimary',
                                      varient: 'p',
                                      component: 'h6',
                                      children: ['$', d.shippingPrice]
                                    })
                                  })
                                ]
                              })
                            }),
                            Object(r.jsx)(qr.a, {
                              variant: 'fullWidth',
                              className: s.divider,
                              component: 'li'
                            }),
                            Object(r.jsx)(et.a, {
                              children: Object(r.jsxs)(Ca.a, {
                                container: !0,
                                children: [
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsx)(Qe.a, {
                                      color: 'primary',
                                      varient: 'h6',
                                      component: 'h6',
                                      children: Object(r.jsx)('strong', { children: 'Tax' })
                                    })
                                  }),
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsxs)(Qe.a, {
                                      color: 'textPrimary',
                                      varient: 'p',
                                      component: 'h6',
                                      children: ['$', d.taxPrice]
                                    })
                                  })
                                ]
                              })
                            }),
                            Object(r.jsx)(qr.a, {
                              variant: 'fullWidth',
                              className: s.divider,
                              component: 'li'
                            }),
                            Object(r.jsx)(et.a, {
                              children: Object(r.jsxs)(Ca.a, {
                                container: !0,
                                children: [
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsx)(Qe.a, {
                                      color: 'primary',
                                      varient: 'h6',
                                      component: 'h6',
                                      children: Object(r.jsx)('strong', { children: 'Total' })
                                    })
                                  }),
                                  Object(r.jsx)(Ca.a, {
                                    item: !0,
                                    lg: 6,
                                    xs: 6,
                                    children: Object(r.jsxs)(Qe.a, {
                                      color: 'textPrimary',
                                      varient: 'p',
                                      component: 'h6',
                                      children: ['$', d.totalPrice]
                                    })
                                  })
                                ]
                              })
                            }),
                            Object(r.jsx)(qr.a, { variant: 'fullWidth', component: 'br' }),
                            Object(r.jsx)(et.a, {
                              children: Object(r.jsx)(Ht.a, {
                                className: 'btn-block p-2',
                                disabled: 0 === j.length,
                                onClick: function () {
                                  i(
                                    (function (e, t) {
                                      return (function () {
                                        var a = Object(St.a)(
                                          Et.a.mark(function a(r, n) {
                                            var c, s, i, o, l;
                                            return Et.a.wrap(
                                              function (a) {
                                                for (;;)
                                                  switch ((a.prev = a.next)) {
                                                    case 0:
                                                      return (
                                                        (a.prev = 0),
                                                        r({ type: me }),
                                                        (c = n()),
                                                        (s = c.userLogin.userInfo),
                                                        (i = {
                                                          'Content-Type': 'application/json',
                                                          headers: {
                                                            Authorization: 'Bearer '.concat(
                                                              s.token
                                                            )
                                                          }
                                                        }),
                                                        (a.next = 6),
                                                        It.a.post(''.concat(e, '/orders'), t, i)
                                                      );
                                                    case 6:
                                                      (o = a.sent),
                                                        (l = o.data),
                                                        r(hr(l)),
                                                        (a.next = 14);
                                                      break;
                                                    case 11:
                                                      (a.prev = 11),
                                                        (a.t0 = a.catch(0)),
                                                        a.t0.response &&
                                                        a.t0.response.data.message
                                                          ? a.t0.response.data.message
                                                          : a.t0.message;
                                                    case 14:
                                                    case 'end':
                                                      return a.stop();
                                                  }
                                              },
                                              a,
                                              null,
                                              [[0, 11]]
                                            );
                                          })
                                        );
                                        return function (e, t) {
                                          return a.apply(this, arguments);
                                        };
                                      })();
                                    })(a, {
                                      orderItems: j,
                                      shippingAddress: u,
                                      paymentMethod: b,
                                      itemsPrice: d.itemsPrice,
                                      shippingPrice: d.shippingPrice,
                                      taxPrice: d.taxPrice,
                                      totalPrice: d.totalPrice
                                    })
                                  );
                                },
                                children: 'PLACE ORDER'
                              })
                            })
                          ]
                        })
                      })
                    })
                  ]
                })
              ]
            })
          );
        },
        Kr = a(164),
        Jr = a.n(Kr),
        Zr = Object(ft.a)(function () {
          return {
            stripeButton: {
              background: 'linear-gradient(45deg, #007fe4 30%, #00c3f1 90%)',
              color: '#fff'
            }
          };
        }),
        Xr = function (e) {
          var t = e.orderId,
            a = e.API,
            c = Zr(),
            s = Object(o.b)(),
            i = Object(o.c)(function (e) {
              return e.orderDetails;
            }).orders,
            l = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            d = Object(o.c)(function (e) {
              return e.orderPay;
            }),
            j = d.loading,
            u = d.success;
          Object(n.useEffect)(
            function () {
              u && (s({ type: Se }), s(Ea()));
            },
            [s, u]
          );
          var b = (function () {
            var e = Object(St.a)(
              Et.a.mark(function e(r) {
                var n, c;
                return Et.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            console.log(r),
                            (e.prev = 1),
                            (e.next = 4),
                            It.a.post(
                              ''.concat(a, '/payment/stripe'),
                              { token: r, orderId: t },
                              {
                                'Content-Type': 'application/json',
                                headers: { Authorization: 'Bearer '.concat(l.token) }
                              }
                            )
                          );
                        case 4:
                          (n = e.sent),
                            (c = n.data),
                            console.log(c),
                            c &&
                              (s(mr(a, t, c)),
                              alert(
                                'Transaction completed by ' + i.user.name + ' through stripe'
                              )),
                            (e.next = 13);
                          break;
                        case 10:
                          (e.prev = 10), (e.t0 = e.catch(1)), console.log(e.t0);
                        case 13:
                        case 'end':
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[1, 10]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(r.jsx)(r.Fragment, {
            children: j
              ? Object(r.jsx)(ea, {})
              : Object(r.jsx)(Jr.a, {
                  stripeKey:
                    'pk_test_51I5RESIXupbB6992cGPzW6YHI1FZhP0WagDyo7sBv3cNCL1i5yVsDDQk8zqnyNiMvE7BBghdnZBA1ejNHfBdwaiS00gHyPOIaK',
                  token: b,
                  amount: 100 * i.totalPrice,
                  currency: 'USD',
                  name: 'Pay with Stripe',
                  shippingAddress: !0,
                  billingAddress: !0,
                  children: Object(r.jsx)(Ke.a, {
                    style: { width: '100%' },
                    variant: 'contained',
                    size: 'large',
                    className: c.stripeButton,
                    children: 'Pay With Stripe'
                  })
                })
          });
        },
        en = a(165),
        tn = function (e) {
          var t = e.orderId,
            a = e.API,
            c = Object(o.b)(),
            s = Object(o.c)(function (e) {
              return e.orderDetails;
            }).orders,
            i = Object(o.c)(function (e) {
              return e.orderPay;
            }),
            l = i.loading,
            d = i.success,
            j = Object(n.useState)(!1),
            u = Object(qe.a)(j, 2),
            b = u[0],
            h = u[1],
            m = (function () {
              var e = Object(St.a)(
                Et.a.mark(function e() {
                  var t, r, n;
                  return Et.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), It.a.get(''.concat(a, '/config/paypal'));
                        case 2:
                          (t = e.sent),
                            (r = t.data),
                            console.log(r),
                            ((n = document.createElement('script')).type = 'text/javascript'),
                            (n.src = 'https://www.paypal.com/sdk/js?client-id='.concat(r)),
                            (n.async = !0),
                            (n.onload = function () {
                              h(!0);
                            }),
                            document.body.appendChild(n);
                        case 11:
                        case 'end':
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function () {
                return e.apply(this, arguments);
              };
            })();
          Object(n.useEffect)(
            function () {
              d ? (c({ type: Se }), c(Ea())) : s && !s.isPaid && (window.paypal ? h(!0) : m());
            },
            [c, s, d]
          );
          return Object(r.jsx)(r.Fragment, {
            children: l
              ? Object(r.jsx)(ea, {})
              : b
              ? Object(r.jsx)(en.PayPalButton, {
                  amount: ''.concat(s.totalPrice),
                  onSuccess: function (e) {
                    console.log(e),
                      c(mr(a, t, e)),
                      alert('Transaction completed by ' + s.user.name + ' through paypal');
                  },
                  onError: function (e) {
                    console.log(e), alert(e);
                  },
                  onCancel: function (e) {
                    alert('Order ' + e.orderID + ' Cancelled');
                  }
                })
              : Object(r.jsx)(ea, {})
          });
        },
        an =
          (a(247),
          function () {
            return Object(r.jsxs)(r.Fragment, {
              children: [
                Object(r.jsx)(ha.a, {
                  className: 'mt-4',
                  width: 600,
                  height: 60,
                  variant: 'text',
                  component: 'h2'
                }),
                Object(r.jsxs)(Ca.a, {
                  className: 'mt-3',
                  container: !0,
                  spacing: 4,
                  children: [
                    Object(r.jsxs)(Ca.a, {
                      item: !0,
                      md: 8,
                      xs: 12,
                      children: [
                        Object(r.jsx)(ha.a, { variant: 'rect', height: 500 }),
                        Object(r.jsx)(ha.a, { className: 'mt-4', variant: 'rect', height: 200 })
                      ]
                    }),
                    Object(r.jsx)(Ca.a, {
                      item: !0,
                      md: 4,
                      xs: 12,
                      children: Object(r.jsx)(ha.a, { variant: 'rect', height: 360 })
                    })
                  ]
                })
              ]
            });
          }),
        rn = function (e) {
          var t = e.match,
            a = e.history,
            c = e.API,
            s = e.isMobile,
            i = Vr(),
            l = t.params.id,
            d = Object(o.b)(),
            j = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            u = Object(o.c)(function (e) {
              return e.orderDetails;
            }),
            b = u.loading,
            h = u.orders,
            m = u.error,
            p = Object(o.c)(function (e) {
              return e.orderPay;
            }).success,
            O = Object(o.c)(function (e) {
              return e.orderDeliver;
            }),
            x = O.loading,
            g = O.success;
          Object(n.useEffect)(
            function () {
              j
                ? (d({ type: Ue }),
                  d(
                    (function (e, t) {
                      return (function () {
                        var a = Object(St.a)(
                          Et.a.mark(function a(r, n) {
                            var c, s, i, o, l;
                            return Et.a.wrap(
                              function (a) {
                                for (;;)
                                  switch ((a.prev = a.next)) {
                                    case 0:
                                      return (
                                        (a.prev = 0),
                                        r({ type: ge }),
                                        (c = n()),
                                        (s = c.userLogin.userInfo),
                                        (i = {
                                          headers: { Authorization: 'Bearer '.concat(s.token) }
                                        }),
                                        (a.next = 6),
                                        It.a.get(''.concat(e, '/orders/').concat(t), i)
                                      );
                                    case 6:
                                      (o = a.sent),
                                        (l = o.data),
                                        r({ type: fe, payload: l }),
                                        (a.next = 14);
                                      break;
                                    case 11:
                                      (a.prev = 11),
                                        (a.t0 = a.catch(0)),
                                        a.t0.response && a.t0.response.data.message
                                          ? a.t0.response.data.message
                                          : a.t0.message;
                                    case 14:
                                    case 'end':
                                      return a.stop();
                                  }
                              },
                              a,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e, t) {
                          return a.apply(this, arguments);
                        };
                      })();
                    })(c, l)
                  ))
                : a.push('/login');
            },
            [d, l, p, g, j, a, c]
          );
          return b
            ? Object(r.jsx)(an, {})
            : m
            ? Object(r.jsx)(aa, { varient: 'danger', children: m })
            : Object(r.jsxs)(r.Fragment, {
                children: [
                  Object(r.jsx)(oa, { title: 'Order Screen' }),
                  Object(r.jsx)('br', {}),
                  Object(r.jsxs)(Qe.a, {
                    variant: s ? 'h6' : 'h4',
                    component: 'h4',
                    color: 'textSecondary',
                    children: [
                      Object(r.jsx)('span', {
                        style: s ? { display: 'flex', justifyContent: 'center' } : {},
                        children: 'ORDER'
                      }),
                      ' ',
                      h._id
                    ]
                  }),
                  Object(r.jsx)('br', {}),
                  Object(r.jsx)('br', {}),
                  Object(r.jsxs)(Ca.a, {
                    container: !0,
                    spacing: 4,
                    children: [
                      Object(r.jsxs)(Ca.a, {
                        item: !0,
                        md: 8,
                        xs: 12,
                        children: [
                          Object(r.jsxs)(Ia.a, {
                            className: i.paper,
                            elevation: 6,
                            children: [
                              Object(r.jsxs)(Xe.a, {
                                className: i.list,
                                children: [
                                  Object(r.jsx)(et.a, {
                                    className: i.list_item,
                                    children: Object(r.jsx)(Qe.a, {
                                      color: 'primary',
                                      variant: s ? 'h6' : 'h4',
                                      component: 'h3',
                                      children: Object(r.jsx)('strong', {
                                        children: 'SHIPPING DETAILS'
                                      })
                                    })
                                  }),
                                  Object(r.jsx)(qr.a, {
                                    variant: 'fullWidth',
                                    className: i.divider
                                  }),
                                  Object(r.jsx)(et.a, {
                                    className: i.list_item,
                                    children: Object(r.jsxs)(Qe.a, {
                                      color: 'textPrimary',
                                      varient: 'p',
                                      component: 'h6',
                                      children: [
                                        Object(r.jsx)('strong', {
                                          className: i.shipping,
                                          children: 'Name: '
                                        }),
                                        h.user.name,
                                        Object(r.jsx)('br', {}),
                                        Object(r.jsx)('br', {}),
                                        Object(r.jsx)('strong', {
                                          className: i.shipping,
                                          children: 'Email: '
                                        }),
                                        Object(r.jsx)('a', {
                                          rel: 'noreferrer',
                                          className: i.email,
                                          href: h.user.email,
                                          target: '_blank',
                                          children: h.user.email
                                        }),
                                        Object(r.jsx)('br', {}),
                                        Object(r.jsx)('br', {}),
                                        Object(r.jsx)('strong', { children: 'Address: ' }),
                                        Object(r.jsx)('span', {
                                          className: 'ml-4',
                                          children: h.shippingAddress.address
                                        }),
                                        Object(r.jsx)('br', {}),
                                        Object(r.jsx)('span', {
                                          className: 'ml-5 pl-5',
                                          children: h.shippingAddress.city
                                        }),
                                        Object(r.jsx)('br', {}),
                                        Object(r.jsxs)('span', {
                                          className: 'ml-5 pl-5',
                                          children: [h.shippingAddress.country, ',']
                                        }),
                                        Object(r.jsx)('br', {}),
                                        Object(r.jsx)('span', {
                                          className: 'ml-5 pl-5',
                                          children: h.shippingAddress.postalCode
                                        })
                                      ]
                                    })
                                  }),
                                  Object(r.jsx)('div', {
                                    className: i.message,
                                    children: h.isDelivered
                                      ? Object(r.jsxs)(aa, {
                                          varient: 'success',
                                          children: [
                                            'Delivered at ',
                                            h.deliveredAt.substring(0, 10)
                                          ]
                                        })
                                      : Object(r.jsx)(aa, {
                                          varient: 'error',
                                          children: 'Not Delivered'
                                        })
                                  })
                                ]
                              }),
                              Object(r.jsxs)(Xe.a, {
                                className: i.list,
                                children: [
                                  Object(r.jsx)(et.a, {
                                    className: i.list_item,
                                    children: Object(r.jsx)(Qe.a, {
                                      color: 'primary',
                                      variant: s ? 'h6' : 'h4',
                                      component: 'h3',
                                      children: Object(r.jsx)('strong', {
                                        children: 'PAYMENT METHOD'
                                      })
                                    })
                                  }),
                                  Object(r.jsx)(qr.a, {
                                    variant: 'fullWidth',
                                    className: i.divider
                                  }),
                                  Object(r.jsx)(et.a, {
                                    className: i.list_item,
                                    children: Object(r.jsx)(Qe.a, {
                                      color: 'textPrimary',
                                      varient: 'p',
                                      component: 'h6',
                                      children: h.paymentMethod
                                    })
                                  }),
                                  Object(r.jsx)('div', {
                                    className: i.message,
                                    children: h.isPaid
                                      ? Object(r.jsxs)(aa, {
                                          varient: 'success',
                                          children: ['Paid on ', h.paidAt.substring(0, 10)]
                                        })
                                      : Object(r.jsx)(aa, {
                                          varient: 'error',
                                          children: 'Not Paid'
                                        })
                                  })
                                ]
                              })
                            ]
                          }),
                          Object(r.jsxs)(Ia.a, {
                            className: i.paper,
                            elevation: 6,
                            children: [
                              Object(r.jsx)(Xe.a, {
                                className: i.list,
                                children: Object(r.jsx)(et.a, {
                                  className: i.list_item,
                                  children: Object(r.jsx)(Qe.a, {
                                    color: 'primary',
                                    variant: s ? 'h5' : 'h4',
                                    component: 'h3',
                                    children: Object(r.jsx)('strong', {
                                      children: 'ORDER DETAILS'
                                    })
                                  })
                                })
                              }),
                              h.orderItems.length
                                ? Object(r.jsx)(Xe.a, {
                                    children: h.orderItems.map(function (e, t) {
                                      return Object(r.jsxs)(
                                        'div',
                                        {
                                          children: [
                                            Object(r.jsxs)(et.a, {
                                              className: i.list_item,
                                              alignItems: 'flex-start',
                                              children: [
                                                Object(r.jsx)(Gr.a, {
                                                  children: Object(r.jsx)(Ra.a, {
                                                    className: i.avatar,
                                                    alt: e.name,
                                                    variant: 'square',
                                                    src: e.image
                                                  })
                                                }),
                                                Object(r.jsx)(We.b, {
                                                  className: i.order_link,
                                                  to: '/products/'
                                                    .concat(e.category, '/')
                                                    .concat(e.product),
                                                  children: Object(r.jsx)(tt.a, {
                                                    primary: e.name,
                                                    secondary: Object(r.jsxs)(Qe.a, {
                                                      color: 'primary',
                                                      variant: s ? 'span' : 'body2',
                                                      component: 'span',
                                                      children: [
                                                        e.qty,
                                                        ' x ',
                                                        e.price,
                                                        ' =',
                                                        ' ',
                                                        (e.qty * e.price).toFixed(2)
                                                      ]
                                                    })
                                                  })
                                                }),
                                                s
                                                  ? null
                                                  : Object(r.jsxs)(Hr.a, {
                                                      className: i.qty,
                                                      children: ['Qty: ', e.qty]
                                                    })
                                              ]
                                            }),
                                            Object(r.jsx)(qr.a, {
                                              variant: 'fullWidth',
                                              className: i.divider,
                                              component: 'li'
                                            })
                                          ]
                                        },
                                        t
                                      );
                                    })
                                  })
                                : Object(r.jsx)(Yr.a, {
                                    maxWidth: 'md',
                                    children: Object(r.jsxs)(aa, {
                                      varient: 'info',
                                      children: [
                                        'No order ',
                                        Object(r.jsx)(We.b, {
                                          to: '/',
                                          children: ' Keep Shopping'
                                        })
                                      ]
                                    })
                                  })
                            ]
                          })
                        ]
                      }),
                      Object(r.jsx)(Ca.a, {
                        item: !0,
                        md: 4,
                        xs: 12,
                        children: Object(r.jsx)(Ia.a, {
                          elevation: 6,
                          children: Object(r.jsxs)(Xe.a, {
                            children: [
                              Object(r.jsx)(et.a, {
                                children: Object(r.jsx)(Qe.a, {
                                  className: i.order_summary,
                                  color: 'primary',
                                  variant: 'h4',
                                  component: 'h3',
                                  children: Object(r.jsx)('strong', {
                                    children: 'ORDER SUMMARY'
                                  })
                                })
                              }),
                              Object(r.jsx)(qr.a, { variant: 'inset', component: 'br' }),
                              Object(r.jsx)(et.a, {
                                children: Object(r.jsxs)(Ca.a, {
                                  container: !0,
                                  children: [
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsx)(Qe.a, {
                                        color: 'primary',
                                        varient: 'h6',
                                        component: 'h6',
                                        children: Object(r.jsx)('strong', {
                                          children: 'Items Price'
                                        })
                                      })
                                    }),
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsxs)(Qe.a, {
                                        color: 'textPrimary',
                                        varient: 'p',
                                        component: 'h6',
                                        children: ['$', h.itemsPrice]
                                      })
                                    })
                                  ]
                                })
                              }),
                              Object(r.jsx)(qr.a, {
                                variant: 'fullWidth',
                                className: i.divider,
                                component: 'li'
                              }),
                              Object(r.jsx)(et.a, {
                                children: Object(r.jsxs)(Ca.a, {
                                  container: !0,
                                  children: [
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsx)(Qe.a, {
                                        color: 'primary',
                                        varient: 'h6',
                                        component: 'h6',
                                        children: Object(r.jsx)('strong', {
                                          children: 'Delivery Charge'
                                        })
                                      })
                                    }),
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsxs)(Qe.a, {
                                        color: 'textPrimary',
                                        varient: 'p',
                                        component: 'h6',
                                        children: ['$', h.shippingPrice]
                                      })
                                    })
                                  ]
                                })
                              }),
                              Object(r.jsx)(qr.a, {
                                variant: 'fullWidth',
                                className: i.divider,
                                component: 'li'
                              }),
                              Object(r.jsx)(et.a, {
                                children: Object(r.jsxs)(Ca.a, {
                                  container: !0,
                                  children: [
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsx)(Qe.a, {
                                        color: 'primary',
                                        varient: 'h6',
                                        component: 'h6',
                                        children: Object(r.jsx)('strong', {
                                          children: 'Tax Price'
                                        })
                                      })
                                    }),
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsxs)(Qe.a, {
                                        color: 'textPrimary',
                                        varient: 'p',
                                        component: 'h6',
                                        children: ['$', h.taxPrice]
                                      })
                                    })
                                  ]
                                })
                              }),
                              Object(r.jsx)(qr.a, {
                                variant: 'fullWidth',
                                className: i.divider,
                                component: 'li'
                              }),
                              Object(r.jsx)(et.a, {
                                children: Object(r.jsxs)(Ca.a, {
                                  container: !0,
                                  children: [
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsx)(Qe.a, {
                                        color: 'primary',
                                        varient: 'h6',
                                        component: 'h6',
                                        children: Object(r.jsx)('strong', {
                                          children: 'Total Price'
                                        })
                                      })
                                    }),
                                    Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      lg: 6,
                                      xs: 6,
                                      children: Object(r.jsxs)(Qe.a, {
                                        color: 'textPrimary',
                                        varient: 'p',
                                        component: 'h6',
                                        children: ['$', h.totalPrice]
                                      })
                                    })
                                  ]
                                })
                              }),
                              Object(r.jsx)(qr.a, { variant: 'fullWidth', component: 'br' }),
                              h.isPaid
                                ? j &&
                                  !j.isAdmin &&
                                  Object(r.jsx)(aa, { children: 'Payment Done Successfully' })
                                : Object(r.jsx)(et.a, {
                                    children: Object(r.jsx)(Ca.a, {
                                      item: !0,
                                      xs: 12,
                                      children:
                                        'PayPal' === h.paymentMethod
                                          ? Object(r.jsx)(tn, { orderId: l, API: c })
                                          : 'Stripe' === h.paymentMethod
                                          ? Object(r.jsx)(Xr, { orderId: l, API: c })
                                          : null
                                    })
                                  }),
                              Object(r.jsx)(et.a, {
                                children:
                                  j &&
                                  j.isAdmin &&
                                  h.isPaid &&
                                  !h.isDelivered &&
                                  Object(r.jsxs)(r.Fragment, {
                                    children: [
                                      Object(r.jsx)(Ht.a, {
                                        className: 'btn-block p-2 order_deliver_button',
                                        onClick: function () {
                                          d(
                                            (function (e, t) {
                                              return (function () {
                                                var a = Object(St.a)(
                                                  Et.a.mark(function a(r, n) {
                                                    var c, s, i;
                                                    return Et.a.wrap(
                                                      function (a) {
                                                        for (;;)
                                                          switch ((a.prev = a.next)) {
                                                            case 0:
                                                              return (
                                                                (a.prev = 0),
                                                                r({ type: Te }),
                                                                (c = n()),
                                                                (s = c.userLogin.userInfo),
                                                                (i = {
                                                                  'Content-Type':
                                                                    'application/json',
                                                                  headers: {
                                                                    Authorization:
                                                                      'Bearer '.concat(s.token)
                                                                  }
                                                                }),
                                                                (a.next = 6),
                                                                It.a.put(
                                                                  ''
                                                                    .concat(e, '/orders/')
                                                                    .concat(t, '/deliver'),
                                                                  {},
                                                                  i
                                                                )
                                                              );
                                                            case 6:
                                                              r({ type: De, success: !0 }),
                                                                (a.next = 12);
                                                              break;
                                                            case 9:
                                                              (a.prev = 9),
                                                                (a.t0 = a.catch(0)),
                                                                a.t0.response &&
                                                                a.t0.response.data.message
                                                                  ? a.t0.response.data.message
                                                                  : a.t0.message;
                                                            case 12:
                                                            case 'end':
                                                              return a.stop();
                                                          }
                                                      },
                                                      a,
                                                      null,
                                                      [[0, 9]]
                                                    );
                                                  })
                                                );
                                                return function (e, t) {
                                                  return a.apply(this, arguments);
                                                };
                                              })();
                                            })(c, l)
                                          );
                                        },
                                        children: 'MARKED AS DELIVERED'
                                      }),
                                      x && Object(r.jsx)(ea, {})
                                    ]
                                  })
                              })
                            ]
                          })
                        })
                      })
                    ]
                  })
                ]
              });
        },
        nn = a(350),
        cn = a(108),
        sn = a.n(cn),
        on = a(107),
        ln = a.n(on),
        dn = a(93),
        jn = a.n(dn),
        un = a(94),
        bn = a.n(un),
        hn = Object(Va.a)(function (e) {
          return {
            head: {
              backgroundColor: '#2196f3',
              color: e.palette.common.white,
              paddingLeft: '1.8rem'
            },
            body: { fontSize: 14, paddingLeft: '1.4rem', padding: '0.6rem' }
          };
        })(xr.a),
        mn = Object(Va.a)(function (e) {
          return {
            root: {
              '&:nth-of-type(odd)': { backgroundColor: e.palette.action.selected },
              '&:hover': { backgroundColor: e.palette.action.hover }
            }
          };
        })(dr.a),
        pn = Object(ft.a)(function (e) {
          return {
            table: { minWidth: 700 },
            tableHead: { fontSize: '1.2rem' },
            tableCol: { fontSize: '1rem' },
            heading: Object(gt.a)(
              {
                color: '#2196f3',
                fontFamily: 'Merriweather Sans, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '3.6rem',
                marginBottom: '2rem',
                letterSpacing: '-0.018em',
                background: 'linear-gradient(90deg, #0063bbdb 0%, #4ca8efcc 86.54%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              },
              e.breakpoints.down('xs'),
              { fontSize: '3rem' }
            ),
            check: { color: '#0e890a', fontWeight: 'bolder' },
            cross: { fontWeight: 'bolder' },
            createProductButton: Object(gt.a)(
              {
                width: '18rem',
                height: '3.6rem',
                border: 'none',
                outline: 'none',
                marginBottom: '2rem',
                float: 'right',
                background:
                  'linear-gradient( 90deg,  #0663af, 0%, rgba(0, 149, 255, 0.582) 106.57%)',
                borderRadius: '2.6rem',
                justifyContent: 'center',
                fontFamily: 'Montserrat, sans-serif',
                fontStyle: 'normal',
                fontWeight: 500,
                fontSize: '1.25rem',
                display: 'flex',
                alignItems: 'center',
                textAlign: 'center',
                letterSpacing: '0.005em',
                color: '#ffffff',
                filter: 'drop-shadow(12px 12px 10px rgba(0, 0, 0, 0.42))'
              },
              e.breakpoints.down('xs'),
              { width: '14rem', height: '3rem', fontSize: '1rem' }
            )
          };
        }),
        On = function (e) {
          var t = e.history,
            a = e.API,
            s = pn(),
            i = Object(o.b)(),
            l = c.a.useState(0),
            d = Object(qe.a)(l, 2),
            j = d[0],
            u = d[1],
            b = c.a.useState(5),
            h = Object(qe.a)(b, 2),
            m = h[0],
            p = h[1],
            O = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            x = Object(o.c)(function (e) {
              return e.userList;
            }),
            g = x.loading,
            f = x.error,
            v = x.users,
            y = Object(o.c)(function (e) {
              return e.userDelete;
            }).success;
          Object(n.useEffect)(
            function () {
              O && O.isAdmin
                ? i(
                    (function (e) {
                      return (function () {
                        var t = Object(St.a)(
                          Et.a.mark(function t(a, r) {
                            var n, c, s, i, o, l;
                            return Et.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        a({ type: ne }),
                                        (n = r()),
                                        (c = n.userLogin.userInfo),
                                        (s = c && c.token),
                                        (i = {
                                          headers: { Authorization: 'Bearer '.concat(s) }
                                        }),
                                        (t.next = 7),
                                        It.a.get(''.concat(e, '/user'), i)
                                      );
                                    case 7:
                                      (o = t.sent),
                                        (l = o.data),
                                        a({ type: ce, payload: l }),
                                        (t.next = 15);
                                      break;
                                    case 12:
                                      (t.prev = 12),
                                        (t.t0 = t.catch(0)),
                                        a(
                                          ((d =
                                            t.t0.response && t.t0.response.data.message
                                              ? t.t0.response.data.message
                                              : t.t0.message),
                                          { type: se, payload: d })
                                        );
                                    case 15:
                                    case 'end':
                                      return t.stop();
                                  }
                                var d;
                              },
                              t,
                              null,
                              [[0, 12]]
                            );
                          })
                        );
                        return function (e, a) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(a)
                  )
                : t.push('/login');
            },
            [i, t, O, y, a]
          );
          var _ = function (e) {
            window.confirm('Are you sure to delete this user??') &&
              i(
                (function (e, t) {
                  return (function () {
                    var a = Object(St.a)(
                      Et.a.mark(function a(r, n) {
                        var c, s, i, o;
                        return Et.a.wrap(
                          function (a) {
                            for (;;)
                              switch ((a.prev = a.next)) {
                                case 0:
                                  return (
                                    (a.prev = 0),
                                    r({ type: oe }),
                                    (c = n()),
                                    (s = c.userLogin.userInfo),
                                    (i = s && s.token),
                                    (o = { headers: { Authorization: 'Bearer '.concat(i) } }),
                                    (a.next = 7),
                                    It.a.delete(''.concat(e, '/user/').concat(t), o)
                                  );
                                case 7:
                                  r({ type: le }), (a.next = 13);
                                  break;
                                case 10:
                                  (a.prev = 10),
                                    (a.t0 = a.catch(0)),
                                    r(
                                      ((l =
                                        a.t0.response && a.t0.response.data.message
                                          ? a.t0.response.data.message
                                          : a.t0.message),
                                      { type: de, payload: l })
                                    );
                                case 13:
                                case 'end':
                                  return a.stop();
                              }
                            var l;
                          },
                          a,
                          null,
                          [[0, 10]]
                        );
                      })
                    );
                    return function (e, t) {
                      return a.apply(this, arguments);
                    };
                  })();
                })(a, e)
              );
          };
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'eShop Admin: User List' }),
              Object(r.jsx)('nav', {
                'aria-label': 'breadcrumb',
                children: Object(r.jsxs)('ol', {
                  className: 'breadcrumb',
                  children: [
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'Admin'
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'Users'
                    })
                  ]
                })
              }),
              Object(r.jsx)(Ht.a, {
                onClick: function () {
                  t.goBack();
                },
                className: 'btn btn-light mt-2 mb-4',
                children: 'Go Back'
              }),
              Object(r.jsx)('h1', { className: s.heading, children: 'Users' }),
              g
                ? Object(r.jsx)(ea, {})
                : f
                ? Object(r.jsx)(aa, { variant: 'danger', children: f })
                : Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsxs)(Ia.a, {
                      elevation: 20,
                      children: [
                        Object(r.jsx)(or.a, {
                          className: s.tableContainer,
                          children: Object(r.jsxs)(sr.a, {
                            className: s.table,
                            'aria-label': 'customized table',
                            children: [
                              Object(r.jsx)(lr.a, {
                                children: Object(r.jsxs)(dr.a, {
                                  children: [
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'left',
                                      children: 'ID'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'Name'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'Email'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'Admin'
                                    }),
                                    Object(r.jsx)(hn, {
                                      style: { fontSize: '1rem' },
                                      align: 'right'
                                    })
                                  ]
                                })
                              }),
                              Object(r.jsx)(ir.a, {
                                children:
                                  v &&
                                  v.slice(j * m, j * m + m).map(function (e) {
                                    return Object(r.jsxs)(
                                      mn,
                                      {
                                        children: [
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            component: 'th',
                                            scope: 'row',
                                            children: e._id
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.name
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.email
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.isAdmin
                                              ? Object(r.jsx)(jn.a, { className: s.check })
                                              : Object(r.jsx)(bn.a, {
                                                  color: 'error',
                                                  className: s.cross
                                                })
                                          }),
                                          Object(r.jsxs)(hn, {
                                            align: 'right',
                                            children: [
                                              Object(r.jsx)(We.b, {
                                                to: '/admin/user/'.concat(e._id, '/edit'),
                                                children: Object(r.jsx)(nn.a, {
                                                  title: 'Edit',
                                                  children: Object(r.jsx)(rt.a, {
                                                    'aria-label': 'edit',
                                                    children: Object(r.jsx)(ln.a, {
                                                      color: 'inherit'
                                                    })
                                                  })
                                                })
                                              }),
                                              Object(r.jsx)(nn.a, {
                                                title: 'Delete',
                                                children: Object(r.jsx)(rt.a, {
                                                  'aria-label': 'delete',
                                                  onClick: function () {
                                                    return _(e._id);
                                                  },
                                                  children: Object(r.jsx)(sn.a, {
                                                    color: 'error'
                                                  })
                                                })
                                              })
                                            ]
                                          })
                                        ]
                                      },
                                      e._id
                                    );
                                  })
                              })
                            ]
                          })
                        }),
                        v &&
                          Object(r.jsx)(br.a, {
                            rowsPerPageOptions: [5, 10, 25],
                            component: 'div',
                            count: v.length,
                            rowsPerPage: m,
                            page: j,
                            onChangePage: function (e, t) {
                              return u(t);
                            },
                            onChangeRowsPerPage: function (e) {
                              p(parseInt(e.target.value, 10)), u(0);
                            }
                          })
                      ]
                    })
                  })
            ]
          });
        },
        xn = a(333),
        gn = function (e) {
          var t = e.history,
            a = e.match,
            c = e.API,
            s = qa(),
            i = Object(n.useState)(''),
            l = Object(qe.a)(i, 2),
            d = l[0],
            j = l[1],
            u = Object(n.useState)(''),
            b = Object(qe.a)(u, 2),
            h = b[0],
            m = b[1],
            p = Object(n.useState)(!1),
            O = Object(qe.a)(p, 2),
            x = O[0],
            g = O[1],
            f = a.params.id,
            v = Object(o.b)(),
            y = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            _ = Object(o.c)(function (e) {
              return e.userDetails;
            }),
            N = _.loading,
            E = _.error,
            S = _.user,
            C = Object(o.c)(function (e) {
              return e.userUpdate;
            }),
            I = C.loading,
            w = C.error,
            P = C.success;
          Object(n.useEffect)(
            function () {
              y ? v(Rt(c, f)) : t.push('/login');
            },
            [v, c, f, y, t]
          ),
            Object(n.useEffect)(
              function () {
                P
                  ? (v({ type: he }), t.push('/admin/userlist'))
                  : S && (m(S.name), j(S.email), g(S.isAdmin));
              },
              [v, y, S, t, P]
            );
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'eShop Admin: User Edit' }),
              Object(r.jsx)('nav', {
                'aria-label': 'breadcrumb',
                children: Object(r.jsxs)('ol', {
                  className: 'breadcrumb',
                  children: [
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      'aria-current': 'page',
                      children: Object(r.jsx)(We.b, {
                        to: '/admin/userlist',
                        children: 'Users'
                      })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'Edit'
                    })
                  ]
                })
              }),
              Object(r.jsxs)(Ca.a, {
                container: !0,
                spacing: 0,
                children: [
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    md: 1,
                    children: Object(r.jsx)(Ht.a, {
                      onClick: function () {
                        t.goBack();
                      },
                      className: 'btn btn-light mt-1',
                      children: 'Go Back'
                    })
                  }),
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    md: 11,
                    children: Object(r.jsxs)(Ia.a, {
                      elevation: 14,
                      className: s.paperUserEdit,
                      children: [
                        Object(r.jsx)(Ra.a, {
                          className: s.avatar,
                          children: Object(r.jsx)(Ua.a, {})
                        }),
                        Object(r.jsx)(Qe.a, {
                          className: s.heading,
                          component: 'h1',
                          variant: 'h5',
                          children: 'Edit User'
                        }),
                        N && Object(r.jsx)(ea, {}),
                        I && Object(r.jsx)(ea, {}),
                        Object(r.jsxs)('form', {
                          className: s.form,
                          children: [
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: s.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-name',
                                  children: 'Name'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-name',
                                  placeholder: 'Your Name',
                                  required: !0,
                                  type: 'text',
                                  value: h,
                                  onChange: function (e) {
                                    return m(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Ua.a, { className: s.icon })
                                  }),
                                  labelWidth: 45
                                })
                              ]
                            }),
                            Object(r.jsxs)(ka.a, {
                              variant: 'outlined',
                              className: s.input,
                              children: [
                                Object(r.jsx)(wa.a, {
                                  htmlFor: 'outlined-adornment-email',
                                  children: 'Email'
                                }),
                                Object(r.jsx)(Pa.a, {
                                  id: 'outlined-adornment-email',
                                  placeholder: 'Email Address',
                                  required: !0,
                                  type: 'text',
                                  value: d,
                                  onChange: function (e) {
                                    return j(e.target.value);
                                  },
                                  startAdornment: Object(r.jsx)(Aa.a, {
                                    position: 'start',
                                    children: Object(r.jsx)(Da.a, { className: s.icon })
                                  }),
                                  labelWidth: 40
                                })
                              ]
                            }),
                            Object(r.jsx)(Br.a, {
                              control: Object(r.jsx)(xn.a, {
                                checked: x,
                                onChange: function () {
                                  return g(!x);
                                },
                                name: 'Is Admin',
                                color: 'primary'
                              }),
                              label: 'Is Admin'
                            }),
                            E && Object(r.jsx)(aa, { varient: 'error', children: E }),
                            w && Object(r.jsx)(aa, { varient: 'error', children: w }),
                            P &&
                              Object(r.jsx)(aa, {
                                varient: 'success',
                                children: 'User Details Editted Successfully'
                              }),
                            Object(r.jsx)(Ke.a, {
                              className: s.button,
                              onClick: function (e) {
                                e.preventDefault(),
                                  v(
                                    (function (e, t, a) {
                                      return (function () {
                                        var r = Object(St.a)(
                                          Et.a.mark(function r(n, c) {
                                            var s, i, o, l, d, j;
                                            return Et.a.wrap(
                                              function (r) {
                                                for (;;)
                                                  switch ((r.prev = r.next)) {
                                                    case 0:
                                                      return (
                                                        (r.prev = 0),
                                                        n({ type: je }),
                                                        (s = c()),
                                                        (i = s.userLogin.userInfo),
                                                        (o = i && i.token),
                                                        (l = {
                                                          headers: {
                                                            'Content-Type': 'application/json',
                                                            Authorization: 'Bearer '.concat(o)
                                                          }
                                                        }),
                                                        (r.next = 7),
                                                        It.a.put(
                                                          ''.concat(e, '/user/').concat(t),
                                                          a,
                                                          l
                                                        )
                                                      );
                                                    case 7:
                                                      (d = r.sent),
                                                        (j = d.data),
                                                        n(kt(j)),
                                                        (r.next = 15);
                                                      break;
                                                    case 12:
                                                      (r.prev = 12),
                                                        (r.t0 = r.catch(0)),
                                                        n(
                                                          ((u =
                                                            r.t0.response &&
                                                            r.t0.response.data.message
                                                              ? r.t0.response.data.message
                                                              : r.t0.message),
                                                          { type: be, payload: u })
                                                        );
                                                    case 15:
                                                    case 'end':
                                                      return r.stop();
                                                  }
                                                var u;
                                              },
                                              r,
                                              null,
                                              [[0, 12]]
                                            );
                                          })
                                        );
                                        return function (e, t) {
                                          return r.apply(this, arguments);
                                        };
                                      })();
                                    })(c, f, { name: h, email: d, isAdmin: x })
                                  );
                              },
                              size: 'large',
                              variant: 'contained',
                              color: 'primary',
                              children: 'UPDATE'
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          });
        },
        fn = a(167),
        vn = a.n(fn),
        yn = function (e) {
          var t = e.history,
            a = e.API,
            s = pn(),
            i = Object(o.b)(),
            l = c.a.useState(0),
            d = Object(qe.a)(l, 2),
            j = d[0],
            u = d[1],
            b = c.a.useState(5),
            h = Object(qe.a)(b, 2),
            m = h[0],
            p = h[1],
            O = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            x = Object(o.c)(function (e) {
              return e.productList;
            }),
            g = x.loading,
            f = x.error,
            v = x.products,
            S = Object(o.c)(function (e) {
              return e.productDelete;
            }).success,
            w = Object(o.c)(function (e) {
              return e.productCreate;
            }),
            P = w.loading,
            k = w.success,
            A = w.error,
            R = w.product;
          Object(n.useEffect)(
            function () {
              O && O.isAdmin ? i($t('', a)) : t.push('/login');
            },
            [i, O, t, S, k, a]
          ),
            Object(n.useEffect)(
              function () {
                i({ type: I }),
                  k && t.push('/admin/product/'.concat(R.category, '/').concat(R._id, '/edit'));
              },
              [i, t, k, R]
            );
          var T = function (e, t) {
            window.confirm('Are you sure to delete this product??') &&
              i(
                (function (e, t, a) {
                  return (function () {
                    var r = Object(St.a)(
                      Et.a.mark(function r(n, c) {
                        var s, i, o;
                        return Et.a.wrap(
                          function (r) {
                            for (;;)
                              switch ((r.prev = r.next)) {
                                case 0:
                                  return (
                                    (r.prev = 0),
                                    n({ type: y }),
                                    (s = c()),
                                    (i = s.userLogin.userInfo),
                                    (o = {
                                      headers: { Authorization: 'Bearer '.concat(i.token) }
                                    }),
                                    (r.next = 6),
                                    It.a.delete(
                                      ''.concat(e, '/products/').concat(t, '/').concat(a),
                                      o
                                    )
                                  );
                                case 6:
                                  n({ type: _ }), (r.next = 12);
                                  break;
                                case 9:
                                  (r.prev = 9),
                                    (r.t0 = r.catch(0)),
                                    n(
                                      ((l =
                                        r.t0.response && r.t0.response.data.message
                                          ? r.t0.response.data.message
                                          : r.t0.message),
                                      { type: N, payload: l })
                                    );
                                case 12:
                                case 'end':
                                  return r.stop();
                              }
                            var l;
                          },
                          r,
                          null,
                          [[0, 9]]
                        );
                      })
                    );
                    return function (e, t) {
                      return r.apply(this, arguments);
                    };
                  })();
                })(a, e, t)
              );
          };
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'eShop Admin: Product List' }),
              Object(r.jsx)('nav', {
                'aria-label': 'breadcrumb',
                children: Object(r.jsxs)('ol', {
                  className: 'breadcrumb',
                  children: [
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'Admin'
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'Products'
                    })
                  ]
                })
              }),
              Object(r.jsx)(Ht.a, {
                onClick: function () {
                  t.goBack();
                },
                className: 'btn btn-light mt-2 mb-4',
                children: 'Go Back'
              }),
              Object(r.jsxs)(Ca.a, {
                container: !0,
                children: [
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    md: 9,
                    children: Object(r.jsx)('h1', {
                      className: s.heading,
                      children: 'Products'
                    })
                  }),
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    md: 3,
                    children: Object(r.jsxs)(Ht.a, {
                      onClick: function () {
                        i(
                          (function (e) {
                            return (function () {
                              var t = Object(St.a)(
                                Et.a.mark(function t(a, r) {
                                  var n, c, s, i, o;
                                  return Et.a.wrap(
                                    function (t) {
                                      for (;;)
                                        switch ((t.prev = t.next)) {
                                          case 0:
                                            return (
                                              (t.prev = 0),
                                              a({ type: E }),
                                              (n = r()),
                                              (c = n.userLogin.userInfo),
                                              (s = {
                                                'Content-Type': 'application/json',
                                                headers: {
                                                  Authorization: 'Bearer '.concat(c.token)
                                                }
                                              }),
                                              (t.next = 6),
                                              It.a.post(''.concat(e, '/products'), {}, s)
                                            );
                                          case 6:
                                            (i = t.sent), (o = i.data), a(pa(o)), (t.next = 14);
                                            break;
                                          case 11:
                                            (t.prev = 11),
                                              (t.t0 = t.catch(0)),
                                              a(
                                                ((l =
                                                  t.t0.response && t.t0.response.data.message
                                                    ? t.t0.response.data.message
                                                    : t.t0.message),
                                                { type: C, payload: l })
                                              );
                                          case 14:
                                          case 'end':
                                            return t.stop();
                                        }
                                      var l;
                                    },
                                    t,
                                    null,
                                    [[0, 11]]
                                  );
                                })
                              );
                              return function (e, a) {
                                return t.apply(this, arguments);
                              };
                            })();
                          })(a)
                        );
                      },
                      className: s.createProductButton,
                      children: [Object(r.jsx)(vn.a, {}), ' Create Product']
                    })
                  })
                ]
              }),
              P && Object(r.jsx)(ea, {}),
              A && Object(r.jsx)(aa, { variant: 'danger', children: A }),
              g
                ? Object(r.jsx)(ea, {})
                : f
                ? Object(r.jsx)(aa, { variant: 'danger', children: f })
                : Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsxs)(Ia.a, {
                      elevation: 20,
                      children: [
                        Object(r.jsx)(or.a, {
                          className: s.tableContainer,
                          children: Object(r.jsxs)(sr.a, {
                            className: s.table,
                            'aria-label': 'customized table',
                            children: [
                              Object(r.jsx)(lr.a, {
                                children: Object(r.jsxs)(dr.a, {
                                  children: [
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'left',
                                      children: 'ID'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'NAME'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'PRICE'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'CATEGORY'
                                    }),
                                    Object(r.jsx)(hn, {
                                      style: { fontSize: '1rem' },
                                      align: 'right',
                                      children: 'BRAND'
                                    }),
                                    Object(r.jsx)(hn, {
                                      style: { fontSize: '1rem' },
                                      align: 'right'
                                    })
                                  ]
                                })
                              }),
                              Object(r.jsx)(ir.a, {
                                children:
                                  v &&
                                  v.slice(j * m, j * m + m).map(function (e) {
                                    return Object(r.jsxs)(
                                      mn,
                                      {
                                        children: [
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            component: 'th',
                                            scope: 'row',
                                            children: e._id
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.name
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.price
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.category
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.brand
                                          }),
                                          Object(r.jsxs)(hn, {
                                            align: 'right',
                                            children: [
                                              Object(r.jsx)(We.b, {
                                                to: '/admin/product/'
                                                  .concat(e.category, '/')
                                                  .concat(e._id, '/edit'),
                                                children: Object(r.jsx)(nn.a, {
                                                  title: 'Edit',
                                                  children: Object(r.jsx)(rt.a, {
                                                    'aria-label': 'edit',
                                                    children: Object(r.jsx)(ln.a, {
                                                      color: 'inherit'
                                                    })
                                                  })
                                                })
                                              }),
                                              Object(r.jsx)(nn.a, {
                                                title: 'Delete',
                                                children: Object(r.jsx)(rt.a, {
                                                  'aria-label': 'delete',
                                                  onClick: function () {
                                                    return T(e.category, e._id);
                                                  },
                                                  children: Object(r.jsx)(sn.a, {
                                                    color: 'error'
                                                  })
                                                })
                                              })
                                            ]
                                          })
                                        ]
                                      },
                                      e._id
                                    );
                                  })
                              })
                            ]
                          })
                        }),
                        v &&
                          Object(r.jsx)(br.a, {
                            rowsPerPageOptions: [5, 10, 25],
                            component: 'div',
                            count: v.length,
                            rowsPerPage: m,
                            page: j,
                            onChangePage: function (e, t) {
                              return u(t);
                            },
                            onChangeRowsPerPage: function (e) {
                              p(parseInt(e.target.value, 10)), u(0);
                            }
                          })
                      ]
                    })
                  })
            ]
          });
        },
        _n = a(109);
      a(250);
      _n.a.initializeApp({
        apiKey: 'AIzaSyB5luaGCZN03Xsou9GCyZaUjRULhTQbRH0',
        authDomain: 'eshop--ecommerce.firebaseapp.com',
        projectId: 'eshop--ecommerce',
        storageBucket: 'eshop--ecommerce.appspot.com',
        messagingSenderId: '720427442520',
        appId: '1:720427442520:web:5cb7718ca9c7dc0c74052d',
        measurementId: 'G-JZG7JSR14G'
      });
      var Nn = _n.a.storage(),
        En = a(169),
        Sn = (function () {
          var e = Object(St.a)(
            Et.a.mark(function e(t, a, r, n) {
              var c, s, i, o, l, d, j;
              return Et.a.wrap(function (e) {
                for (;;)
                  switch ((e.prev = e.next)) {
                    case 0:
                      if (((c = t.type), (s = t.name), !c.includes('image'))) {
                        e.next = 14;
                        break;
                      }
                      return (
                        (i = { maxSizeMB: 1, maxWidthOrHeight: 600, useWebWorker: !0 }),
                        (e.next = 6),
                        Object(En.a)(t, i)
                      );
                    case 6:
                      (o = e.sent),
                        (l = Nn.ref()),
                        (d = { type: 'image/jpeg' }),
                        (j = l.child('images/'.concat(a, '/') + s).put(o, d)),
                        r(!0),
                        j.on(
                          _n.a.storage.TaskEvent.STATE_CHANGED,
                          function (e) {
                            r(!0);
                            var t = (e.bytesTransferred / e.totalBytes) * 100;
                            switch ((console.log('Upload is ' + t + '% done'), e.state)) {
                              case _n.a.storage.TaskState.PAUSED:
                                console.log('Upload is paused');
                                break;
                              case _n.a.storage.TaskState.RUNNING:
                                console.log('Upload is running');
                            }
                          },
                          function (e) {
                            switch ((r(!1), e.code)) {
                              case 'storage/unauthorized':
                              case 'storage/canceled':
                              case 'storage/unknown':
                                alert(e);
                            }
                          },
                          function () {
                            j.snapshot.ref.getDownloadURL().then(function (e) {
                              console.log('File available at', e), n(e), r(!1);
                            });
                          }
                        ),
                        (e.next = 15);
                      break;
                    case 14:
                      alert('Cannot upload file of type '.concat(c));
                    case 15:
                    case 'end':
                      return e.stop();
                  }
              }, e);
            })
          );
          return function (t, a, r, n) {
            return e.apply(this, arguments);
          };
        })(),
        Cn = a(174),
        In = a.n(Cn),
        wn = a(176),
        Pn = a.n(wn),
        kn = a(175),
        An = a.n(kn),
        Rn = a(173),
        Tn = a.n(Rn),
        Dn = a(170),
        Ln = a.n(Dn),
        Un = a(171),
        Fn = a.n(Un),
        Bn = a(172),
        zn = a.n(Bn),
        Mn = function (e) {
          var t = e.history,
            a = e.match,
            c = e.API,
            s = qa(),
            i = Object(n.useState)(''),
            l = Object(qe.a)(i, 2),
            d = l[0],
            j = l[1],
            u = Object(n.useState)(''),
            b = Object(qe.a)(u, 2),
            h = b[0],
            m = b[1],
            p = Object(n.useState)(''),
            O = Object(qe.a)(p, 2),
            x = O[0],
            g = O[1],
            f = Object(n.useState)(0),
            v = Object(qe.a)(f, 2),
            y = v[0],
            _ = v[1],
            N = Object(n.useState)(''),
            E = Object(qe.a)(N, 2),
            S = E[0],
            C = E[1],
            I = Object(n.useState)(''),
            P = Object(qe.a)(I, 2),
            R = P[0],
            T = P[1],
            D = Object(n.useState)(0),
            L = Object(qe.a)(D, 2),
            U = L[0],
            F = L[1],
            B = Object(n.useState)(!1),
            z = Object(qe.a)(B, 2),
            M = z[0],
            W = z[1],
            H = Object(o.b)(),
            q = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            G = Object(o.c)(function (e) {
              return e.productDetails;
            }),
            Y = G.loading,
            Q = G.product,
            V = Object(o.c)(function (e) {
              return e.productUpdate;
            }),
            $ = V.loading,
            K = V.success,
            J = V.error,
            Z = a.params.id,
            X = a.params.category;
          Object(n.useEffect)(
            function () {
              q
                ? K
                  ? (H({ type: A }), t.push('/admin/productlist'))
                  : H(xa(c, X, Z))
                : t.push('/login');
            },
            [H, c, q, Z, X, t, K]
          ),
            Object(n.useEffect)(
              function () {
                (!Q && Q.image) ||
                  (j(Q.name),
                  m(Q.category),
                  g(Q.brand),
                  _(Q.price),
                  C(Q.description),
                  T(Q.image),
                  F(Q.countInStock));
              },
              [Q]
            );
          var ee = (function () {
            var e = Object(St.a)(
              Et.a.mark(function e(t) {
                var a;
                return Et.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        (a = t.target.files[0]), (e.next = 6);
                        break;
                      case 4:
                        e.next = 9;
                        break;
                      case 6:
                        return (e.next = 9), Sn(a, h, W, T);
                      case 9:
                      case 'end':
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })();
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'eShop Admin: Product Edit' }),
              Object(r.jsx)('nav', {
                'aria-label': 'breadcrumb',
                children: Object(r.jsxs)('ol', {
                  className: 'breadcrumb',
                  children: [
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      'aria-current': 'page',
                      children: Object(r.jsx)(We.b, {
                        to: '/admin/productlist',
                        children: 'Products'
                      })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'Edit'
                    })
                  ]
                })
              }),
              Object(r.jsxs)(Ca.a, {
                container: !0,
                spacing: 2,
                children: [
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    md: 1,
                    children: Object(r.jsx)(Ht.a, {
                      onClick: function () {
                        t.goBack();
                      },
                      className: 'btn btn-light mt-1',
                      children: 'Go Back'
                    })
                  }),
                  Object(r.jsx)(Ca.a, {
                    item: !0,
                    md: 11,
                    children: Object(r.jsxs)(Ia.a, {
                      elevation: 14,
                      className: s.paperProductEdit,
                      children: [
                        Object(r.jsx)(Ra.a, {
                          className: s.avatar,
                          children: Object(r.jsx)(Ln.a, {})
                        }),
                        Object(r.jsx)(Qe.a, {
                          className: s.heading,
                          component: 'h1',
                          variant: 'h5',
                          children: 'Edit Product'
                        }),
                        Object(r.jsx)('br', {}),
                        Y && Object(r.jsx)(ea, {}),
                        $ && Object(r.jsx)(ea, {}),
                        Object(r.jsxs)(Ca.a, {
                          container: !0,
                          spacing: 10,
                          direction: 'row',
                          justify: 'space-evenly',
                          children: [
                            Object(r.jsxs)(Ca.a, {
                              item: !0,
                              md: 6,
                              xs: 12,
                              children: [
                                Object(r.jsxs)(ka.a, {
                                  variant: 'outlined',
                                  className: s.inputProduct,
                                  children: [
                                    Object(r.jsx)(wa.a, {
                                      htmlFor: 'outlined-adornment-name',
                                      children: 'Name'
                                    }),
                                    Object(r.jsx)(Pa.a, {
                                      id: 'outlined-adornment-name',
                                      placeholder: 'Enter Name',
                                      required: !0,
                                      type: 'text',
                                      value: d,
                                      onChange: function (e) {
                                        return j(e.target.value);
                                      },
                                      startAdornment: Object(r.jsx)(Aa.a, {
                                        position: 'start',
                                        children: Object(r.jsx)(Fn.a, { className: s.icon })
                                      }),
                                      labelWidth: 56
                                    })
                                  ]
                                }),
                                Object(r.jsxs)(ka.a, {
                                  variant: 'outlined',
                                  className: s.inputProduct,
                                  children: [
                                    Object(r.jsx)(wa.a, {
                                      htmlFor: 'outlined-adornment-category',
                                      children: 'Category'
                                    }),
                                    Object(r.jsx)(Pa.a, {
                                      id: 'outlined-adornment-category',
                                      placeholder: 'Enter Category',
                                      required: !0,
                                      type: 'text',
                                      value: h,
                                      onChange: function (e) {
                                        return m(e.target.value);
                                      },
                                      startAdornment: Object(r.jsx)(Aa.a, {
                                        position: 'start',
                                        children: Object(r.jsx)(zn.a, { className: s.icon })
                                      }),
                                      labelWidth: 84
                                    })
                                  ]
                                }),
                                Object(r.jsxs)(ka.a, {
                                  variant: 'outlined',
                                  className: s.inputProduct,
                                  children: [
                                    Object(r.jsx)(wa.a, {
                                      htmlFor: 'outlined-adornment-brand',
                                      children: 'Brand'
                                    }),
                                    Object(r.jsx)(Pa.a, {
                                      id: 'outlined-adornment-brand',
                                      placeholder: 'Enter Brand',
                                      required: !0,
                                      type: 'text',
                                      value: x,
                                      onChange: function (e) {
                                        return g(e.target.value);
                                      },
                                      startAdornment: Object(r.jsx)(Aa.a, {
                                        position: 'start',
                                        children: Object(r.jsx)(Tn.a, { className: s.icon })
                                      }),
                                      labelWidth: 54
                                    })
                                  ]
                                }),
                                Object(r.jsxs)(ka.a, {
                                  variant: 'outlined',
                                  className: s.inputProduct,
                                  children: [
                                    Object(r.jsx)(wa.a, {
                                      htmlFor: 'outlined-adornment-brand',
                                      children: 'Price'
                                    }),
                                    Object(r.jsx)(Pa.a, {
                                      id: 'outlined-adornment-price',
                                      placeholder: 'Enter Price',
                                      required: !0,
                                      type: 'text',
                                      value: y,
                                      onChange: function (e) {
                                        return _(e.target.value);
                                      },
                                      startAdornment: Object(r.jsx)(Aa.a, {
                                        position: 'start',
                                        children: Object(r.jsx)(In.a, { className: s.icon })
                                      }),
                                      labelWidth: 50
                                    })
                                  ]
                                })
                              ]
                            }),
                            Object(r.jsxs)(Ca.a, {
                              item: !0,
                              md: 6,
                              xs: 12,
                              children: [
                                Object(r.jsxs)(ka.a, {
                                  variant: 'outlined',
                                  className: s.inputProduct,
                                  children: [
                                    Object(r.jsx)(wa.a, {
                                      htmlFor: 'outlined-adornment-brand',
                                      children: 'Image'
                                    }),
                                    Object(r.jsx)(Pa.a, {
                                      id: 'outlined-adornment-image',
                                      placeholder: 'Enter Image url',
                                      required: !0,
                                      type: 'text',
                                      value: R,
                                      onChange: function (e) {
                                        return T(e.target.value);
                                      },
                                      startAdornment: Object(r.jsx)(Aa.a, {
                                        position: 'start',
                                        children: Object(r.jsx)(An.a, { className: s.icon })
                                      }),
                                      labelWidth: 60
                                    }),
                                    Object(r.jsx)('input', {
                                      id: 'upload-image',
                                      name: 'upload-image',
                                      className: s.uploadButton,
                                      type: 'file',
                                      onChange: ee
                                    }),
                                    M && Object(r.jsx)(ea, {})
                                  ]
                                }),
                                Object(r.jsxs)(ka.a, {
                                  variant: 'outlined',
                                  className: s.inputProduct,
                                  children: [
                                    Object(r.jsx)(wa.a, {
                                      htmlFor: 'outlined-adornment-countInStock',
                                      children: 'Count In Stock'
                                    }),
                                    Object(r.jsx)(Pa.a, {
                                      id: 'outlined-adornment-countInStock',
                                      placeholder: 'Enter Count In Stock',
                                      required: !0,
                                      type: 'text',
                                      value: U,
                                      onChange: function (e) {
                                        return F(e.target.value);
                                      },
                                      startAdornment: Object(r.jsx)(Aa.a, {
                                        position: 'start',
                                        children: Object(r.jsx)(it.a, { className: s.icon })
                                      }),
                                      labelWidth: 132
                                    })
                                  ]
                                }),
                                Object(r.jsxs)(ka.a, {
                                  variant: 'outlined',
                                  className: s.inputProduct,
                                  children: [
                                    Object(r.jsx)(wa.a, {
                                      htmlFor: 'outlined-adornment-brand',
                                      children: 'Description'
                                    }),
                                    Object(r.jsx)(Pa.a, {
                                      id: 'outlined-adornment-description',
                                      placeholder: 'Enter Description',
                                      required: !0,
                                      multiline: !0,
                                      rows: 4,
                                      type: 'text',
                                      value: S,
                                      onChange: function (e) {
                                        return C(e.target.value);
                                      },
                                      startAdornment: Object(r.jsx)(Aa.a, {
                                        position: 'start',
                                        children: Object(r.jsx)(Pn.a, { className: s.icon })
                                      }),
                                      labelWidth: 106
                                    })
                                  ]
                                })
                              ]
                            }),
                            K && Object(r.jsx)(aa, { children: 'updated Successfully' }),
                            J && Object(r.jsx)(aa, { children: J }),
                            Object(r.jsx)(Ke.a, {
                              className: s.buttonProduct,
                              onClick: function (e) {
                                e.preventDefault(),
                                  H(
                                    (function (e, t, a) {
                                      return (function () {
                                        var r = Object(St.a)(
                                          Et.a.mark(function r(n, c) {
                                            var s, i, o, l, d;
                                            return Et.a.wrap(
                                              function (r) {
                                                for (;;)
                                                  switch ((r.prev = r.next)) {
                                                    case 0:
                                                      return (
                                                        (r.prev = 0),
                                                        n({ type: w }),
                                                        (s = c()),
                                                        (i = s.userLogin.userInfo),
                                                        (o = {
                                                          'Content-Type': 'application/json',
                                                          headers: {
                                                            Authorization: 'Bearer '.concat(
                                                              i.token
                                                            )
                                                          }
                                                        }),
                                                        (r.next = 6),
                                                        It.a.put(
                                                          ''
                                                            .concat(e, '/products/')
                                                            .concat(t, '/')
                                                            .concat(a._id),
                                                          a,
                                                          o
                                                        )
                                                      );
                                                    case 6:
                                                      (l = r.sent),
                                                        (d = l.data),
                                                        n(Oa(d)),
                                                        (r.next = 14);
                                                      break;
                                                    case 11:
                                                      (r.prev = 11),
                                                        (r.t0 = r.catch(0)),
                                                        n(
                                                          ((j =
                                                            r.t0.response &&
                                                            r.t0.response.data.message
                                                              ? r.t0.response.data.message
                                                              : r.t0.message),
                                                          { type: k, payload: j })
                                                        );
                                                    case 14:
                                                    case 'end':
                                                      return r.stop();
                                                  }
                                                var j;
                                              },
                                              r,
                                              null,
                                              [[0, 11]]
                                            );
                                          })
                                        );
                                        return function (e, t) {
                                          return r.apply(this, arguments);
                                        };
                                      })();
                                    })(c, X, {
                                      _id: Q._id,
                                      name: d,
                                      category: h,
                                      brand: x,
                                      price: y,
                                      image: R,
                                      countInStock: U,
                                      description: S
                                    })
                                  );
                              },
                              size: 'large',
                              variant: 'contained',
                              color: 'primary',
                              children: 'UPDATE'
                            })
                          ]
                        })
                      ]
                    })
                  })
                ]
              })
            ]
          });
        },
        Wn = function (e) {
          var t = e.history,
            a = e.API,
            s = pn(),
            i = Object(o.b)(),
            l = c.a.useState(0),
            d = Object(qe.a)(l, 2),
            j = d[0],
            u = d[1],
            b = c.a.useState(5),
            h = Object(qe.a)(b, 2),
            m = h[0],
            p = h[1],
            O = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            x = Object(o.c)(function (e) {
              return e.allOrders;
            }),
            g = x.loading,
            f = x.error,
            v = x.orders;
          Object(n.useEffect)(
            function () {
              O && O.isAdmin
                ? i(
                    (function (e) {
                      return (function () {
                        var t = Object(St.a)(
                          Et.a.mark(function t(a, r) {
                            var n, c, s, i, o;
                            return Et.a.wrap(
                              function (t) {
                                for (;;)
                                  switch ((t.prev = t.next)) {
                                    case 0:
                                      return (
                                        (t.prev = 0),
                                        a({ type: ke }),
                                        (n = r()),
                                        (c = n.userLogin.userInfo),
                                        (s = {
                                          headers: { Authorization: 'Bearer '.concat(c.token) }
                                        }),
                                        (t.next = 6),
                                        It.a.get(''.concat(e, '/orders'), s)
                                      );
                                    case 6:
                                      (i = t.sent),
                                        (o = i.data),
                                        a({ type: Ae, payload: o }),
                                        (t.next = 14);
                                      break;
                                    case 11:
                                      (t.prev = 11),
                                        (t.t0 = t.catch(0)),
                                        t.t0.response && t.t0.response.data.message
                                          ? t.t0.response.data.message
                                          : t.t0.message;
                                    case 14:
                                    case 'end':
                                      return t.stop();
                                  }
                              },
                              t,
                              null,
                              [[0, 11]]
                            );
                          })
                        );
                        return function (e, a) {
                          return t.apply(this, arguments);
                        };
                      })();
                    })(a)
                  )
                : t.push('/login');
            },
            [i, t, O, a]
          );
          return Object(r.jsxs)(r.Fragment, {
            children: [
              Object(r.jsx)(oa, { title: 'eShop Admin: Order List' }),
              Object(r.jsx)('nav', {
                'aria-label': 'breadcrumb',
                children: Object(r.jsxs)('ol', {
                  className: 'breadcrumb',
                  children: [
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item',
                      children: Object(r.jsx)(We.b, { to: '/', children: 'Home' })
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'Admin'
                    }),
                    Object(r.jsx)('li', {
                      className: 'breadcrumb-item active',
                      'aria-current': 'page',
                      children: 'ORDERS'
                    })
                  ]
                })
              }),
              Object(r.jsx)(Ht.a, {
                onClick: function () {
                  t.goBack();
                },
                className: 'btn btn-light mt-2 mb-4',
                children: 'Go Back'
              }),
              Object(r.jsx)('h1', { className: s.heading, children: 'Orders' }),
              g
                ? Object(r.jsx)(ea, {})
                : f
                ? Object(r.jsx)(aa, { variant: 'danger', children: f })
                : Object(r.jsx)(r.Fragment, {
                    children: Object(r.jsxs)(Ia.a, {
                      elevation: 20,
                      children: [
                        Object(r.jsx)(or.a, {
                          className: s.tableContainer,
                          children: Object(r.jsxs)(sr.a, {
                            className: s.table,
                            'aria-label': 'customized table',
                            children: [
                              Object(r.jsx)(lr.a, {
                                children: Object(r.jsxs)(dr.a, {
                                  children: [
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'left',
                                      children: 'ID'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'AMOUNT'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'USER'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'DATE'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'PAYMENT METHOD'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'PAID'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right',
                                      children: 'DELIVERED'
                                    }),
                                    Object(r.jsx)(hn, {
                                      className: s.tableHead,
                                      align: 'right'
                                    })
                                  ]
                                })
                              }),
                              Object(r.jsx)(ir.a, {
                                children:
                                  v &&
                                  v.slice(j * m, j * m + m).map(function (e) {
                                    return Object(r.jsxs)(
                                      mn,
                                      {
                                        children: [
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            component: 'th',
                                            scope: 'row',
                                            children: e._id
                                          }),
                                          Object(r.jsxs)(hn, {
                                            className: s.tableCol,
                                            component: 'th',
                                            scope: 'row',
                                            children: ['$', e.totalPrice]
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.user && e.user.name.split(' ')[0]
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.createdAt.substring(0, 10)
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.paymentMethod
                                          }),
                                          Object(r.jsx)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: e.isPaid
                                              ? Object(r.jsxs)(r.Fragment, {
                                                  children: [
                                                    Object(r.jsx)(jn.a, { className: s.check }),
                                                    e.paidAt.substring(0, 10)
                                                  ]
                                                })
                                              : Object(r.jsx)(bn.a, {
                                                  color: 'error',
                                                  className: s.cross
                                                })
                                          }),
                                          Object(r.jsxs)(hn, {
                                            className: s.tableCol,
                                            align: 'right',
                                            children: [
                                              e.isDelivered
                                                ? Object(r.jsxs)(r.Fragment, {
                                                    children: [
                                                      Object(r.jsx)(jn.a, {
                                                        className: s.check
                                                      }),
                                                      e.deliveredAt.substring(0, 10)
                                                    ]
                                                  })
                                                : Object(r.jsx)(bn.a, {
                                                    color: 'error',
                                                    className: s.cross
                                                  }),
                                              ' '
                                            ]
                                          }),
                                          Object(r.jsx)(hn, {
                                            align: 'right',
                                            children: Object(r.jsx)(We.b, {
                                              to: '/orders/'.concat(e._id),
                                              children: Object(r.jsx)(Ht.a, {
                                                color: 'primary',
                                                children: 'Details'
                                              })
                                            })
                                          })
                                        ]
                                      },
                                      e._id
                                    );
                                  })
                              })
                            ]
                          })
                        }),
                        v &&
                          Object(r.jsx)(br.a, {
                            rowsPerPageOptions: [5, 10, 25],
                            component: 'div',
                            count: v.length,
                            rowsPerPage: m,
                            page: j,
                            onChangePage: function (e, t) {
                              return u(t);
                            },
                            onChangeRowsPerPage: function (e) {
                              p(parseInt(e.target.value, 10)), u(0);
                            }
                          })
                      ]
                    })
                  })
            ]
          });
        };
      a(248);
      var Hn = function () {
          var e = window.innerWidth <= 768,
            t = 'https://backend-eshop.herokuapp.com',
            a = Object(o.b)(),
            c = Object(o.c)(function (e) {
              return e.userLogin;
            }).userInfo,
            s = Object(o.c)(function (e) {
              return e.userAuthToken;
            }).error;
          return (
            Object(n.useEffect)(
              function () {
                a(
                  (function (e) {
                    return (function () {
                      var t = Object(St.a)(
                        Et.a.mark(function t(a, r) {
                          var n, c, s, i, o, l;
                          return Et.a.wrap(
                            function (t) {
                              for (;;)
                                switch ((t.prev = t.next)) {
                                  case 0:
                                    return (
                                      (t.prev = 0),
                                      a({ type: ee }),
                                      (n = r()),
                                      (c = n.userLogin.userInfo),
                                      (s = c && c.token),
                                      (i = {
                                        'Content-Type': 'application/json',
                                        headers: { Authorization: 'Bearer '.concat(s) }
                                      }),
                                      (t.next = 7),
                                      It.a.get(''.concat(e, '/user/auth'), i)
                                    );
                                  case 7:
                                    (o = t.sent),
                                      (l = o.data),
                                      a({ type: te, payload: l }),
                                      (t.next = 15);
                                    break;
                                  case 12:
                                    (t.prev = 12),
                                      (t.t0 = t.catch(0)),
                                      a(
                                        a({
                                          type: ae,
                                          payload:
                                            t.t0.response && t.t0.response.data.message
                                              ? t.t0.response.data.message
                                              : t.t0.message
                                        })
                                      );
                                  case 15:
                                  case 'end':
                                    return t.stop();
                                }
                            },
                            t,
                            null,
                            [[0, 12]]
                          );
                        })
                      );
                      return function (e, a) {
                        return t.apply(this, arguments);
                      };
                    })();
                  })(t)
                );
              },
              [t, a, c]
            ),
            Object(n.useEffect)(
              function () {
                c &&
                  'jwt expired' === s &&
                  (alert('Logged out!! Again login to do shopping!!'),
                  a(At()),
                  a({ type: re }));
              },
              [a, c, s]
            ),
            Object(r.jsx)(We.a, {
              children: Object(r.jsxs)('div', {
                className: 'body',
                children: [
                  Object(r.jsx)(Ft, { isMobile: e }),
                  Object(r.jsxs)('main', {
                    className: 'screens',
                    children: [
                      Object(r.jsx)(He.a, {
                        path: '/search',
                        render: function (a) {
                          var n = a.location,
                            c = a.history;
                          return Object(r.jsx)(da, {
                            location: n,
                            API: t,
                            isMobile: e,
                            history: c
                          });
                        }
                      }),
                      Object(r.jsx)(He.a, {
                        path: '/',
                        render: function (a) {
                          var n = a.location;
                          return Object(r.jsx)(da, { location: n, API: t, isMobile: e });
                        },
                        exact: !0
                      }),
                      Object(r.jsxs)('div', {
                        className: e ? 'mx-3 px-3 py-4' : 'mx-5 px-4 py-4',
                        children: [
                          Object(r.jsx)(He.a, {
                            path: '/placeorder',
                            render: function (a) {
                              var n = a.history;
                              return Object(r.jsx)($r, { history: n, API: t, isMobile: e });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/orders/:id',
                            render: function (a) {
                              var n = a.history,
                                c = a.match;
                              return Object(r.jsx)(rn, {
                                match: c,
                                history: n,
                                API: t,
                                isMobile: e
                              });
                            }
                          }),
                          Object(r.jsx)(He.a, { path: '/shipping', component: Lr }),
                          Object(r.jsx)(He.a, { path: '/paymentMethod', component: Wr }),
                          Object(r.jsx)(He.a, {
                            path: '/login',
                            render: function (a) {
                              var n = a.location,
                                c = a.history;
                              return Object(r.jsx)(nr, {
                                isMobile: e,
                                location: n,
                                history: c,
                                API: t
                              });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/register',
                            render: function (a) {
                              var n = a.location,
                                c = a.history;
                              return Object(r.jsx)(cr, {
                                isMobile: e,
                                location: n,
                                history: c,
                                API: t
                              });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/profile',
                            render: function (e) {
                              var a = e.history;
                              return Object(r.jsx)(_r, { history: a, API: t });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/products/:category/:id',
                            render: function (a) {
                              var n = a.history,
                                c = a.match;
                              return Object(r.jsx)(ga, {
                                history: n,
                                API: t,
                                match: c,
                                isMobile: e
                              });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/cart/:category?/:id?',
                            component: function (a) {
                              var n = a.history,
                                c = a.match,
                                s = a.location;
                              return Object(r.jsx)(Sa, {
                                history: n,
                                match: c,
                                isMobile: e,
                                API: t,
                                location: s
                              });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/admin/userlist',
                            component: function (e) {
                              var a = e.history;
                              return Object(r.jsx)(On, { history: a, API: t });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/admin/user/:id/edit',
                            component: function (e) {
                              var a = e.history,
                                n = e.match;
                              return Object(r.jsx)(gn, { history: a, match: n, API: t });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/admin/productlist',
                            component: function (e) {
                              var a = e.history;
                              return Object(r.jsx)(yn, { history: a, API: t });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/admin/product/:category/:id/edit',
                            component: function (e) {
                              var a = e.history,
                                n = e.match;
                              return Object(r.jsx)(Mn, { history: a, match: n, API: t });
                            }
                          }),
                          Object(r.jsx)(He.a, {
                            path: '/admin/orderlist',
                            component: function (e) {
                              var a = e.history;
                              return Object(r.jsx)(Wn, { history: a, API: t });
                            }
                          })
                        ]
                      })
                    ]
                  }),
                  Object(r.jsx)(Wt, {})
                ]
              })
            })
          );
        },
        qn = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 353))
              .then(function (t) {
                var a = t.getCLS,
                  r = t.getFID,
                  n = t.getFCP,
                  c = t.getLCP,
                  s = t.getTTFB;
                a(e), r(e), n(e), c(e), s(e);
              });
        };
      i.a.render(
        Object(r.jsx)(o.a, { store: Me, children: Object(r.jsx)(Hn, {}) }),
        document.getElementById('root')
      ),
        qn();
    }
  },
  [[249, 1, 2]]
]);
//# sourceMappingURL=main.9c07dd00.chunk.js.map
