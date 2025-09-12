import { Request, Response } from "express";
import Menu from "../models/menu.model";

export const getMenuItems = async (req: Request, res: Response) => {
    try {
        const menuItems = await Menu.find();
        if (!menuItems || menuItems.length === 0) {
            return res.status(404).json({ message: "No menu items found" });
        }

        // Group items by category
        const categorizedMenu: Record<string, typeof menuItems> = {};
        menuItems.forEach(item => {
            const category = item.category || "Uncategorized";
            if (!categorizedMenu[category]) {
                categorizedMenu[category] = [];
            }
            categorizedMenu[category].push(item);
        });

        res.status(200).json({ 
            message: "Menu items fetched successfully", 
            data: categorizedMenu 
        });
    } catch (error) {
        res.status(500).json({ message: "Error fetching menu items", error });
    }
};
