const link = document.getElementById('my-link');
link.addEventListener('mousedown', function(event) {
  event.preventDefault();
  link.blur();
});

// 固定数组
var suggestions = ["赛马娘手办", "初音未来", "明日方舟周边", "英雄联盟手办", "少女前线周边"];

// 获取输入框和下拉列表
var input = document.getElementById("query");
var dropdown = document.createElement("ul");
dropdown.classList.add("dropdown");

// 监听输入框的oninput事件
input.oninput = function() {
  // 清空下拉列表
  dropdown.innerHTML = "";
  // 获取输入框的值
  var value = input.value;
  // 如果输入框的值为空，则隐藏下拉列表
  if (value === "") {
    dropdown.style.display = "none";
    return;
  }
  // 遍历固定数组，将匹配到的结果添加到下拉列表中
  for (var i = 0; i < suggestions.length; i++) {
    if (suggestions[i].indexOf(value) === 0) {
      var li = document.createElement("li");
      li.innerHTML = suggestions[i];
      dropdown.appendChild(li);
    }
  }
  // 如果下拉列表中有匹配到的结果，则显示下拉列表
  if (dropdown.childNodes.length > 0) {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
};

// 将下拉列表添加到页面中
input.parentNode.appendChild(dropdown);