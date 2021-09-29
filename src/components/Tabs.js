import React, { useState } from "react";
import styled from "styled-components";


export const TabsContainer = styled.div`
 overflow: hidden;
 background: #ffff;
 height: 100%;
 max-width:98%;
 min-width:98%;
`;
const TabButtonContainer = styled.div`
 margin-top: 1em;
 display: flex;
 > * {
 flex: 1 1 0;
 max-width: 10em;
 }
`;
export const Tab = styled.button`
 border: none;
 outline: none;
 cursor: pointer;
 position: relative;
 font-size: 1em;
 border-bottom: none;
 height: 3em;
 border: ${(props) => (props.active ? "" : "1px solid #ccc")};
 background-color: ${(props) =>
        props.active ? props.theme.primary.main : "#fff"};
 color: ${(props) => props.theme.primary.textColor};
 border-top-left-radius: 1em;
 border-top-right-radius: 1em;
 &:hover {
 background-color: ${(props) => props.theme.primary.move};
 }
`;
export const TabContent = styled.div`
 border: 0.25em solid ${(props) => props.theme.primary.main};
 border-top: 0.5em solid ${(props) => props.theme.primary.main};
 border-bottom-left-radius: 1em;
 border-top-right-radius: 1em;
 border-bottom-right-radius: 1em;
 height: 80vh;

`;
export const Content = styled.div`
 ${(props) => (props.active ? "" : "display:none")};
`;
export default function Tabs(props) {
    const { contents } = props;
    const [active, setActive] = useState(0);
    const activeTab = (event) => {
        const index = parseInt(event.target.id, 0);
        if (index !== active) {
            // console.log(index);
            setActive(index);
        }
    };
    return (
        <TabsContainer>
            <TabButtonContainer>
                {contents.map((content, index) => (
                    <Tab onClick={activeTab} active={active === index} id={index} key={index}>
                        {content.title}
                    </Tab>
                ))}
            </TabButtonContainer>
            <TabContent>
                {contents.map((content, index) => (
                    <Content active={active === index} id={index} key={index}>
                        {content.elements}
                    </Content>
                ))}
            </TabContent>
        </TabsContainer>
    );
}