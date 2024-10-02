// Enter your code below.
document.addEventListener("DOMContentLoaded", function() {
    const showResourcesBtn = document.getElementById('show-resources');
    const resourcesDiv = document.querySelector('.javascript-resources');
    const resourceItems = document.querySelectorAll('.list-group-item');  
    showResourcesBtn.addEventListener('click', function() {
      resourcesDiv.classList.remove('d-none');
    });

    resourceItems.forEach(item => {
      item.addEventListener('mouseover', function(event) {
        if (event.currentTarget.classList.contains('list-group-item')) {
          event.currentTarget.classList.add('fw-bold');
        }
      });

      item.addEventListener('mouseout', function(event) {
        if (event.currentTarget.classList.contains('list-group-item')) {
          event.currentTarget.classList.remove('fw-bold');
        }
      });

      item.addEventListener('click', function(event) {
        if (event.currentTarget.classList.contains('list-group-item')) {
          event.currentTarget.classList.toggle('fst-italic');
        }
      });
    });
  });