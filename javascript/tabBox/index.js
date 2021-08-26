$('.tabs').each(function () {
  var $tabs = $(this),
    $tabItem = $tabs.children('.tabs__item'),
    $tabBody = $tabs.children('.tabs__body'),
    $tabContent = $tabBody.children('.tabs__content');

  $tabItem.click(function () {
    var $currentTab = $(this);

    $tabContent.addClass('tabs__content--hidden');
    $tabItem.removeClass('tabs__item--active');

    setTimeout(function () {
      $currentTab.addClass('tabs__item--active');
    }, 200);

    setTimeout(function () {
      $tabContent.removeClass('tabs__content--hidden');
    }, 500);
  });
});
