<template>

    <div >
        <b-card :title="book.title"
                :img-src="book.thumbnailUrl"
                img-alt="Image"
                img-top
                tag="article"
                style="max-width: 30rem;"
                class="mb-2"
                v-if="book && !(mode ==='add' || mode ==='edit')">
            <b-card-text>
                {{ book.descr }}
                
            </b-card-text>

            
        </b-card>
        

        <div >
            <b-container   v-if="mode ==='add' || mode ==='edit'">
               <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group
        id="input-group-1"
        label="Book Title"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="book.title"
          type="text"
          required
          placeholder="Enter Book Title"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Book Description" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="book.descr"
          required
          placeholder="Enter Description"
        ></b-form-input>
      </b-form-group>
<b-button type="reset"  variant="danger" v-if="mode ==='add' || mode ==='edit'">Reset</b-button>
  <b-button type="submit"  variant="success" v-if="mode ==='add' || mode ==='edit'">Save</b-button>
  <b-button to="/" variant="primary">Back</b-button>
    </b-form>
            </b-container>
        </div>
        <div>
  <b-button to="/" variant="primary" v-if="!(mode ==='add' || mode ==='edit')">Back</b-button>
  
</div>
        
    </div>
    
</template>

<script>
    //import axios from 'axios';

    export default {
        name: 'Book',
        props: ["id"],
        
        data: () => ({
            book: {
            descr: null,
            title: null
            },
            mode: null,
            text: null,
            onSubmit: () => {
                alert('submit');
            },
            onReset: () => {
                alert('Reset');
            }

        }),
        mounted() {
            this.book = {
  "isbn": "71-957-8668",
  "thumbnailUrl": "http://dummyimage.com/100x100.png/ff4444/ffffff",
  "title_link": "",
  "bookId": 3,
  "descr": "Home Ing",
  "title": "Photolist"
};
            this.mode = this.$route.params.id;
            // axios.get(`https://localhost:5001/books/${this.id}`)
            //     .then(response => {
            //         this.book = response.data;
            //     });
        }
    }
</script>