import { useState } from 'react';
import ClothingCard from "../ClothingCard/ClothingCard";
import bagImg from '../../assets/images/bag.jpg';
import hatImg from '../../assets/images/hat.jpg';
import overallImg from '../../assets/images/overall.jpg';
import shirtImg from '../../assets/images/shirt.jpg';
import sweatshirtImg from '../../assets/images/sweatshirt.jpg';
import './WardrobeSection.scss';

const WardrobeSection = () => {
    const [inventory, setInventory] = useState([
        { id: 1, image: bagImg, category: "Bag", color: "Green", material: "Polyester", brand: "Decathlon", notes: "Not the best material" },
        { id: 2, image: hatImg, category: "Hat", color: "Beige, Green", material: "Acrylic", brand: "Hoc.Eritis", notes: "Local/independent" },
        { id: 3, image: overallImg, category: "Overalls", color: "Green", material: "Denim", brand: "The Tall Tailor", notes: "One-of-one custom made by friend" },
        { id: 4, image: shirtImg, category: "Shirt", color: "Grey, Black", material: "Denim", brand: "Hoc.Eritis", notes: "One-of-one; upcycled using thrifted jeans" },
        { id: 5, image: sweatshirtImg, category: "Sweatshirt", color: "Brown", material: "Polyester, Elastane", brand: "Shein", notes: "Least sustainable article" },
    ]);

    const [selectedCategory, setSelectedCategory] = useState("All");

    const addClothingItem = () => {
        const newItem = {
            id: inventory.length + 1, 
            image: "", 
            category: "New Item", 
            color: "Unknown", 
            material: "Unknown", 
            brand: "Unknown", 
            notes: ""
        };
        setInventory([newItem, ...inventory]);
    };

    const deleteClothingItem = (id) => {
        setInventory(inventory.filter(item => item.id !== id));
    };

    const updateClothingItem = (id, updatedItem) => {
        setInventory(inventory.map(item => (item.id === id ? updatedItem : item)));
    };

    return (
        <div className="wardrobe-section">
            <h2 className="wardrobe-section__header">Wardrobe Inventory</h2>

            {/* Add New Clothing */}
            <button className="wardrobe-section__add-btn" onClick={addClothingItem}>
                Add Clothing
            </button>
            
            {/* Filter Dropdown */}
            <div className="wardrobe-section__filter">
                <select onChange={(e) => setSelectedCategory(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Bag">Bag</option>
                    <option value="Hat">Hat</option>
                    <option value="Overalls">Overalls</option>
                    <option value="Shirt">Shirt</option>
                    <option value="Sweatshirt">Sweatshirt</option>
                </select>
            </div>

            {/* Inventory List */}
            <div className="wardrobe-section__grid">
                {inventory
                    .filter(item => selectedCategory === "All" || item.category === selectedCategory)
                    .map(item => (
                        <ClothingCard 
                            key={item.id} 
                            item={item} 
                            onDelete={deleteClothingItem} 
                            onUpdate={updateClothingItem} 
                        />
                    ))
                }   
            </div>
        </div>
    );
};

export default WardrobeSection;