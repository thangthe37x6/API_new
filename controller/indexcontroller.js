import fucalty from '../model/fucalty.model.js'
import   all_data from '../config/data.js'
class Controllers {
    // Phương thức hiển thị trang index
    static async index(req, res) {
        const page = parseInt(req.query.page) || 1; // Current page
        const pageSize = parseInt(req.query.pageSize) || 10; // Items per page
        let q = req.query.q;
        const re = new RegExp(q, 'i'); // Regular expression for case-insensitive search
        const totalCount = await fucalty.countDocuments(); // Fixed spelling: 'fucalty' to 'faculty'
        let faculties; // Fixed spelling: 'fucaltys' to 'faculties'
        const totalPages = Math.ceil(totalCount / pageSize); // Fixed spelling: 'totalpage' to 'totalPage'

        if (q) {
            // Query to search by name using regular expression
            faculties = await fucalty.find({ name: re })
                .skip((page - 1) * pageSize)
                .limit(pageSize);
        } else {
            faculties = await fucalty.find({})
                .skip((page - 1) * pageSize) // Ensure pagination works even without search
                .limit(pageSize);
        }

        res.render("index", { faculties, pageSize, page, totalCount, totalPages }); // Fixed spelling: 'fucaltys' to 'faculties'
    }

    static async addpost(req, res) {
        try {
            const { email, password } = req.body;
            const dt = new fucalty({ name: email, numberof: password });

            // Kiểm tra các giá trị trong req.body
            if (!dt) {
                return res.status(400).json({ message: 'email is valiable!' })
            }


            await dt.save();

            res.status(200).json({ message: 'done' })
        } catch (error) {
            // Xử lý lỗi khi render
            console.error(error);
            return res.status(300).json({ message: 'can not register please try again' })
        }
    }

    static async addget(req, res) {
        try {
            res.render('add-f');
        } catch (error) {
            // Xử lý lỗi khi render
            console.error(error);
            res.status(500).send('Internal Server Error');
        }
    }
    static async deletedata(req, res) {
        try {
            const id = req.params.id; // Lấy id từ URL
            await fucalty.findByIdAndDelete(id); // Xóa tài liệu theo id
            res.redirect('/'); // Quay lại trang danh sách
        } catch (error) {
            console.error('Lỗi khi xóa bản ghi:', error);
            res.status(500).send('Internal Server Error');
        }
    }
    static async login(req, res) {
        try {
            // Lấy thông tin name và numberof từ request body
            const { email, password } = req.body;

            // Tìm một bản ghi duy nhất trong cơ sở dữ liệu với name và numberof
            const user = await fucalty.findOne({ name: email, numberof: password });

            // Nếu không tìm thấy người dùng
            if (!user) {
                return res.status(401).json({ message: 'Tên hoặc mật khẩu không đúng' });
            }

            // Nếu đăng nhập thành công
            return res.status(200).json({ message: 'done' });
        } catch (error) {
            // Xử lý lỗi
            return res.status(500).json({ message: "Đã xảy ra lỗi khi đăng nhập", error: error.message });
        }
    }

    static notices(req, res) {
        const { mess } = req.body;
        res.status(200).json({ status: 'success', mess: 'completed successfully!' })
    }
    static getdata(req, res) {
        res.json({ data: all_data.product, restaurant: all_data.restaurant })
    }
    static displayproduct(req, res) {
        
        res.render("m_product", {all_data: all_data})
    }
    static addproduct(req, res) {
        const { namefood, price, image } = req.body;
        // Kiểm tra nếu tên đã tồn tại
        const foodExists = all_data.product.some(food => food.namefood.toLowerCase() === namefood.toLowerCase());
        if (foodExists) {
          return res.render('api/product', { foods: product, error: 'Tên món ăn đã tồn tại!' });
        }
      
        if (!namefood || !price) {
          return res.render('api/product', { foods: product, error: 'Tên và giá món ăn là bắt buộc!' });
        }
      
        // Thêm món ăn mới
        all_data.product.push({
          namefood,
          price,
          image: "assets/pizza.jpg",
        });
      
        res.redirect('/api/product');
    }
    static deleteproduct(req, res) {
        const { namefood } = req.body;
        
        all_data.product = all_data.product.filter(food => food.namefood !== namefood);
        res.redirect('/api/product');
    }
}

export default Controllers;
