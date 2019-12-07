import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            loadedPosts: []
        },
        mutations: {
            setPosts(state, posts) {
                state.loadedPosts = posts
            }
        },
        actions: {
            nuxtServerInit(vuexContext, context) {
                return new Promise((resolve, reject) => {
                    setTimeout(() => {
                        vuexContext.commit('setPosts',
                            [
                                {
                                    id: "1",
                                    title: "First post",
                                    previewText: "This is our first post!",
                                    thumbnail:
                                        "https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
                                },
                                {
                                    id: "2",
                                    title: "Second post",
                                    previewText: "This is our second post!",
                                    thumbnail:
                                        "https://static.techspot.com/images2/news/bigimage/2018/07/2018-07-10-image-35.jpg"
                                }
                            ]
                        );
                        resolve();
                    }, 1500);
                })
            },
            setPosts({ commit }, posts) {
                commit('setPosts', posts);
            }
        },
        getters: {
            loadedPosts(state) {
                return state.loadedPosts;
            }
        }
    })
}

export default createStore;