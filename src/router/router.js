import MainPage from "@/pages/MainPage.vue";
import {createRouter, createWebHistory} from 'vue-router';
import PostPage from "@/pages/PostPage";
import AboutUs from "@/pages/AboutUs";
import PostIdPage from "@/pages/PostIdPage";
import PostPageWithStore from "@/pages/PostPageWithStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
    {
        path: '/',
        component: MainPage
    },
    
    {
        path: '/posts',
        component: PostPage
    },

    {
        path: '/aboutus',
        component: AboutUs
    },
    
    {
        path: '/posts/:id',
        component: PostIdPage
    },

    {
        path: '/store',
        component: PostPageWithStore
    },

    {
        path: '/composition',
        component: PostPageCompositionApi
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;