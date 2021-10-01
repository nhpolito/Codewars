function queueTime(customers, n) {
    let queues = Array.from({length: n}).fill(0);

    console.log(queues)
  
    let totalTimeSpent = 0;
    for (const customer of customers) {
      // find the next open queue and assign the customer to that queue
      let emptyQueueIndex = queues.findIndex(queue => queue === 0);
      console.log(queues)
      console.log(emptyQueueIndex)
      
      // if there are no empty queues, subtract the shortest customer's queue
      // time from all queues
      if (emptyQueueIndex < 0) {
        const minTime = Math.min(...queues);
        console.log(`minTime = ${minTime}`)
        queues = queues.map((queue, index) => queue - minTime);
        emptyQueueIndex = queues.findIndex(queue => queue === 0);
        // log the progressed time to our total time spent
        totalTimeSpent += minTime;
      }
      console.log(`total time spent = ${totalTimeSpent}`)
      queues[emptyQueueIndex] = customer;
    }
    // the longest value in the queue now determines how much additional time it will
    // take to clear all queues
    console.log(queues)
    return totalTimeSpent + Math.max(...queues);
  }

  console.log(queueTime([10,3,3,2],2))