import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it('renders without crashing', () => {
    render(
        <Card 
            caption="string describing the image"
            src="testCard1"
            currNum={0}
            totalNum={1}    
        />
    ) 
})

// need to create a snapshot
it('should match snapshot', () => {
    const {asFragment} = render(
                            <Card 
                            caption="string describing the image"
                            src="testCard1"
                            currNum={0}
                            totalNum={1}  
                            />
                        );
    expect(asFragment()).toMatchSnapshot();
})
