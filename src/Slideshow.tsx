
declare var manywho: any;

import * as React from 'react';
import './Slideshow.css';

class Slideshow extends React.Component<any, any> 
{   
    componentId: string = "";
    flowKey: string ="";    
    attributes : any = {};
    selectedItem: string = null;

    text : string = "";

    imageArray : any = [];
    imageArrayPos = 0;
    timer : any = null;

    constructor(props : any)
	{
        super(props);
        
        this.componentId = props.id;
        this.flowKey = props.flowKey;

        //push attributes into keyed map 
		var flowModel = manywho.model.getComponent(this.props.id,   this.props.flowKey);
		if(flowModel.attributes)
		{
			for(var key in flowModel.attributes)
			{
				this.attributes[key] = flowModel.attributes[key];
			}
        }
    }

    
    componentDidMount() 
    {

        const flowModel = manywho.model.getComponent(this.componentId,   this.flowKey);
        const flowState = manywho.state.getComponent(this.componentId,   this.flowKey);

        //get the data
        this.imageArray = flowModel.objectData;

        var interval = this.getAttribute("Interval") || 5


        this.timer = window.setInterval(this.timerFired.bind(this), interval * 1000);
        this.forceUpdate();
    }

    timerFired()
    {
        if(this.imageArrayPos < this.imageArray.length -1)
        {
            this.imageArrayPos++;
        }
        else
        {
            this.imageArrayPos=0;
        }
        this.forceUpdate();
    }

    componentDidUpdate()
    {

    }

	getAttribute(attributeName : string)
	{
		if(this.attributes[attributeName])
		{
			return this.attributes[attributeName];
		}
		else
		{
			return null;
		}
	}

       
    render()
    {
        var content : any = null;
        
        if(this.imageArray && this.imageArray.length > 0)
        {
            var image = this.imageArray[this.imageArrayPos];
            var src = manywho.utils.getObjectDataProperty(image.properties,"Url").contentValue;

            content = <img src={src} height="300px"></img>
            
        }
       

        return <div className="slideshow">{content}</div>
    }
}

manywho.component.register('Slideshow', Slideshow);

export default Slideshow;