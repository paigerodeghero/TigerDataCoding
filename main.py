# file to run when we want to start the web server
from website import create_app

app = create_app()

if __name__ == '__main__': # only execute below line when we run main and not when we import it
    app.run(debug = True) # any change made to python code the server is automatically restarted
