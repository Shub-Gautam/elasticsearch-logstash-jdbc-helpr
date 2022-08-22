var client = require("./connection.js");

client.cluster.health({}, function (err, resp, status) {
  console.log("-- Client Health --", resp);
});

client.search(
  {
    index: "demoindex",
    body: {
      query: {
        match: { jobname: "job2" },
      },
    },
  },
  function (error, response, status) {
    if (error) {
      console.log("search error: " + error);
    } else {
      console.log("--- Response ---");
      console.log(response);
      console.log("--- Hits ---");
      response.hits.hits.forEach(function (hit) {
        console.log(hit);
      });
    }
  }
);
