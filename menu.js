function isInViewport(element) {
	const rect = element.getBoundingClientRect();
	return (
	  rect.top >= 0 &&
	  rect.left >= 0 &&
	  rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
	  rect.right <= (window.innerWidth || document.documentElement.clientWidth)
	);
  }
  
  // Function to reveal grid items when in viewport
  function revealGridItems() {
	const gridItems = document.querySelectorAll('#static > figure');
	gridItems.forEach(item => {
	  if (isInViewport(item)) {
		item.classList.add('reveal');
	  }
	});
  }
  
  // Event listener for scroll event to reveal grid items
  window.addEventListener('scroll', revealGridItems);
  
  // Initial check on page load
  revealGridItems();


