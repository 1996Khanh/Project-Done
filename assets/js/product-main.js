
//product js
$(document).ready(function(){
  $('.all_list').click(function(){
      $(this).toggleClass('clicked');
  });
});
$(document).ready(function(){
  $('.breads_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.breads_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.patries_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.patries_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.cookies_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.cookies_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.cupcakes_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.cupcakes_list').toggle('300');
  });
});

$(document).ready(function(){
  $('.coffee_show_list').click(function(){
      $(this).toggleClass('clicked');
      $('.coffee_list').toggle('300');
  });
});
$(document).ready(function(){
  $('.merchandise_show_list').click(function(){
      $(this).toggleClass('clicked');
  });
});

$(function() {
  var _pageSize = 9;
  var currentPage = 1;

  // 9, 11 > 2
  // 3, 11 > 4
  // 5, 11 > 3

  var cakeList = [
      { id: 1, name: 'Bagel white bread', type: 'White bread', price: 10000, image: '/assets/imgs/products/bagel white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save1', data_target: '.product-1' },
      { id: 2, name: 'Baguette white bread', type: 'White bread', price: 15000, image: '/assets/imgs/products/Baguette white bread.jfif', filter: ' filterDiv whitebread', action2: 'button save2', data_target: '.product-2' },
      { id: 3, name: 'Brioche white bread', type: 'White bread', price: 30000, image: '/assets/imgs/products/Brioche white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save3', data_target: '.product-3' },
      { id: 4, name: 'Challah white bread', type: 'White bread', price: 40000, image: '/assets/imgs/products/challah white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save4', data_target: '.product-4' },
      { id: 5, name: 'Ciabatta white bread', type: 'White bread', price: 50000, image: '/assets/imgs/products/ciabatta white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save5', data_target: '.product-5' },
      { id: 6, name: 'Focaccia white bread', type: 'White bread', price: 60000, image: '/assets/imgs/products/Focaccia white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save6', data_target: '.product-6' },
      { id: 7, name: 'Pita white bread', type: 'White bread', price: 70000, image: '/assets/imgs/products/pita bread white bread1.jpg', filter: ' filterDiv whitebread', action2: 'button save7', data_target: '.product-7' },
      { id: 8, name: 'Sourdough white bread', type: 'White bread', price: 80000, image: '/assets/imgs/products/sourdough white bread.jpg', filter: ' filterDiv whitebread', action2: 'button save8', data_target: '.product-8' },
      { id: 9, name: 'Borodinski wheat bread', type: 'wheat bread', price: 90000, image: '/assets/imgs/products/Borodinski wheat bread.jpg', filter: ' filterDiv wheatbread', action2: 'button save9', data_target: '.product-9' },
      { id: 10, name: 'Rugbord wheat bread', type: 'wheat bread', price: 10000, image: '/assets/imgs/products/rugbord wheat bread.webp', filter: ' filterDiv wheatbread', action2: 'button save10', data_target: '.product-10' },
      { id: 11, name: 'Whole wheat bread', type: 'wheat bread', price: 10000, image: '/assets/imgs/products/whole wheat bread.jpeg', filter: ' filterDiv wheatbread', action2: 'button save11', data_target: '.product-11' },
      { id: 12, name: 'Chocolate Croissant', type: 'Croissant', price: 10000, image: '/assets/imgs/products/Chocolate Croissant.webp', filter: ' filterDiv quickview12', action2: 'button save12', data_target: '.product-12' },
      { id: 13, name: 'Nutella croissant', type: 'Croissant', price: 10000, image: '/assets/imgs/products/nutella croissant.png', filter: ' filterDiv quickview13', action2: 'button save13', data_target: '.product-13' },
      { id: 14, name: 'Strawberry croissant', type: 'Croissant', price: 10000, image: '/assets/imgs/products/strawberry croissant.jpg', filter: ' filterDiv quickview14', action2: 'button save14', data_target: '.product-14' },
      { id: 15, name: 'Paleo breadsticks', type: 'Breadstick', price: 10000, image: '/assets/imgs/products/Paleo breadsticks.webp', filter: ' filterDiv quickview15', action2: 'button save15', data_target: '.product-15' },
      { id: 16, name: 'Fluffy Garlic Butter Breadsticks', type: 'Breadstick', price: 10000, image: '/assets/imgs/products/Fluffy Garlic Butter Breadsticks.webp', filter: ' view button filterDiv quickview16', action2: 'button save16', data_target: '.product-16' },
      { id: 17, name: 'PROSCIUTTO WRAPPED BREADSTICKS', type: 'Breadstick', price: 10000, image: '/assets/imgs/products/PROSCIUTTO WRAPPED BREADSTICKS.jpg', filter: 'filterDiv quickview17', action2: 'button save17', data_target: '.product-17' },
      { id: 18, name: 'Cheese Bun', type: 'Bun', price: 10000, image: '/assets/imgs/products/Cheese Bun.png', filter: ' filterDiv quickview18', action2: 'button save18', data_target: '.product-18' },
      { id: 19, name: 'Hamburger Bun', type: 'Bun', price: 10000, image: '/assets/imgs/products/Hamburger Bun.webp', filter: ' filterDiv quickview19', action2: 'button save19', data_target: '.product-19' },
      { id: 20, name: 'Onion Bun', type: 'Bun', price: 10000, image: '/assets/imgs/products/Onion Bun.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-20' },
      { id: 21, name: 'Hot Dog Bun', type: 'Bun', price: 10000, image: '/assets/imgs/products/Hot Dog Bun.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-21' },
      { id: 22, name: 'Hot Cross Buns', type: 'Bun', price: 10000, image: '/assets/imgs/products/Hot Cross Buns.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-22' },
      { id: 23, name: 'Pecan Pie', type: 'Pie', price: 10000, image: '/assets/imgs/products/Pecan Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-23' },
      { id: 24, name: 'Apple Pie', type: 'Pie', price: 10000, image: '/assets/imgs/products/Apple Pie.jpeg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-24' },
      { id: 25, name: 'Cherry Pie', type: 'Pie', price: 10000, image: '/assets/imgs/products/Cherry Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-25' },
      { id: 26, name: 'Pumpkin Pie', type: 'Pie', price: 10000, image: '/assets/imgs/products/Pumpkin Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-26' },
      { id: 27, name: 'Key Lime Pie', type: 'Pie', price: 10000, image: '/assets/imgs/products/Key Lime Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-27' },
      { id: 28, name: 'Cheesecake pie', type: 'Pie', price: 10000, image: '/assets/imgs/products/Cheesecake pie.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-28' },
      { id: 29, name: 'Sugar Cream Pie', type: 'Pie', price: 10000, image: '/assets/imgs/products/Sugar Cream Pie.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-29' },
      { id: 30, name: 'frøsnapper', type: 'Danishes', price: 10000, image: '/assets/imgs/products/frøsnapper.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-30' },
      { id: 31, name: 'HINDBÆRSNITTER', type: 'Danishes', price: 10000, image: '/assets/imgs/products/HINDBÆRSNITTER.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-31' },
      { id: 32, name: 'KANELSNEGL', type: 'Danishes', price: 10000, image: '/assets/imgs/products/KANELSNEGL.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-32' },
      { id: 33, name: 'RABARBERHORNS', type: 'Danishes', price: 10000, image: '/assets/imgs/products/RABARBERHORNS.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-33' },
      { id: 34, name: 'ROMKUGLER', type: 'Danishes', price: 10000, image: '/assets/imgs/products/ROMKUGLER.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-34' },
      { id: 35, name: 'SPANDAUER', type: 'Danishes', price: 10000, image: '/assets/imgs/products/SPANDAUER.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-35' },
      { id: 36, name: 'Nutella Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/products/Nutella Macarons.png', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-36' },
      { id: 37, name: 'Clementine Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/products/Clementine Macarons.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-37' },
      { id: 38, name: 'Meyer Lemon Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/products/Meyer Lemon Macarons.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-38' },
      { id: 39, name: 'Crème Brûlée Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/products/Crème Brûlée Macarons.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-39' },
      { id: 40, name: 'Salted Caramel Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/products/Salted Caramel Macarons.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-40' },
      { id: 41, name: 'Pistachio Macarons', type: 'Macarons', price: 10000, image: '/assets/imgs/products/Pistachio.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-41' },
      { id: 42, name: 'Tomato Chevre Tart', type: 'Tart', price: 10000, image: '/assets/imgs/products/Tomato Chevre Tart.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-42' },
      { id: 43, name: 'Lemon Meringue Tarts', type: 'Tart', price: 10000, image: '/assets/imgs/products/Lemon Meringue Tarts.jpeg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-43' },
      { id: 44, name: 'Chocolate Almond tart', type: 'Tart', price: 10000, image: '/assets/imgs/products/Chocolate Almond tart.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-44' },
      { id: 45, name: 'Berries and Cream Tart', type: 'Tart', price: 10000, image: '/assets/imgs/products/Berries and Cream Tart.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-45' },
      { id: 46, name: 'Simple Blackberry Tart', type: 'Tart', price: 10000, image: '/assets/imgs/products/Simple Blackberry Tart.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-46' },
      { id: 47, name: 'Brown Butter Apple Tart', type: 'Tart', price: 10000, image: '/assets/imgs/products/Brown Butter Apple Tart.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-47' },
      { id: 48, name: 'Strawberry Lemonade Tart', type: 'Tart', price: 10000, image: '/assets/imgs/products/Strawberry Lemonade Tart.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-48' },
      { id: 49, name: 'Profiterole & salted toffee ice cream sandwiches', type: 'Profiterole', price: 10000, image: '/assets/imgs/products/Profiterole & salted toffee ice cream sandwiches.webp', filter: ' quickview19', action2: 'button save19', data_target: '.product-49' },
      { id: 50, name: 'Moreish mocha profiteroles', type: 'Profiterole', price: 10000, image: '/assets/imgs/products/Moreish mocha profiteroles.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-50' },
      { id: 51, name: 'white chocolate profiteroles', type: 'Profiterole', price: 10000, image: '/assets/imgs/products/white chocolate profiteroles.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-51' },
      { id: 52, name: 'Double chocolate profiteroles with salted caramel cream', type: 'Profiterole', price: 10000, image: '/assets/imgs/products/Double chocolate profiteroles with salted caramel cream.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-52' },
      { id: 53, name: 'Eggnog Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/products/Eggnog Snickerdoodles.jpg', filter: ' quickview19', action2: 'button save19', data_target: '.product-53' },
      { id: 54, name: 'Chocolate Chip Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/products/Chocolate Chip Snickerdoodles.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-54' },
      { id: 55, name: 'Biscoff Stuffed Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/products/Biscoff Stuffed Snickerdoodles.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-55' },
      { id: 56, name: 'CINNAMON CHIP SNICKERDOODLES', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/products/CINNAMON CHIP SNICKERDOODLES.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-56' },
      { id: 57, name: 'Cheesecake Filled Snickerdoodles', type: 'Snickerdoodles', price: 10000, image: '/assets/imgs/products/Cheesecake Filled Snickerdoodles.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-57' },
      { id: 58, name: 'Chocolate Chip & Cookie Butter Thumbprints', type: 'Chocolate Chip Cookies', price: 10000, image: '/assets/imgs/products/Chocolate Chip & Cookie Butter Thumbprints.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-58' },
      { id: 59, name: 'Cinnamon White & Dark Chocolate Chip Cookies', type: 'Chocolate Chip Cookies', price: 10000, image: '/assets/imgs/products/Cinnamon White & Dark Chocolate Chip Cookies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-59' },
      { id: 60, name: 'DoubleDelights chocolate chip cookies', type: 'Chocolate Chip Cookies', price: 10000, image: '/assets/imgs/products/DoubleDelights chocolate chip cookies.jpg.opdownload', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-60' },
      { id: 61, name: 'Shortbread Cookies', type: 'Shortbread Cookies', price: 10000, image: '/assets/imgs/products/Shortbread Cookies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-61' },
      { id: 62, name: 'Shortbread Diamond Jammies', type: 'Shortbread Cookies', price: 10000, image: '/assets/imgs/products/Shortbread Diamond Jammies.jpg', filter: ' quickview19', action2: 'button save19', data_target: '.product-62' },
      { id: 63, name: 'Bajillionaire Shortbread', type: 'Shortbread Cookies', price: 10000, image: '/assets/imgs/products/Bajillionaire Shortbread.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-63' },
      { id: 64, name: 'Red Velvet Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/products/Red Velvet Whoopie Pies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-64' },
      { id: 65, name: 'Old-Fashioned Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/products/Old-Fashioned Whoopie Pies.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-65' },
      { id: 66, name: 'Chocolate Dream Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/products/Chocolate Dream Whoopie Pies.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-66' },
      { id: 67, name: 'Lemon Blueberry Whoopie Pies', type: 'Whoopie Pies', price: 10000, image: '/assets/imgs/products/Lemon Blueberry Whoopie Pies.jpg',filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-67' },
      { id: 68, name: 'Cinnamon Cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/products/Cinnamon Cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-68' },
      { id: 69, name: 'Key lime Cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/products/Key lime Cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-69' },
      { id: 70, name: 'standard cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/products/standard cupcake.webp', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-70' },
      { id: 71, name: 'Lotus cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/products/lotus standard cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-71' },
      { id: 72, name: 'Tulip cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/products/tulip standard cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-72' },
      { id: 73, name: 'Cookies and Cream Cupcake', type: 'Cupcake', price: 10000, image: '/assets/imgs/products/Cookies and Cream Cupcake.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-73' },
      { id: 74, name: 'Bag', type: 'Merchandise', price: 10000, image: '/assets/imgs/products/Merchandise bag.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-74' },
      { id: 75, name: 'Glasses', type: 'Merchandise', price: 10000, image: '/assets/imgs/products/Merchandise glasses.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-75' },
      { id: 76, name: 'Bottle', type: 'Merchandise', price: 10000, image: '/assets/imgs/products/Merchandise bottle.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-76' },
      { id: 77, name: 'Mug', type: 'Merchandise', price: 10000, image: '/assets/imgs/products/Merchandise mug.jpg', filter: 'filterDiv quickview19', action2: 'button save19', data_target: '.product-77' }, 
  ];

  var _tmpElement = $('.P_Img.item_template');

  // pagination
  function loadData(pageNumber) {
      $('.P_Img_list .row .P_Img:not(.item_template)').remove();

      // 1-0>8
      // 2-9>17
      // 3-18>26
      var startFrom = (pageNumber - 1) * _pageSize;
      var endAt = startFrom + _pageSize - 1;

      $.each(cakeList, function(index, cake) {
          if (index >= startFrom && index <= endAt){

              // create a new element from a template
              var newItemElement = _tmpElement.clone();
              newItemElement.removeClass('item_template');
              
              // update data into element
              $('img', newItemElement).attr('src', cake.image);
              $('.P_Img_description_container', newItemElement).attr('class', cake.filter);
              $('.P_Img_inner .save', newItemElement).attr('class', cake.action2);
              $('.P_Img_inner .view', newItemElement).attr('data-target', cake.data_target);
              $('.P_Img-type', newItemElement).text(cake.type);
              $('.P_Img-name', newItemElement).text(cake.name);
              $('.P_Img-price', newItemElement).text(cake.price);
              
              // Insert element into the page
              $('.P_Img_list .row').append(newItemElement);
          }
      });

      $('.P_list_currentPageNumber').text(pageNumber);
  };

  $('.P_list_previous').on('click', function() {
      if (currentPage > 1) {
          currentPage--;
          loadData(currentPage);
      }
  });

  $('.P_list_next').on('click', function() {
      var lastPageNumber = Math.ceil(cakeList.length / _pageSize);
      if (currentPage < lastPageNumber) {
          currentPage++;
          loadData(currentPage);
      }
  });

  loadData(1);
});

function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

// var btn = document.querySelector(".submit-btn button");
// var post = document.querySelector(".post");
// var widget = document.querySelector(".star-widget");
// var editBtn = document.querySelector(".edit");
// btn.onclick = ()=>{
//   widget.style.display = "none";
//   post.style.display = "block";
//   editBtn.onclick = ()=>{
//     widget.style.display = "block";
//     post.style.display = "none";
//   }
//   return false;
// }

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
  // loadData()
}

