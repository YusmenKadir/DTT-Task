<template>
  <div id="app">
      <!-- Navbar -->
      <nav class="main-nav">
        <div class="nav-heading">
          <h1>Meals <span class="txt-primary">Application</span></h1>
        </div>
        <div class="nav-links">
          <router-link to="/" class="link-item link-item-home" active-class="active" exact>Home</router-link>
          <router-link to="/categories" class="link-item link-item-categories"  active-class="active" exact>Categories</router-link>
          <router-link to="/random" class="link-item link-item-random"  active-class="active" exact>Random</router-link>
        </div>
      </nav>

      <div class="container">
        <transition name="moveInUp">
          <router-view></router-view>
        </transition>
      </div>
      <!-- Footer -->
      <footer class="main-footer">
        <p>Meals Application 2020 &copy;</p>
        <div class="footer-links"> 
          <router-link to="/"  class="link-item link-item-home">Home</router-link>
          <router-link to="/categories" class="link-item link-item-home">Categories</router-link>
          <router-link to="/random" class="link-item link-item-home">Random</router-link>
        </div>
      </footer>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
 
  data(){
    return{
    
    }
  },

  methods:{
    
  }
});
</script>

<style lang="scss">
*{
  padding: 0;
  margin:0;
  box-sizing: border-box;
}



a{
  text-decoration: none;
  color: #fff;
}


 #app{
   font-family: 'Roboto',sans-serif;
   width: 100%;
   height: auto;

  h1{
    color: #fff;
  }

    .main-nav{  
     background-color: #000;
     width: 100%;
     height:10vh;
     display: flex;
     justify-content: space-between;
     align-items: center;
     align-content: center; 
     position: sticky;
     top: 0;
     z-index: 10;
     border-bottom: 2px solid rgba(#ccc,0.5);

      .nav-heading{
       font-size: 25px;
          h1{
            color: #fff;
             margin-left: 20px;
            .txt-primary{
              color :#ffbc00;
            }
          }
      }

    .nav-links{
       .link-item{
          font-size:20px;
          padding: 10px;
          margin: 0px 5px;
          background:  rgba(lighten($color:#000, $amount: 20),0.8);
          border-radius: 5px;
       }
      }

      .active{
         color: #ffbc00 ;
      }

  }

 
  
  .main-footer{
    background: #000;
    color: #fff;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    font-size: 18px;
    text-align: center;
     border-top: 2px solid rgba(#ccc,0.5);

    p{
      padding-top: 10px ;
    }
    
     .footer-links{
       display: flex;
       padding: 5px;
       text-align: center;

       .link-item{
         margin: 10px 50px;
        }
      }
    

  }


    .moveInUp-enter-active{
     animation: fadeIn 1s ease-in;
    }
    @keyframes fadeIn{
      0%{
       opacity: 0;
      }
      50%{
        opacity: 0.5;
      }
       100%{
       opacity: 1;
       }
 
    }
}

//SMALL SCREENS
@media(max-device-width:450px){
  #app{  
  .main-nav{
    z-index: 50;
    flex-direction: column;
    height: 15vh;
   .nav-heading{
       
        text-align: center;
      h1{
        font-size: 24px;
        margin: 0;
        padding: 10px 0;
       
      }
    }
    

    .nav-links{
      //  text-align: center;
      //  display: flex;
      //  justify-content: center;
      //  align-items: center;
       padding-bottom: 10px;
       margin: 0;
       font-size: 16px;

       .link-item{
         padding: 4px;
         margin:5px 5px;
       }
    }



  }

  .main-footer{
    height: 20vh;
    font-size: 16px;
    .footer-links{
       padding: 0;
       
      .link-item{
        margin: 0 5px;
        padding: 0;
      }
    }
  }


  }




     .random{
        &-heading{
          width: 100%;
            h1{
              font-size: 18px;
            }
        }


        &-item{
            flex-wrap: wrap;
            .item-img{

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

//MEDIUM SCREENS
@media(min-device-width:450px) and (max-device-width:769px){
    #app{
       .main-nav{
          z-index: 50;
          flex-direction: column;
          height: 15vh;
            .nav-heading{
       
              text-align: center;
             h1{
               font-size: 24px;
               margin: 0;
               padding: 10px 0;
             }

            }

            .nav-links{
              padding-bottom: 10px;
               margin: 0;
               font-size: 18px;
                .link-item{
                   padding: 5px;
                   margin: 5px 10px;
                    font-size: 18px;
                 }
            }

        }




  //app end
    }

//media query end
}


 





</style>

