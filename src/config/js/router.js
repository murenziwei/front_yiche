import router from '../../router/index'
// 全局路由守卫
router.beforeEach((to, from, next) => {

  next()
});
export default router;
