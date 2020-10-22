<template>
    <div class="home">
        <div class="home-heading">
            <h1>Have a look at some of our meals...</h1>
             <input type="text" class="sortingBox" v-model="term"  placeholder="Sort Meals By Name..">
        </div>
        
        <div class="meals">
            <article class="parent"  v-for="item in filterProducts" :key="item.strMeal">
                <article class="article-child">
                    <h2>{{item.strMeal}}</h2>
                </article>
                <img :src = "item.strMealThumb">
                <button class="info" @click="goToDetailPage(item.idMeal)">View Full Info</button>
            </article>

        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 
  data(){
    return{
      mealsArr: [] as Array<object>,
      term :"" as string, 
      URL :'https://www.themealdb.com/api/json/v1/1/search.php?s=potato' as string,
    }
  },

  methods:{
     fetachMeals(): void{
             fetch(this.URL).
             then(res=>res.json())
             .then(data=>data.meals.forEach((meal)=>{
               this.mealsArr.push(meal);
             }));
               
            },

           

           

    goToDetailPage(id: string): void{
        this.$router.push({name:'details',params:{productId:id}});
      }
              
    },


        mounted(): void{
            this.fetachMeals();
        },

        computed:{
         filterProducts(){
                return this.mealsArr.filter((meal)=>{
                    return meal.strMeal.match(this.term);
                });
        }
    
  }
});
</script>





<style lang="scss">
 .home{
     background: #000;
     position: relative;
    //  height: 100vh;
     height: auto;

     &-heading{
         text-align: center;
         margin: 0 auto;
         width: 50%;

         h1{
              padding: 20px 0 ;
              background: rgba(lighten($color: #000000, $amount: 10),0.8);
          }
     }

     .sortingBox{
        //  position: absolute;
        //  top: 20px;
        //  right: 20px;
         padding: 5px;
         background:#f4f4f4;
         outline: none;
         border: 1px solid rgba(#ccc,0.9);
         font-size: 18px;
         border-radius: 5px;
         margin: 10px auto;
        }

        .meals{
         display: grid;
         grid-template-columns: repeat(5,1fr);
         justify-items:center;
         row-gap: 70px;
         height:100%;
         width: 100%;
         margin-top: 10px;
         padding-bottom: 100px;

         .parent{
             width: 200px;
             height: 200px;
             position: relative;
             border: 1px solid rgba(#ccc,0.8);
              cursor: pointer;

             

             .article-child{
                 position: absolute;
                 width: 100%;
                 height: 100%;
                 text-align: center;
                 display: flex;
                 align-items: center;
                 justify-content: center;
                 color: #fff;
                 transition: all 0.3s ease-in;
                
                 
                 &:hover{
                  background: rgba(darken(#333,10),0.6);
                   h2{
                     opacity: 1;
                    //  transform: translateY(0);
                 }
                 }
                  h2{
                     opacity: 0;
                     transition: all 0.3s ease-in;
                    //  transform: translateY(-100px);
                 }
                
             }

              img{
              height:100%;
              width: 100%;
              border-radius: 2px;
              }

                .info{
                 width: 100%;
                 padding:10px;
                 font-size: 18px;
                 background: #000;
                 color: #fff;
                 outline: none;
                 border: 1px solid #ccc;
                 text-align: center;
                 transition: background-color 0.3s ease-in;
                 cursor: pointer;

                  &:hover{
                      color: #FFF;
                     background-color: #ffbc00;
                    }
                        
                }
            }

         }
    }



@media(max-device-width:450px){

.home{

    &-heading{
      width:100%;
      h1{
          padding: 10px 0;
          margin-bottom: 10px ;
          font-size: 20px;
      }
    }

    .meals{
       grid-template-columns: 1fr;
       margin-top: 50px;
     }  
   }

   .sortingBox{
    
    // margin: 30px 40px;
    // position: relative;
    font-size: 16px;
  }


}


@media(min-device-width:450px) and (max-device-width:769px){

    .home{
      &-heading{
        width: 100%;

        h1{
           padding: 10px 0;
           margin-bottom: 10px ;
           font-size: 22px;
          }
      }


      .meals{
        grid-template-columns: 1fr;
        margin-top: 50px;
      }
    }

}


@media(min-device-width:770px) and (max-device-width:1024px){
  .home{
      &-heading{
        width: 100%;

        h1{
           padding: 10px 0;
           margin-bottom: 10px ;
           font-size: 22px;
          }
      }


      .meals{
        grid-template-columns: repeat(2,1fr);
        margin-top: 50px;
      }
    }
}

</style>