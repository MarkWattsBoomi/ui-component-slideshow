# Slideshow

A component that can displays a list of pictures from a list and rotating between them at a configurable interval.


## Setup

- Grab the files from the /dist folder and import into your tenant.

- Add the files to your player code like this: -

        requires: ['core', 'bootstrap3'],
        customResources: [
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/Slideshow.css',
                'https://s3.amazonaws.com/files-manywho-com/tenant-id/Slideshow.js'
                ],


- Add a component to your page, any type, save it then change it's "componentType" to "Slideshow" in the metadata editor and save it.
e.g. 
            "componentType": "Slideshow",

        

- Create a new type called "SlideshowItem" which has a string property called "Link".

- Create a new List value of type  SlideshowItem and populate it with a list of url's to images - maybe from the assets folder - full url including http(s):// etc. 

- Set the component's "DataSource" to a the new List Value. 


## Extra Configuration

You can add attributes to the component to control it's appearance: -

- Interval      The number of seconds between image transitions 

