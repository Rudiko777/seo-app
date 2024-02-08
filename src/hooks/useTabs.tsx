import React from "react";
import {ITabsContext} from "@/components/ui/Tabs/Tabs.props";
import {TabsContext} from "@/components/ui/Tabs/Tabs";

export const useTabs = (): ITabsContext => {
    const context = React.useContext(TabsContext);
    if (!context) {
        throw new Error('This component must be used within a <Tabs> component.');
    }
    return context;
};