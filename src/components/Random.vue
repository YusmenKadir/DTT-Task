<template>
    <div class="random">
        <div class="random-heading">
            <h1>Have a look at this random meal...</h1>
        </div>
       
        <div class="random-item" v-for="item in randomMeal" :key="item.idMeal">
            <div class="item-img">
                <img :src="item.strMealThumb">
                <h2>{{item.strMeal}}</h2>
                <h3>{{item.strArea}}</h3>
                <a class="btn btn-view-onYoutube" :href="item.strYoutube" target = "_blank">View How to Cook on Youtube</a>
                 <button class="random-btn" @click="fetchAnotherMeal">Generate Another Meal</button>
            </div>
            <div class="item-info">
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
      randomMeal:[] as Array<object>,
      ingredients:[] as string[],
      URL : 'https://www.themealdb.com/api/json/v1/1/random.php' as string, 
    }
  },

  methods:{
      fetchMeal(): void {
          fetch(this.URL)
          .then(res=>res.json())
          .then(data=> data.meals.forEach((meal)=>{
              this.randomMeal.push(meal);
              this.addIngredients(meal);
          }));
      },

      addIngredients(meal){
          for(let i = 1; i<20;i++){
              if(meal[`strIngredient${i}`]){
                  this.ingredients.push(`${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`);
              }else{
                  break;
              }
          }
      },

      fetchAnotherMeal(): void{
          this.randomMeal = []
          this.ingredients = []
          this.fetchMeal();
      }


    },

  mounted(): void{
      this.fetchMeal();
  }
     
})
</script>




<style lang="scss">
 .random{
    background: #000;
    color:#fff; 
    height: auto;
    width: 100%;
    position: relative;

    &-heading{
            text-align: center;
             margin: 0 auto;
             width: 50%;

         h1{
              padding: 20px 0 ;
              background: rgba(lighten($color: #000000, $amount: 10),0.8);
          }
    }


    &-item{
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        margin-top: 50px;

        .item-img{
            text-align: center;
            flex:1;
            flex-direction: column;
            height: auto;

            h2{
             margin: 10px 0;
            }

            h3{
             margin:20px 0;
            }
             .random-btn{
               // position: absolute;
               // top: 20px;
                 // right: 20px;
                 padding: 10px;
                 background:#000; 
                color: #fff;
                outline: none;
                font-size: 18px;
                border: 1px solid rgba(#ccc,0.8);
                transition: all 0.3s ease-in;
                border-radius: 5px;
                cursor: pointer;
                display: block;
                margin: 10px auto;
                

                     &:hover{
                        border: 1px solid rgba( #ffbc00,0.8);
                    }
            }

            .btn-view-onYoutube{
                font-size: 18px;
                padding: 10px;
                border:  1px solid rgba(#ccc,0.8);
                border-radius: 5px;
                transition: all 0.3s ease-in;
                display: inline-block;

                &:hover{
                    border-color: #ffbc00;
                }
            }
            
            

            img{
                width: 300px;
                height:300px;
                border: 1px solid rgba(#ccc,0.8);
                transition: border-color 0.3s ease-in;
                cursor: pointer;

                &:hover{
                    transform: scale(1.1);
                    border-color: #ffbc00;
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
                    //  display: inline;
                    //  text-align: center;
                   
                }

                ul li {
                  background-color:  rgba(lighten($color: #000000, $amount: 10),0.3);
                  border: 1px solid rgba(#ccc,0.3);
                  margin: 5px auto;
                  padding: 5px;
                  text-align: center;
                  width: 50%;

                }
            }
        }
    }

   


}

@media(min-device-width:450px) and (max-device-width:769px){

 .random{
        &-heading{
          width: 100%;
            h1{
              font-size: 20px;
            }
        }


        &-item{
             display: grid;
             grid-template-columns: 1fr;
            .item-img{
                font-size: 18px;

            }


            .item-info{
                .instructions{
                    text-align: center;

                }

                .ingredients{
                   ul li {
                       width:80%;
                   }
                }
            }
        }


        
    }
}


</style>