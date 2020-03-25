<template>
    <div v-if="book">
        <b-card :title="book.title"
                :img-src="book.thumbnailUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2">
            <b-card-text>
                {{ book.descr }}
            </b-card-text>

            <b-button to="/" variant="primary">Back</b-button>
        </b-card>
    </div>
</template>

<script>
    // import axios from 'axios';

    export default {
        name: 'Book',
        props: ["id"],
        data: () => ({
            book: null
        }),
        mounted() {
            //axios.get(`https://localhost:5001/books/${this.id}`)
                //.then(response => {
                 //   this.book = response.data;
                //});
                this.book ={
  "isbn": "80-346-2518",
  "thumbnailUrl": "http://dummyimage.com/100x100.png/dddddd/000000",
  "title_link": "",
  "bookId": 1,
  "descr": "Overhold",
  "title": "Skyba"
};
        }
    }
</script>