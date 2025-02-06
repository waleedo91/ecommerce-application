Module 6 Ecommerce Application. 

My Ecommerce Application revolves around electronics. Phones and Watches for now and will become bigger later. Minimal features at the moment. 

I created a json folder with all products that are currently in inventory and used json webserver to serve the data to my front end application. 

Using a json folder is a great placeholder for being able to place data into a front end application in case I create my own backend application. 

How to use and why I went that route. 

- I first created my own fetch hook to be able to GET a specific product for the product item page. I could have went into further depth 
to make the fetch hook much better but at the moment the bare minimum.

- Created routes to be able to catch the parameter id which is the product id of itself. That way I am able to make a fetch request to 
the json folder and get the specific item based on its ID. 

- You can see that I used useState in my fetch hook and also Props in the Products List component. 

*** !! IMPORTANT !! *** 

- To be able to use the json folder. Open a separate terminal besides the one you have your react server running on and type in the following
in the same directory as the application. 
    
    -- npx json-server --watch {{Name of the folder json folder is in}} --port {{ Whatever port you decide to run on}}

    EX: npx json-server --watch data/products.json --port 8000

    -- This command will run my json folder as if it was a created api and run the folder on server 8000. 
