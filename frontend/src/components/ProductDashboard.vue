<template>
  <section>
    <div class="flex flex-col">
      <button v-on:click="add = !add" to="/dashboard/product/add" class="px-4 py-2 bg-blue-600 rounded-lg shadow text-white font-bold inline-block mb-2 items-start w-36 text-center select-none hover:bg-blue-800 duration-300">{{add ? "Add Product" : "Go Back"}}</button>
      <div v-if="add == false" class="bg-white min-w-full min-h-full rounded-lg shadow">
        <form v-on:submit.prevent="makeProduct" class="flex justify-center items-center flex-col select-none p-10">
          <div class="lg:flex-row flex flex-col">
            <div class="flex-col flex m-1">
              <p class="font-bold">Title</p>
              <input class="px-4 py-2 border outline-none shadow rounded-lg" type="text" placeholder="Title..." v-model="formInput.title" />
            </div>
            <div class="flex-col flex m-1">
              <p class="font-bold">Price</p>
              <input class="px-4 py-2 border outline-none shadow rounded-lg" type="number" placeholder="Price..." v-model="formInput.price" />
            </div>
          </div>
          <p class="text-center font-bold">Image</p>
          <input type="url" class="border outline-none shadow rounded-lg px-4 py-2" placeholder="Image..." v-model="formInput.image"/>
          <p class="font-bold text-center">Description</p>
          <textarea class="w-full lg:w-2/4 h-96 outline-none shadow rounded-lg px-4 py-2 border" placeholder="Description..." v-model="formInput.description" ></textarea>
          <input type="submit" class="px-4 py-2 bg-blue-600 rounded-lg text-white shadow text-center font-bold my-2 select-none hover:bg-blue-800 cursor-pointer duration-300" value="Add Product" />
        </form>
      </div>
      <div v-else class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table class="min-w-full divide-y divide-gray-200">
              <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Description
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" class="relative px-6 py-3">
                    <span class="sr-only">View</span>
                  </th>
                </tr>
              </thead>
              <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="product in products" :key="product._id" class="hover:bg-gray-100 duration-300">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10 bg-blue-400 rounded-full">
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{product.title}}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div style="max-width: 350px" class="text-sm text-gray-500 truncate">{{product.description}}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                      ${{product.price}}
                    </span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {{convertDate(product.date)}}
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div class="text-indigo-600 hover:text-indigo-900">
                      <a class="mr-2 cursor-pointer" v-on:click="updateProduct(product._id)">View</a>
                      <a class="cursor-pointer" v-on:click="deleteProduct(product._id)">Delete</a>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

export default defineComponent({
  name: "ProductDashboardComponent",
  data() {
    return {
      products: null,
      add: true,
      formInput: {
        _id: "",
        title: "",
        description: "",
        image: "",
        price: "",
        user: "60f470487fa26519907d72b9"
      },
      update: false
    }
  },
  methods: {
    convertDate(date: any){
      return new Date(Number(date)).toLocaleDateString()
    },
    logTest(){
      console.log(this.formInput)
    },
    updateProduct(id: any){
      axios.get(`http://localhost:5000/graphql?query={getProduct(_id: "${id}"){title description image price}}`).then(response => {
        this.formInput = response["data"]["data"]["getProduct"];
        this.formInput["_id"] = id;
        this.add = !this.add;
        this.update = true
      })
    },
    makeProduct(){
      if(this.update == false){
        axios.post(`http://localhost:5000/graphql?query=mutation{createProduct(input: {title: "${this.formInput["title"]}" description: "${this.formInput["description"]}" image: "${this.formInput["image"]}" user: "${this.formInput["user"]}" price: ${this.formInput["price"]}}){_id}}`).then(() => {
          this.$router.push({name: "DashboardMain"})
          this.add = !this.add
          axios.get(`http://localhost:5000/graphql?query={getAllProductsFromUser(user: "${localStorage.getItem("_id")}"){title description price date _id}}`).then(data => {
            this.products = data["data"]["data"]["getAllProductsFromUser"];
          })
        })
      }else{
        const objectPost = {
          _id: this.formInput["_id"],
          title: this.formInput["title"],
          description: this.formInput["description"],
          image: this.formInput["image"],
          price: this.formInput["price"]
        }
        axios.post(`http://localhost:5000/updateProduct`, objectPost).then(() => {
          this.add = !this.add;
          axios.get(`http://localhost:5000/graphql?query={getAllProductsFromUser(user: "${localStorage.getItem("_id")}"){title description price date _id}}`).then(data => {
            this.products = data["data"]["data"]["getAllProductsFromUser"];
          })
        })
      }
    },
    deleteProduct(id: any){
      if(confirm("Are you sure?")){
        axios.delete(`http://localhost:5000/deleteProduct/${id}`).then(() => {
          this.$router.push({name: "DashboardMain"})
          axios.get(`http://localhost:5000/graphql?query={getAllProductsFromUser(user: "${localStorage.getItem("_id")}"){title description price date _id}}`).then(data => {
            this.products = data["data"]["data"]["getAllProductsFromUser"];
          })
        })
      }
    }
  },
  mounted: function(){
    (() => {
      axios.get(`http://localhost:5000/graphql?query={getAllProductsFromUser(user: "${localStorage.getItem("_id")}"){title description price date _id}}`).then(data => {
        this.products = data["data"]["data"]["getAllProductsFromUser"];
        })
    })()
  }
})
</script>