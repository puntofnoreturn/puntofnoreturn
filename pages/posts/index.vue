<template>
    <div class="container">
        <div class="title-area">
            <h1 class="title">
                Posts
            </h1>
        </div>

    <div>
        <div v-for="post in posts" :key="post.attributes.title">
            <div>
                <h3 class='date-under'>
                    <nuxt-link :to="post._path">
                        {{ post.attributes.title }}
                    </nuxt-link>
                </h3>
                <div class="content">
                <p><em>{{ post.attributes.date | moment("MMMM Do, YYYY") }}</em></p>
                <p>{{ post.attributes.excerpt }}</p>
                <p>
                {{ post.attributes.tags }}
                </p>
                <nuxt-link :to="post._path">
                    Read
                </nuxt-link>
                </div>
            </div>
            <hr>
        </div>
    </div>
    </div>
</template>

<script>
import VueMoment from 'vue-moment'

export default {
    async asyncData () {
    const context = await require.context('~/content/posts/', true, /\.md$/)
    const posts = await context.keys().map(key => ({
        ...context(key),
        _path: `/posts/${key.replace('.md', '').replace('./', '')}`
    }))
    return { posts: posts.sort((a, b) => (a.attributes.date < b.attributes.date) ? 1 : -1) }
    },
    methods: {
    }
}

</script>
