import CONST_LOGIN from '../containers/Login/Index.vue';
import CONST_MAIN from '../containers/Main/Index.vue';

const Login = r => require.ensure([], () => r(CONST_LOGIN));
const Main = r => require.ensure([], () => r(CONST_MAIN));

export default {Login, Main};
