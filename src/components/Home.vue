<template>
    <div class="home">
        <h1>{{ msg }}</h1>
        <b-table striped hover :items="dataContext" :fields="fields" responsive="sm"
        id="my-table"
        :per-page="perPage"
      :current-page="currentPage"
      no-provider-paging ="true">
            <template v-slot:cell(thumbnailUrl)="data">
                <b-img :src="data.value" thumbnail fluid></b-img>
            </template>
            <template v-slot:cell(title_link)="data">
                <b-link :to="{ name: 'book_view', params: { 'id' : data.item.bookId } }">{{ data.item.title }}</b-link>
            </template>
        </b-table>
        <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>
    <p class="mt-3">Current Page: {{ currentPage }}</p>
    </div>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'Home',
        props: {
            msg: String
        },
        data: () => ({
            perPage: 3,
            currentPage: 1,
            fields: [
                { key: 'thumbnailUrl', label: 'Book Image' },
                { key: 'title_link', label: 'Book Title', sortable: true, sortDirection: 'desc' },
                { key: 'isbn', label: 'ISBN', sortable: true, sortDirection: 'desc' },
                { key: 'descr', label: 'Description', sortable: true, sortDirection: 'desc' }
            ],
            items: []
        }),
        computed: {
      rows() {
        return this.items.length
      }
    },
        methods: {
            dataContext(ctx, callback) {
                axios.get("https://localhost:5001/books")
                    .then(response => {
                        callback(response.data);
                });
            }
        }
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

