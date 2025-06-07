// # Space complexity O(n)
function arrayOfHiNTimes(n) {
    var hiArray = [];
    for (let i = 0; i < n; i++) {
      hiArray[i] = "hi";
    }
    return hiArray;
  }
  
  arrayOfHiNTimes(6);