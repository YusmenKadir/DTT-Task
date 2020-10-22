<template>
    <div class="details">
       <div class="item-details" v-for="item in mealsArr" :key="item.idMeal">
          <div class="item-image" v-if="mealId == item.idMeal">
              <img :src="item.strMealThumb">
                <h2>{{item.strMeal}}</h2>
                <h3>{{item.strArea}}</h3>
                <a class="btn btn-view-onYoutube" :href="item.strYoutube" target = "_blank">View How to Cook on Youtube</a>
                    <h2>See also</h2>
                <div class="relevant-items">
                    <div class="box">
                      <img :src="mealsArr[2].strMealThumb" class="rel-item-img">
                       <h3>{{mealsArr[2].strMeal}}</h3>
                    </div>
                    <div class="box">
                       <img :src="mealsArr[5].strMealThumb" class="rel-item-img">
                       <h3>{{mealsArr[5].strMeal}}</h3>
                    </div>
                    <div class="box">
                       <img :src="mealsArr[9].strMealThumb" class="rel-item-img">
                       <h3>{{mealsArr[9].strMeal}}</h3>
                    </div>
                 
                </div>
           </div>
           <div class="item-info" v-if="mealId == item.idMeal">
               <div class="instructions">
                    <h2>Instructions</h2>
                    <p>{{item.strInstructions}}</p>
               </div>

               <div class="ingredients">
                    <h2>Ingredients</h2>
                      <ul>
                         <li v-for="(ingredient,index) in ingredients" :key="index">{{ingredient}}</li>
                     </ul>
               </div>
           </div>
       </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 
  data(){
    return{
        mealsArr:[] as Array<object>,
        URL:'https://www.themealdb.com/api/json/v1/1/search.php?s=potato' as string,
        mealId :this.$route.params.productId as string,
        ingredients:[] as string[],
    }
  },

    methods:{
      fetchMeal(): void{
            fetch(this.URL)
            .then(res =>res.json())
            .then(data => data.meals.forEach((meal)=>{  
                this.mealsArr.push(meal);
                this.addIngredients(meal);
            }));

        },

        

        

        addIngredients(meal): void{
            for (let i = 1; i < 20; i++) {
              if(meal.idMeal == this.mealId){
                   if (meal[`strIngredient${i}`]) {
			        this.ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
		            } else {
			          break;
                    }
                }
		    
            }

           
        }

    },

    mounted(): void{
        this.fetchMeal();
    }
});
</script>


<style lang="scss">
.details{
    background: #000;
    color:#fff; 
    height: auto;
    width: 100%;


    .item-details{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        padding-top: 10px;
        


        .item-image{
            text-align: center;
            flex:1;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            h2{
                margin: 15px 0;
            }
            h3{
                margin: 20px 0;
            }

            .btn-view-onYoutube{
                font-size: 18px;
                padding: 10px;
                border: 1px solid rgba(#ccc,0.8);
                border-radius: 5px;
                transition: all 0.3s ease-in;
                margin: 10px 0px;

                &:hover{
                    border-color: #ffbc00;
                }
            }
            img{
               width: 300px;
               height: 300px;
               border: 1px solid rgba(#ccc,0.8);
               transition: border-color 0.3s ease-in;
               cursor: pointer;

               &:hover{
                   transform: scale(1.1);
                   border-color: #ffbc00;
               }
            }

            .relevant-items{
                
                // display: flex;
               
                h2{
                
                }

                .box{
                   .rel-item-img{
                       width: 150px;
                       height:150px;
                   }
                }
            }
           
        }
    }
        
    

    .item-info{
          display: flex;
          flex-direction: column;
          flex: 1;
        .instructions{
          padding: 10px;
          h2{
              text-align: center;
              padding: 10px 0px;
          }
        }

        .ingredients{
            h2{
                text-align: center;
                padding: 10px 0px;
            }

            ul{
                list-style: none;
            }

            ul li {
                background-color: rgba(lighten($color: #000000, $amount: 10),0.3);
                border:1px solid rgba(#ccc,0.3);
                margin: 5px auto;
                padding: 5px;
                text-align: center;
                width: 50%;
            }
        }
    }
}



//small devices
@media  (max-device-width:450px){
    .details{
        .item-details{
            flex-wrap: wrap;

            .item-image{
                .relevant-items{

                    .box{

                    }
                }
            }


            .item-info{

                .instructions{
                   text-align: center;
                }


                .ingredients{
                  ul li{
                      width: 80%;
                  }
                }
            }
        }
    }
}

@media(min-device-width:450px) and (max-device-width:769px){
  .details{
        .item-details{
            display: grid;
            grid-template-columns: 1fr;

            .item-image{
                .relevant-items{

                    .box{

                    }
                }
            }


            .item-info{

                .instructions{
                   text-align: center;
                }


                .ingredients{
                  ul li{
                      width: 80%;
                  }
                }
            }
        }
    }
}


</style>