var mergeTwoLists = function(list1, list2) {
    let list = new ListNode();
    list = list1;
    console.log(list);
    
};

const list1 = {
    val: 1,
    next: {
      val: 2,
      next: {
        val: 4,
        next: null
      }
    }
  };
  
  const list2 = {
    val: 1,
    next: {
      val: 3,
      next: {
        val: 4,
        next: null
      }
    }
  };

  mergeTwoLists(list1, list2)