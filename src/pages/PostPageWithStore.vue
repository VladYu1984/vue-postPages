<template>
    <div>
        <!-- <h1>{{ $store.state.isAuth ? "Пользователь авторизован" : "Пожалуйста, авторизуйтесь"}}</h1>
        <h1>{{ $store.getters.doubleLikes }}</h1> -->
        <!-- <div>
            <my-button @click="$store.commit('incrementLikes')">Лайк</my-button>
            <my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>
        </div> -->

        <h1>Страница с постами</h1>
        <my-input
            :model-value="searcQuery"
            @update:model-value="setSearchQuery"
            placeholder="поиск..."
            v-focus
        />
        <div class="app__btns">
            <my-button
            style="margin: 15px 0;"
            @click="showDialog"
        >
            Создать пост
        </my-button>
        <my-select 
            :model-value="selectedSort"
            @update:model-value="selectedSort"
            :options="sortOptions"
        />
        </div>

        <my-dialog v-model:show="dialogVisible">
            <post-form
                @create="createPost"
            />
        </my-dialog>
        <post-list 
            :posts="sortedAndSearchedPosts"
            @remove="removePost"
            v-if="!isPostsLoading"
        />
        <div v-else> Идет загрузка... </div>
        <div v-intersection="loadMorePosts" class="observer"></div>


        <!-- <div class="page__wrapper">
            <div 
                v-for="pageNumber in totalPages" 
                :key="pageNumber"
                class="page"
                :class="{
                    'current-page': page === pageNumber
                }"
                @click="changePage(pageNumber)"
            >
                {{ pageNumber }}
            </div>
        </div> -->
    </div>
</template>

<script>
import PostForm from "@/components/PostForm.vue";
import PostList from "@/components/PostList.vue";
import MyButton from "@/components/UI/MyButton.vue";
import MySelect from '@/components/UI/MySelect.vue';
import MyInput from '@/components/UI/MyInput.vue';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex';

export default {
    components: {
        MyButton,
        PostForm, 
        PostList,
        MySelect,
        MyInput,
    },

    data() {
        return {
            dialogVisible: false,
        }
    },

    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            loadMorePosts: 'post/loadMorePosts', 
            fetchPosts: 'post/fetchPosts',
        }),
        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },
        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },
        showDialog() {
            this.dialogVisible = true;
        },
    },

    mounted() {
        this.fetchPosts();
    },

    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searcQuery: state => state.post.searcQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions,
        }),
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },

    watch: {
        // page() {
        //     this.fetchPosts()
        // }
    }
}
</script>

<style>
.app__btns {
    margin: 15px 0;
    display: flex;
    justify-content: space-between;
}

.page__wrapper {
    display: flex;
    margin-top: 15px;
}

.page {
    width: 45px;
    height: 45px;
    border: 1px solid black;
    padding: 10px;
    margin-left: 10px;
    border-radius: 50%;
    text-align: center;
}

.current-page {
    border: 2px solid rgb(0, 98, 128);
    background: rgb(0, 128, 128, 0.8);
}

.observer {
    height: 30px;
    background: teal;
}
</style>