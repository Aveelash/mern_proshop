import express from "express";
const router = express.Router();
import {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
} from "../controllers/orderController.js";
import { protect, admin } from "../middleware/authMiddleware.js";

// POST /api/orders (create) & GET /api/orders (admin only)
router.route("/").post(protect, addOrderItems).get(protect, admin, getOrders);

// GET /api/orders/mine
router.route("/mine").get(protect, getMyOrders);

// More specific routes first
router.route("/:id/pay").put(protect, updateOrderToPaid);
router.route("/:id/deliver").put(protect, admin, updateOrderToDelivered);

// GET /api/orders/:id
router.route("/:id").get(protect, getOrderById);

export default router;
