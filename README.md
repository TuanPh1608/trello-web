# Trello Clone với React + Vite

## Mô tả

Dự án này nhằm mục đích xây dựng một ứng dụng Trello clone với các tính năng tương tự như Trello gốc. Dự án sẽ sử dụng React cho phía client và Vite để cấu hình và xây dựng dự án.

## Nguồn học

Khóa học này được tham khảo từ playlist YouTube: [ReactJS Trello Clone](https://youtube.com/playlist?list=PLP6tw4Zpj-RK-M33E9-h6whI1S-ww1Jfu&si=6ifXEL21wlQ71QsR).

## Kiến thức qua khóa học

### Client Side Rendering (CSR) và Server Side Rendering (SSR)

- **Client Side Rendering (CSR)**: Là quá trình render nội dung của trang web trên phía client (trình duyệt). Tất cả các logic và dữ liệu được xử lý và render bởi JavaScript trên trình duyệt.
- **Server Side Rendering (SSR)**: Là quá trình render nội dung của trang web trên phía server. Server sẽ gửi HTML đã được render sẵn về cho client.
- **So sánh CSR và SSR**: CSR thường nhanh hơn sau lần tải đầu tiên vì chỉ cần tải dữ liệu và render trên client. SSR có thể nhanh hơn cho lần tải đầu tiên vì HTML đã được render sẵn, nhưng có thể chậm hơn cho các tương tác sau đó.
- **Khi nào cần dùng React?**: React phù hợp cho các ứng dụng web có giao diện phức tạp, cần cập nhật dữ liệu thường xuyên và yêu cầu hiệu suất cao. React giúp quản lý trạng thái và cập nhật giao diện một cách hiệu quả.

### React

- **React là gì?**: React là một thư viện JavaScript để xây dựng giao diện người dùng. Nó cho phép tạo ra các component có thể tái sử dụng.
- **Cơ chế hoạt động**: React sử dụng một cơ chế gọi là Virtual DOM để tối ưu hóa quá trình cập nhật giao diện. Khi trạng thái của component thay đổi, React sẽ so sánh Virtual DOM với DOM thực và chỉ cập nhật những phần thay đổi.

### Cấu hình React project thuần với Vite

- **Vite là gì?**: Vite là một công cụ build nhanh cho các dự án web hiện đại. Nó cung cấp một môi trường phát triển nhanh chóng với HMR (Hot Module Replacement) và build sản xuất tối ưu.
- **Cấu hình Vite cho React**:
  1. Tạo một dự án mới với Vite:
      ```bash
      yarn create vite <project-name> --template react
      ```
  2. Điều hướng đến thư mục dự án:
      ```bash
      cd <project-name>
      ```
  3. Cài đặt các dependencies:
      ```bash
      yarn install
      ```
  4. Cấu hình Vite để sử dụng plugin React:
      ```javascript
      // vite.config.js
      import { defineConfig } from 'vite'
      import react from '@vitejs/plugin-react'

      export default defineConfig({
        plugins: [react()]
      })
      ```
  5. Chạy server phát triển:
      ```bash
      yarn dev
      ```

### Vòng đời của React Component và cách nó render giao diện

#### Vòng đời của React Component

- **Mounting (Khi component được thêm vào DOM)**: `constructor()`, `getDerivedStateFromProps()`, `render()`, `componentDidMount()`.
- **Updating (Khi component cập nhật do thay đổi state hoặc props)**: `getDerivedStateFromProps()`, `shouldComponentUpdate()`, `render()`, `getSnapshotBeforeUpdate()`, `componentDidUpdate()`.
- **Unmounting (Khi component bị xóa khỏi DOM)**: `componentWillUnmount()`.

#### Render giao diện

Mỗi khi state hoặc props thay đổi, React sẽ tự động gọi lại phương thức `render()` để cập nhật giao diện với dữ liệu mới.

### Tích hợp các UI Library

Hiện nay, một số UI libraries phổ biến cho React bao gồm:

- **Material UI**: Cung cấp các components đẹp mắt, dễ sử dụng và linh hoạt, phù hợp với các ứng dụng React.
- **Ant Design**: Thư viện UI mạnh mẽ với nhiều components phù hợp cho các ứng dụng doanh nghiệp.
- **Tailwind CSS**: Framework utility-first giúp tạo giao diện tùy chỉnh nhanh chóng mà không cần nhiều CSS.

#### Lý do chọn Material UI:

- Dễ sử dụng, phong cách đẹp mắt, dễ tùy chỉnh.
- Hỗ trợ đầy đủ các components cần thiết cho dự án.
- Tích hợp tốt với React.

#### Cài đặt với Yarn:

```bash
yarn add @mui/material @emotion/react @emotion/styled
```

### Xử lý xác thực người dùng

Hiện nay, có ba phương pháp phổ biến nhất để xác thực người dùng trong các dự án React:

#### - JWT (JSON Web Token)
JWT là một phương pháp xác thực sử dụng **token** để bảo mật dữ liệu giữa client và server. Sau khi người dùng đăng nhập, server sẽ trả về một token, và token này có thể được lưu trong **localStorage, sessionStorage hoặc cookies**. Các yêu cầu HTTP sau đó sẽ gửi kèm token này để xác thực.

**Tài liệu chính thức**: [https://jwt.io/introduction/](https://jwt.io/introduction/)

#### - Firebase Authentication
Firebase Authentication là một dịch vụ của Google cung cấp các phương thức xác thực phổ biến như **email/password, Google, Facebook, Apple ID, v.v.**. Firebase giúp xác thực nhanh chóng mà không cần backend riêng.

**Tài liệu chính thức**: [https://firebase.google.com/docs/auth](https://firebase.google.com/docs/auth)

#### - OAuth 2.0 (Google, Facebook, GitHub)
OAuth 2.0 là một giao thức xác thực được sử dụng rộng rãi bởi các dịch vụ như **Google, Facebook, GitHub**. Thay vì lưu mật khẩu, ứng dụng sẽ yêu cầu quyền từ các nền tảng này để xác thực người dùng.

**Tài liệu chính thức**: [https://oauth.net/2/](https://oauth.net/2/)

#### So sánh
| Phương pháp               | Khi nào nên dùng? |
|--------------------------|------------------|
| **JWT**                  | Khi muốn xác thực nhanh, độc lập với các bên thứ ba. |
| **Firebase Authentication** | Khi muốn sử dụng dịch vụ xác thực có sẵn, dễ tích hợp. |
| **OAuth 2.0**            | Khi muốn xác thực qua các nền tảng lớn như Google, Facebook. |

Tùy vào nhu cầu của dự án, bạn có thể chọn phương pháp phù hợp nhất. 🚀

### Tương tác với Backend

Hiện nay, có ba phương pháp phổ biến nhất để tương tác với backend trong React:

#### - Axios
Axios là một thư viện mạnh mẽ giúp gửi HTTP requests với nhiều tính năng như **interceptors, automatic JSON parsing, timeout, cancel request**. Nó thường được sử dụng thay thế cho Fetch API vì dễ sử dụng và có nhiều tính năng hơn.

**Tài liệu chính thức**: [https://axios-http.com/](https://axios-http.com/)

#### - React Query (TanStack Query)
React Query giúp quản lý dữ liệu từ backend một cách tối ưu, hỗ trợ **caching tự động, background refetching, pagination, infinite scrolling**. Đây là lựa chọn hàng đầu cho các ứng dụng có dữ liệu động.

**Tài liệu chính thức**: [https://tanstack.com/query/latest](https://tanstack.com/query/latest)

#### - SWR (Stale-While-Revalidate)
SWR được phát triển bởi **Vercel**, giúp fetching dữ liệu nhanh và hiệu quả. Nó hỗ trợ **caching thông minh, revalidation tự động, và background refetching** khi tab active trở lại.

**Tài liệu chính thức**: [https://swr.vercel.app/](https://swr.vercel.app/)

#### So sánh 
| Phương pháp      | Khi nào nên dùng? |
|-----------------|------------------|
| **Axios**       | Khi cần gửi HTTP requests với nhiều tính năng nâng cao. |
| **React Query** | Khi cần caching, re-fetching, và quản lý dữ liệu phức tạp. |
| **SWR**         | Khi cần fetching dữ liệu nhanh, nhẹ, tối ưu performance. |

## Cài đặt

Làm theo các bước sau để thiết lập và chạy dự án:

### Yêu cầu

Đảm bảo bạn đã cài đặt các phần mềm sau:

- [Node.js](https://nodejs.org/) (phiên bản 14 trở lên)
- [Yarn](https://yarnpkg.com/)

### Cài đặt

1. Clone repository:

    ```bash
    git clone https://github.com/TuanPh1608/trello-web.git
    ```

2. Điều hướng đến thư mục dự án:

    ```bash
    cd trello-web
    ```

3. Cài đặt các dependencies bằng Yarn:

    ```bash
    yarn install
    ```

### Chạy server phát triển

Để bắt đầu server phát triển, chạy lệnh:

```bash
yarn dev
```

Điều này sẽ khởi động server phát triển Vite và bạn có thể xem ứng dụng trong trình duyệt tại `http://localhost:5173`.

### Build dự án

Để build dự án, chạy lệnh:

```bash
yarn build
```

Các file build sẽ được tạo trong thư mục `dist`.

### Xem trước bản build

Để preview bản build, chạy lệnh:

```bash
yarn preview
```

Điều này sẽ khởi động một server cục bộ để phục vụ bản build tại `http://localhost:4173`.

### Kiểm tra mã nguồn

Để kiểm tra mã nguồn của dự án, chạy lệnh:

```bash
yarn lint
```

Điều này sẽ chạy ESLint trên các file của dự án và hiển thị bất kỳ lỗi hoặc cảnh báo nào.

## Thông tin thêm

Để biết thêm thông tin, tham khảo tài liệu [Vite](https://vitejs.dev/guide/) và tài liệu [React](https://reactjs.org/docs/getting-started.html).
