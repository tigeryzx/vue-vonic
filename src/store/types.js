/**
 * mutations
 */

export const M_APP_SET_THEME = "app/M_APP_SET_THEME";

export const M_LOGIN_SET_USER = 'login/M_LOGIN_SET_USER';
export const M_LOGIN_CLEAR_USER = 'login/M_LOGIN_CLEAR_USER';

export const M_FAV_FILL = "fav/M_FAV_FILL";
export const M_FAV_ADD = "fav/M_FAV_ADD";
export const M_FAV_DEL = "fav/M_FAV_DEL";
export const M_FAV_UPDATE = "fav/M_FAV_UPDATE";
export const M_FAV_VIDEO_FILL = "fav/M_FAV_VIDEO_FILL";
export const M_FAV_VIDEO_ADD = "fav/M_FAV_VIDEO_ADD";
export const M_FAV_VIDEO_DEL_BY_VID = "fav/M_FAV_VIDEO_DEL_BY_VID";
export const M_FAV_VIDEO_DEL_BY_FID = "fav/M_FAV_VIDEO_DEL_BY_FID";

export const M_VIDEO_DEL = "video/M_FAV_VIDEO_DEL_BY_VID";
export const M_VIDEO_APPEND_TO_LIST = "video/M_VIDEO_APPEND_TO_LIST";
export const M_VIDEO_CLEAR_LIST = "video/M_VIDEO_CLEAR_LIST";
export const M_VIDEO_SET_COVER = "video/M_VIDEO_SET_COVER";

/**
 * getters 添加派出来的状态时使用
 */

export const G_APP_THEME_INDEX = "app/G_APP_THEME_INDEX";

/**
 * actions
 * https://vuex.vuejs.org/zh-cn/actions.html
 */
export const A_LOGIN_IN = 'login/A_LOGIN_IN';
export const A_LOGIN_OUT = 'login/A_LOGIN_OUT';