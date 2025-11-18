'use client';

import { type SVGProps, useRef, useState } from "react";

const Quotes = () => {
  const quotes = [
    {
      text: "Đừng để bản thân bị cuốn vào sự biến động ngắn hạn của thị trường.",
      author: "Jesse Livemore"
    },
    {
      text: "Bạn có thể chiến thắng ở một cổ phiểu, nhưng bạn không thể đánh bại Phố Wall mọi lúc.",
      author: "Warren Buffett"
    },
    {
      text: "Thị trường được chi phối bởi cảm xúc con người và cảm xúc con người không bao giờ thay đổi.",
      author: "Jesse Livemore"
    },
    {
      text: "Tiền kiếm được từ việc ngồi yên, không phải từ việc giao dịch.",
      author: "Jesse Livemore"
    },
    {
      text: "Kiên nhẫn tạo ra tiền bạc, chứ không phải giao dịch.",
      author: "Jesse Livemore"
    },
    {
      text: "Cổ phiếu không bao giờ quá cao để mua hoặc quá thấp để bán.",
      author: "Jesse Livemore"
    },
    {
      text: "Một lệnh thua lỗ không bao giờ có thể làm phiền tôi. Ngủ một giấc dậy là tôi quên luôn. Nhưng sai lầm vì quên đặt dừng lỗ, là rất tổn thương tiền bạc và tâm hồn.",
      author: "Jesse Livemore"
    },
    {
      text: "Tôi đã thuyết phục được bản thân rằng, điều gì đã sai thì là tôi đã sai chứ thị trường không sai.",
      author: "Jesse Livemore"
    },
    {
      text: "Không bao giờ bán chứng khoán vì có vẻ như giá lên cao.",
      author: "Jesse Livemore"
    },
    {
      text: "Không bao giờ mua chứng khoán vì nó đã giảm mạnh từ mức cao trước đó.",
      author: "Jesse Livemore"
    },
    {
      text: "Chừng nào mà chứng khoán còn hoạt động đúng và thị trường đúng thì đừng kiếm lợi nhuận với tâm thế vội vàng.",
      author: "Jesse Livemore"
    },
    {
      text: "Không có quy tắc giao dịch nào mang lại lợi nhuận trong 100% thời gian.",
      author: "Jesse Livemore"
    },
    {
      text: "Quan sát một vài thứ thì dễ dàng hơn nhiều so với quan sát quá nhiều thứ.",
      author: "Jesse Livemore"
    },
    {
      text: "Không nên quá tò mò về tất cả các lý do đằng sau biến động giá cả.",
      author: "Jesse Livemore"
    },
    {
      text: "Những chuyển động lớn cần có thời gian để phát triển.",
      author: "Jesse Livemore"
    },
    {
      text: "Khía cạnh cảm xúc của con người chính là kẻ thù lớn nhất của các nhà đầu tư hoặc đầu cơ trung bình.",
      author: "Jesse Livemore"
    },
    {
      text: "Không bao giờ trung bình giá các khoản lỗ",
      author: "Jesse Livemore"
    },
    {
      text: "Không bao giờ nên để các hoạt động đầu cơ mạo hiểm chuyển thành các khoản đầu tư dài hạn.",
      author: "Jesse Livemore"
    },
    {
      text: "Lợi nhuận thực sự trong đầu cơ đến từ các khoản đầu tư có lãi ngay từ đầu.",
      author: "Jesse Livemore"
    },
    {
      text: "Thị trường không bao giờ sai - còn ý kiến của con người thì thường sai.",
      author: "Jesse Livemore"
    },

    {
      text: "Không có gì mới ở Phố Wall. Bất cứ điều gì đang xảy ra trên thị trường chứng khoán ngày nay đã từng xảy ra trước đây và sẽ xảy ra lần nữa.",
      author: "Jesse Livemore"
    },
    {
      text: "Thật thà là món quà rất đắt giá. Đừng mong đợi nó từ những kẻ rẻ tiền.",
      author: "Jesse Livemore"
    },
    {
      text: "Dường như trong bản thân mỗi người luôn có tính cách thích làm cho những thứ đơn giản nhất cũng trở nên khó khăn và phức tạp.",
      author: "Warren Buffett"
    },

    {
      text: `"Không quan trọng bạn thông minh hay nổ lực đến mức nào, một vài thứ cần có thời gian để thay đổi. Bạn không thể "sản xuất" một em bé trong một tháng bằng cách làm chín người phụ nữ có thai."`,
      author: "Warren Buffett"
    },
    {
      text: "Quy tắc 1: Không bao giờ làm mất tiền - Quy tắc 2: Không bao giờ quên Quy tắc 1",
      author: "Warren Buffett"
    },
    {
      text: "Cơ hội không đến thường xuyên. Khi cơn mưa vàng rớt xuống, hãy lấy xô ra để hứng chứ đừng dựng một con đê để chắn nó.",
      author: "Warren Buffett"
    },
    {
      text: "Hãy tập trung vào việc xây dựng một cuộc sống có ý nghĩa, tiền bạc sẽ đến sau.",
      author: "Warren Buffett"
    },

    {
      text: "Tiền không thể mua được thời gian, hãy sử dụng thời gian của bạn một cách thông minh và có ý nghĩa.",
      author: "Warren Buffett"
    },
    {
      text: "Khi mọi người sợ hãi, hãy can đảm. Khi mọi người can đảm, hãy sợ hãi.",
      author: "Warren Buffett"
    },
    {
      text: "Đừng bao giờ theo đuổi những gì đã qua.",
      author: "Warren Buffett"
    },
    {
      text: "Việc quan trọng nhất phải làm nếu bạn thấy mình đang rơi vào một cái hố là dừng đào.",
      author: "Warren Buffett"
    },

    {
      text: "Bạn chỉ cần làm rất ít việc đúng trong cuộc đời của bạn miễn là bạn không làm quá nhiều việc sai.",
      author: "Warren Buffett"
    },
    {
      text: "Nếu bạn không tìm cách kiếm tiền trong khi bạn ngủ, bạn sẽ làm việc cho đến khi bạn chết.",
      author: "Warren Buffett"
    },
    {
      text: "Rủi ro đến từ việc không biết bạn đang làm gì.",
      author: "Warren Buffett"
    },
    {
      text: "Sự khác biệt giữa những người thành công và những người thực sự thành công là những người thực sự thành công nói không với hầu hết mọi thứ.",
      author: "Warren Buffett"
    },

    {
      text: "Hãy kết bạn với những người giỏi hơn bạn. Chọn những người bạn có hành vi tốt hơn bạn và bạn sẽ tiến bước theo hướng đó.",
      author: "Warren Buffett"
    },
    {
      text: "Lỗi lớn nhất chúng ta mắc phải là khi chúng ta nghĩ rằng chúng ta có cả thời gian trên thế giới.",
      author: "Warren Buffett"
    },
    {
      text: "Đừng đặt tất cả trứng vào một giỏ.",
      author: "Warren Buffett"
    },
    {
      text: "Đừng sợ thay đổi. Thay đổi là điều không thể tránh khỏi. Nếu bạn không thích thay đổi, bạn sẽ thất bại.",
      author: "Warren Buffett"
    },

    {
      text: "Đầu tư vào bản thân là khoản đầu tư tốt nhất bạn có thể thực hiện.",
      author: "Warren Buffett"
    },
    {
      text: "Thị trường luôn trong trạng thái bất ổn và thay đổi. Tiền được tạo ra bằng cách bỏ qua điều hiển nhiên và đặt cược vào điều bất ngờ.",
      author: "George Soros"
    },

    {
      text: "Tôi trở nên giàu có nhờ việc nhân ra khi nào mình sai.",
      author: "George Soros"
    },
    {
      text: "Điều khó nhất là nhận ra rằng đôi khi bạn sai và điều chỉnh kịp thời.",
      author: "George Soros"
    },

    {
      text: "Thị trường tài chính vốn dĩ không thể đoán trước. Nếu có thể dự đoán được, chúng đã không còn tồn tại nữa.",
      author: "George Soros"
    },
    {
      text: "Tự tin mà vào lệnh nhỏ thì cũng chẳng có ý nghĩa gì.",
      author: "George Soros"
    },
    {
      text: "Tôi đặt tay lên nhịp đập của thị trường và tự hỏi: đã đến lúc mua hay bán chưa?",
      author: "George Soros"
    },
    {
      text: "Bạn cần một chiến lược vừa tạo ra lợi nhuận vừa giúp bạn tồn tại đủ lâu để nắm bắt những cơ hội lớn.",
      author: "George Soros"
    },

    {
      text: "Dùng tài nguyên sẵn có một cách hiệu quả dễ hơn nhiều so với việc tạo ra tài nguyên mới.",
      author: "George Soros"
    },
    {
      text: "Chìa khoá để kiếm tiền là chấp nhận rủi ro.",
      author: "George Soros"
    },
    {
      text: "Mọi bong bóng đều có hai thành phần: một xu hướng thực sự tồn tại và một nhận thức sai lệch về xu hướng đó.",
      author: "George Soros"
    },
    {
      text: "Nhà đầu cơ là người nhìn thấy tương lai và hành động trước khi nó xảy ra.",
      author: "George Soros"
    },

    {
      text: "Bán khi tin xấu đã được dự đoán, mua khi tin tốt chưa ai chú ý - đó là cách kiếm tiền.",
      author: "George Soros"
    },
    {
      text: "Đưa ra quyết định đầu tư cũng giống như xây dựng một giả thuyết khoa học và kiểm chứng nó trong thực tế.",
      author: "George Soros"
    },
    {
      text: "Vấn đề của bạn là bạn muốn hiểu mọi thứ. Còn tôi thì không. Tôi chỉ muốn kiếm tiền.",
      author: "George Soros"
    },
    {
      text: "Lịch sử kinh tế là chuỗi dài những sự kiện dựa trên sai lầm và dối trá, không phải sự thật.",
      author: "George Soros"
    },

    {
      text: "Thị trường có thể tác động đến chính những sự kiện mà nó dự đoán.",
      author: "George Soros"
    },
    {
      text: "Khi một xu hướng dài hạn mất động lực, cơ hội giao dịch ngắn hạn lại tăng lên.",
      author: "George Soros"
    },
    {
      text: "Nếu phải tóm gọn kỹ năng của mình, tôi sẽ dùng một từ : Sinh Tồn.",
      author: "George Soros"
    },
    {
      text: "Tôi dựa rất nhiều vào bản năng tự nhiên.",
      author: "George Soros"
    },

    {
      text: "Tình huống càng tệ, chỉ cần một thay đổi nhỏ cũng có thể đảo chiều, và lợi nhuận sẽ càng lớn.",
      author: "George Soros"
    },
    {
      text: "Tôi chỉ giàu vì tôi biết khi nào mình sai.",
      author: "George Soros"
    },
    {
      text: "Hệ thống càng phức tạp, sai số càng lớn.",
      author: "George Soros"
    },
    {
      text: "Điều khó đánh giá nhất chính là mức độ rủi ro nào là oan toàn.",
      author: "George Soros"
    },

    {
      text: "Một khi nhận ra rằng sự hiểu biết không hoàn hảo là bản chất của con người, thì sai lầm không phải là điều đáng xấu hổ - chỉ có không sửa sai mới đáng trách.",
      author: "George Soros"
    },
    {
      text: "Nếu đầu tư mà cảm thấy vui vẻ, hứng thú, có lẽ bạn không kiếm được tiền. Đầu tư tốt thường rất nhàm chán.",
      author: "George Soros"
    },
    {
      text: "Bong bóng thị trường chứng khoán không tự nhiên sinh ra. Chúng có một nền tảng thực tế, nhưng thực tế tế đó bị bóp béo bởi những nhận thức sai lầm.",
      author: "George Soros"
    },
    {
      text: "Khi tôi thấy một bong bóng hình thành, tôi lao vào mua, tiếp thêm dầu vào lửa.",
      author: "George Soros"
    },

    {
      text: "Quan trọng không phải là bạn đúng hay sai, mà là bạn kiếm được bao nhiêu khi đúng và mất bao nhiêu khi sai.",
      author: "George Soros"
    },
    {
      text: "Bạn không muốn sỡ hữu bất kỳ thứ gì mà bạn không hoàn toàn hiểu rõ.",
      author: "Bill Gross"
    },
    {
      text: "Điều quan trọng nhất trong đầu tư là giữ cho các khoản lỗ ở mức tối thiểu.",
      author: "Bill Gross"
    },
    {
      text: "Trong đầu tư, những gì cảm thấy thoải moái hiếm khi mang lại lợi nhuận.",
      author: "Bill Gross"
    },

    {
      text: "Bí quyết đầu tư là tìm ra những gì mà số đông tin tưởng, rồi làm điều ngược lại.",
      author: "Bill Gross"
    },
    {
      text: "Khoản đầu tư tốt nhất bạn có thể thực hiện là đầu tư vào chính bản thân mình.",
      author: "Bill Gross"
    },
    {
      text: "Đầu tư không phải là thắng người khác trong trò chơi của họ. Mà là kiểm soát bản thân trong trò chơi của chính mình.",
      author: "Bill Gross"
    },
    {
      text: "Hãy đi tìm những cơ hội dễ ăn, giống như nhặt quả hồng chín mọng ngay dưới tầm tay.",
      author: "Charlie Munger"
    },

    {
      text: "Để trở nên thông minh hơn, hãy ngồi yên và suy nghĩ. Đừng chỉ hành động vì cảm giác phải làm gì đó.",
      author: "Charlie Munger"
    },
    {
      text: "Hãy sống giản dị và biết ơn. Những điều đó thường mang lại hạnh phúc lâu dài.",
      author: "Charlie Munger"
    },
    {
      text: "Không ai thành công lâu dài mà không học cách chịu đựng và xử lý nghịch cảnh.",
      author: "Charlie Munger"
    },
    {
      text: "Người không học từ sai lầm của mình sẽ phải trả giá đắt.",
      author: "Charlie Munger"
    },

    {
      text: "Thành công đến từ việc kiên nhẫn chờ đợi cơ hội đúng, sau đó hành động quyết liệt.",
      author: "Charlie Munger"
    },
    {
      text: "Nguyên tắc vàng của đầu tư là: biết những gì bạn không biết.",
      author: "Charlie Munger"
    },

    {
      text: "Tránh những sai lầm lớn quan trọng hơn nhiều so với việc làm mọi thứ đúng.",
      author: "Charlie Munger"
    },
    {
      text: "Phức tạp là kẻ thù của sự hiểu biết.",
      author: "Charlie Munger"
    },
    {
      text: "Những người thành công luôn có khả năng kết hợp các kiến thức từ nhiều lĩnh vực khác nhau.",
      author: "Charlie Munger"
    },
    {
      text: "Điều tồi tệ nhất bạn có thể làm trong kinh doanh là không hành động.",
      author: "Carl Icahn"
    },

    {
      text: "Thành công lớn nhất đến từ việc đầu tư vào các công ty đang gặp rắc rối.",
      author: "Carl Icahn"
    },
    {
      text: "Tôi không làm việc nửa vời. Tôi luôn muốn nắm quyền kiểm soát.",
      author: "Carl Icahn"
    },
    {
      text: "Cơ hội lớn thường đến từ sự hỗn loạn",
      author: "Carl Icahn"
    },
    {
      text: "Khi thị trường quá lạc quan, đó là lúc bạn phải cẩn thận ",
      author: "Carl Icahn"
    },
    {
      text: "Tôi không đầu tư chỉ vì lợi nhuận ngắn hạn mà vì giá trị dài hạn.",
      author: "Carl Icahn"
    },
    {
      text: "Nếu bạn muốn kiếm tiền, đừng ngại làm điều khó khăn và gây tranh cãi.",
      author: "Carl Icahn"
    },
    {
      text: "Kẻ thù lớn nhất của nhà đầu tư không phải là thị trường mà là chính họ.",
      author: "Benjamin Graham"
    },
    {
      text: "Chìa khoá thành công trong đầu tư là không có gắng dự đoán thị trường mà là tập trung vào giá trị nội tại.",
      author: "Benjamin Graham"
    },
    {
      text: "Đầu tư không phải là phỏng đoán về tương lai, mà là hành động dựa trên sự phân tích kỹ lưỡng.",
      author: "Benjamin Graham"
    },
    {
      text: "Không bao giờ nên mua cổ phiểu chỉ vì chúng phổ biến hoặc được yêu thích.",
      author: "Benjamin Graham"
    },
    {
      text: "Tâm lý đám đông là điều cần tránh nếu bạn muốn thành công trên thị trường.",
      author: "Benjamin Graham"
    },
    {
      text: "Sự oan toàn của khoản đầu tư đến từ việc hiểu rõ và có biên độ oan toàn đủ lớn.",
      author: "Benjamin Graham"
    },
    {
      text: "Thị trường trong ngắn hạn là một cổ máy bỏ phiếu, nhưng trong dài hạn là một cỗ máy cân đo.",
      author: "Benjamin Graham"
    },
    {
      text: "Giá cả là thứ bạn trả, giá trị là thứ bạn nhận.",
      author: "Benjamin Graham"
    },
    {
      text: "Nhà đầu tư thông minh là người kiên nhẫn, kỷ luật và khách quan.",
      author: "Benjamin Graham"
    },
    {
      text: "Không bao giờ nghe lời khuyên từ người không biết gì về cổ phiếu mà họ đang nói đến.",
      author: "Peter Lynch"
    },
    {
      text: "Thời gian quan trọng hơn việc chọn đúng thời điểm",
      author: "Peter Lynch"
    },{
      text: "Biết điều bạn sở hữu và lý do bạn sở hữu nó.",
      author: "Peter Lynch"
    },{
      text: "Thời điểm bạn biết rõ về công ty hơn những người khác chính là lợi thế của bạn.",
      author: "Peter Lynch"
    },{
      text: "Mọi người luôn tìm kiếm những lý do phức tạp, nhưng đôi khi câu trả lời đơn giản lại là đúng nhất.",
      author: "Peter Lynch"
    },{
      text: "Nếu bạn không thể giải thích lý do tại sao bạn mua một cổ phiếu, thì bạn không nên sở hữu nó.",
      author: "Peter Lynch"
    },{
      text: "Trong dài hạn, công ty nào kiếm ra tiền, cổ phiếu của nó sẽ đi lên.",
      author: "Peter Lynch"
    },{
      text: "Đầu tư không phải là trò chơi bạn thắng hay thua nhanh chóng. Kiên nhẫn luôn thắng.",
      author: "Peter Lynch"
    },{
      text: "Những khoản đầu tư tốt nhất là những khoản bạn tìm thấy xung quanh bạn.",
      author: "Peter Lynch"
    },{
      text: "Sự bất ổn chính là cơ hội cho những nhà đầu tư có tầm nhìn.",
      author: "Bill Miller"
    },{
      text: "Kiên nhẫn là một trong những lợi thế lớn nhất của nhà đầu tư.",
      author: "Bill Miller"
    },{
      text: "Giá trị thực sự không nằm ở những gì ai đó sẵn sàng trả hôm nay mà ở tiềm năng tương lai.",
      author: "Bill Miller"
    },{
      text: "Khi bạn hiểu rõ doanh nghiệp, giá cả biến động sẽ trở thành bạn của bạn chứ không phải kẻ thù.",
      author: "Bill Miller"
    },{
      text: "Đừng đánh giá một công ty chỉ dựa trên tin tức ngắn hạn.",
      author: "Bill Miller"
    },{
      text: "Các cổ phiếu tốt thường bị định giá thấp khi mọi người quá bi quan.",
      author: "Bill Miller"
    },{
      text: "Một trong những lỗi phổ biến nhất là bỏ lỡ cơ hội vì sợ hãi.",
      author: "Bill Miller"
    },{
      text: "Thành công trong đầu tư không phải là tránh rủi ro mà là quản lý rủi ro.",
      author: "Bill Miller"
    },{
      text: "Bạn không kiếm được tiền bằng cách làm điều mà mọi người khác đều đồng ý.",
      author: "Bill Miller"
    },{
      text: "Không phải tất cả những gì bạn biết đều có giá trị, và không phải mọi thứ giá trị đều có thể biết trước.",
      author: "John Bogle"
    },{
      text: "Lợi thế lớn nhất của bạn trên thị trường là thời gian.",
      author: "John Bogle"
    },{
      text: "Kế hoạch đơn giản nhất thường là kế hoạch tốt nhất.",
      author: "John Bogle"
    },{
      text: "Kiên nhẫn và đơn giản luôn thắng thế trong đầu tư dài hạn.",
      author: "John Bogle"
    },{
      text: "Nếu bạn có quỹ chỉ số chi phí thấp, bạn không cần gì hơn để thành công.",
      author: "John Bogle"
    },{
      text: "Đầu tư không phải là về sự phức tạp, đó là về tính kỷ luật và chi phí thấp.",
      author: "John Bogle"
    },{
      text: "Đừng cố gắn dự đoán thị trường điều đó là vô nghĩa.",
      author: "John Bogle"
    },{
      text: "Tập trung vào lợi nhuận thực sau chi phí, thuê và lạm phát.",
      author: "John Bogle"
    },{
      text: "Đừng tìm cách đánh bại thị trường. Hãy là thị trường.",
      author: "John Bogle"
    },{
      text: "Đừng bao giờ để một lệnh lỗ trở thành một lệnh lỗ lớn.",
      author: "Paul Tudor Jones"
    },{
      text: "Tôi luôn nói rằng bạn có thể công khai phương pháp giao dịch của tôi trên báo và nó sẽ không ảnh hưởng đến hiệu quả của nó, vì hầu hết mọi người sẽ không tuân thủ nó.",
      author: "Richard Dennis"
    },{
      text: "Thị trường sẽ làm bất cứ điều gì để chứng minh rằng số đông là sai.",
      author: "Ed Seykota"
    },
    {
      text: "Làm trader không phải là đoán đúng hướng thị trường, mà là quản trị rủi ro khi bạn sai.",
      author: "Bruce Kovner"
    },
    {
      text: "Giá chiết khấu tất cả mọi thứ.",
      author: "Charles Dow"
    },
    {
      text: "Tư duy xác suất là yếu tố tách biệt trader thắng và trader thua.",
      author: "Mark Douglas"
    },
    {
      text: "Đừng chiến đấu với xu hướng.",
      author: "Jesse Livermore"
    },
    {
      text: "Kiên nhẫn là yếu tố tạo ra lợi nhuận.",
      author: "Warren Buffett"
    },
    {
      text: "Không có kế hoạch giao dịch là kế hoạch thất bại.",
      author: "Benjamin Franklin"
    },
    {
      text: "Khi nghi ngờ, hãy đứng ngoài.",
      author: "Jesse Livemore"
    },
    {
      text: "Tôi chưa bao giờ gặp một trader giàu nào mà không biết cách cắt lỗ.",
      author: "Larry Hite"
    },
    {
      text: "Hãy để lợi nhuận chạy, cắt lỗ ngắn.",
      author: "David Ricardo"
    },
    {
      text: "Điều duy nhất chắc chắn trong trading là không có gì chắc chắn.",
      author: "Robert Prechter"
    },
    {
      text: "Hãy giao dịch theo kế hoạch, không phải theo cảm xúc.",
      author: "Alexander Elder"
    },
    {
      text: "Nếu bạn không thể kiểm soát cảm xúc, bạn không thể kiểm soát tiền.",
      author: "Warren Buffett"
    },
    {
      text: "Thị trường sẽ làm bất cứ điều gì cần thiết để gây khó khăn cho số đông.",
      author: "Mark Douglas"
    },
    {
      text: "Tài sản lớn nhất của trader là kỷ luật.",
      author: "Mark Douglas"
    },
    {
      text: "Tôi có thể chịu được bất kỳ rủi ro nào, miễn là tôi biết trước rủi ro đó.",
      author: "Larry Hite"
    },
    {
      text: "Lợi nhuận không đến từ việc đoán đúng đỉnh và đáy.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Giá phản ánh tất cả.",
      author: "Charles Dow"
    },
    {
      text: "Thị trường không thưởng cho sự thông minh, mà thưởng cho sự kiên nhẫn.",
      author: "Ed Seykota"
    },
    {
      text: "Điều quan trọng là tồn tại đủ lâu để thắng.",
      author: "Bruce Kovner"
    },
    {
      text: "Không ai giàu lên từ việc sợ hãi thị trường.",
      author: "Peter Lynch"
    },
    {
      text: "Hãy luôn đặt câu hỏi: nếu sai thì sao?",
      author: "George Soros"
    },
    {
      text: "Điều duy nhất bạn có thể kiểm soát là rủi ro.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Giao dịch đơn giản tốt hơn giao dịch phức tạp.",
      author: "Richard Dennis"
    },
    {
      text: "Kế hoạch giao dịch là người bạn tốt nhất của trader.",
      author: "Alexander Elder"
    },
    {
      text: "Phân tích kỹ thuật không phải là cây đũa thần, nó là công cụ xác suất.",
      author: "John Murphy"
    },
    {
      text: "Bạn không thể quản lý lợi nhuận, bạn chỉ có thể quản lý rủi ro.",
      author: "Mark Minervini"
    },
    {
      text: "Một giao dịch tốt là giao dịch bạn tuân thủ đúng quy tắc.",
      author: "Mark Douglas"
    },
    {
      text: "Thị trường là nơi chuyển tiền từ người thiếu kiên nhẫn sang người kiên nhẫn.",
      author: "Warren Buffett"
    },
    {
      text: "Tốt hơn là bỏ lỡ một cơ hội hơn là mất tiền.",
      author: "Mark Douglas"
    },
    {
      text: "Không nên trade để trả thù.",
      author: "Alexander Elder"
    },
    {
      text: "Hãy tập trung vào quá trình, lợi nhuận sẽ tự đến.",
      author: "Mark Douglas"
    },
    {
      text: "Hãy giao dịch những gì bạn thấy, không phải những gì bạn nghĩ.",
      author: "Linda Raschke"
    },
    {
      text: "Tiền trong thị trường nằm ở những xu hướng dài hạn.",
      author: "Ed Seykota"
    },
    {
      text: "Rủi ro lớn nhất là nghĩ rằng bạn không có rủi ro.",
      author: "Howard Marks"
    },
    {
      text: "Bạn chỉ cần giàu một lần.",
      author: "Jesse Livermore"
    },
    {
      text: "Đừng chạy theo thị trường, hãy để thị trường đến với bạn.",
      author: "Mark Douglas"
    },
    {
      text: "Lợi nhuận sẽ đến khi bạn ngừng lo lắng về lợi nhuận.",
      author: "Ed Seykota"
    },
    {
      text: "Bạn không thể kiểm soát thị trường, nhưng bạn có thể kiểm soát bản thân.",
      author: "Alexander Elder"
    },
    {
      text: "Đừng để cảm xúc dẫn dắt giao dịch của bạn.",
      author: "Mark Douglas"
    },
    {
      text: "Cắt lỗ nhanh chóng, để lợi nhuận chạy.",
      author: "Jesse Livemore"
    },
    {
      text: "Giao dịch không phải là kiếm tiền nhanh, mà là trò chơi dài hạn.",
      author: "Bruce Kovner"
    },
    {
      text: "Tôi có thể sai và bạn cũng có thể sai, nhưng thị trường thì không.",
      author: "William O'Neil"
    },
    {
      text: "Không giao dịch cũng là một vị thế.",
      author: "Alexander Elder"
    },
    {
      text: "Phân tích kỹ thuật là nghệ thuật đọc tâm lý đám đông.",
      author: "John Murphy"
    },
    {
      text: "Tiền kiếm được từ việc ngồi yên.",
      author: "Jesse Livermore"
    },
    {
      text: "Cơ hội sẽ luôn quay lại, nhưng vốn thì không.",
      author: "Mark Douglas"
    },
    {
      text: "Bạn không cần phải giao dịch mỗi ngày.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Quản lý rủi ro không phải là một lựa chọn, mà là điều bắt buộc.",
      author: "Bruce Kovner"
    },
    {
      text: "Thị trường luôn đúng, cảm xúc của bạn thì không.",
      author: "Ed Seykota"
    },
    {
      text: "Thua lỗ là học phí để tồn tại và phát triển.",
      author: "Mark Minervini"
    },
    {
      text: "Đừng đoán đáy, đừng đoán đỉnh.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Tâm lý ổn định là vũ khí mạnh nhất của trader.",
      author: "Alexander Elder"
    },
    {
      text: "Bạn không phải lúc nào cũng phải đúng để kiếm tiền.",
      author: "George Soros"
    },
    {
      text: "Lợi nhuận lớn nhất đến từ các xu hướng lớn.",
      author: "Richard Dennis"
    },
    {
      text: "Không có hệ thống nào hoàn hảo.",
      author: "Mark Minervini"
    },
    {
      text: "Tôi không sợ sai, tôi chỉ sợ không biết mình sai.",
      author: "George Soros"
    },
    {
      text: "Thị trường là bậc thầy nghiêm khắc nhất.",
      author: "Mark Douglas"
    },
    {
      text: "Kiên nhẫn để chờ cơ hội, dũng cảm để hành động.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Giao dịch không phải là cờ bạc nếu bạn có kế hoạch.",
      author: "Alexander Elder"
    },
    {
      text: "Đừng mong đợi chiến thắng mọi lúc.",
      author: "Bruce Kovner"
    },
    {
      text: "Đừng để một chuỗi thắng khiến bạn tự mãn.",
      author: "Alexander Elder"
    },
    {
      text: "Không có chiến lược nào thành công nếu bạn không tuân thủ nó.",
      author: "Richard Dennis"
    },
    {
      text: "Thị trường luôn làm những điều gây bất ngờ.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Thắng nhiều không quan trọng bằng thắng lớn.",
      author: "George Soros"
    },
    {
      text: "Thị trường sẽ kiểm tra sự kiên nhẫn của bạn.",
      author: "Mark Douglas"
    },
    {
      text: "Bạn cần học cách chấp nhận sai lầm.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Hãy để thị trường xác nhận ý tưởng của bạn.",
      author: "Linda Raschke"
    },
    {
      text: "Một trader giỏi là người biết khi nào không giao dịch.",
      author: "Ed Seykota"
    },
    {
      text: "Thua lỗ là chi phí cho kinh nghiệm.",
      author: "Mark Minervini"
    },
    {
      text: "Chỉ giao dịch khi cơ hội rõ ràng.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Hãy bảo vệ vốn của bạn bằng mọi giá.",
      author: "Bruce Kovner"
    },
    {
      text: "Bạn chỉ cần một vài giao dịch tốt để thay đổi cuộc chơi.",
      author: "George Soros"
    },
    {
      text: "Tập trung vào những giao dịch tốt nhất.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Hãy giữ kỷ luật bất kể điều gì xảy ra.",
      author: "Bruce Kovner"
    },
    {
      text: "Đừng để lòng tham làm mờ lý trí.",
      author: "Warren Buffett"
    },
    {
      text: "Quản lý rủi ro là nền tảng của thành công.",
      author: "Bruce Kovner"
    },
    {
      text: "Hãy tránh xa tin đồn.",
      author: "Jesse Livemore"
    },
    {
      text: "Cảm xúc là kẻ thù của lợi nhuận.",
      author: "Alexander Elder"
    },
    {
      text: "Bạn không cần phải giao dịch mọi lúc.",
      author: "Paul Tudor Jones"
    },
    {
      text: "Trading là một hành trình, không phải đích đến.",
      author: "Mark Douglas"
    },
    {
      text: "Giữ vững kỷ luật, lợi nhuận sẽ đến.",
      author: "Alexander Elder"
    },


  ];

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const target = itemRefs.current[index];
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const handleNavigate = (direction: "prev" | "next") => {
    const nextIndex =
      direction === "prev"
        ? (currentIndex - 1 + quotes.length) % quotes.length
        : (currentIndex + 1) % quotes.length;

    setCurrentIndex(nextIndex);
    scrollToIndex(nextIndex);
  };

  const handleRandom = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(randomIndex);
    scrollToIndex(randomIndex);
  };

  return (
    <section className="py-16 px-4">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-3xl font-bold mb-4 text-neutral-950 dark:text-neutral-50">Trading Wisdom</h2>
      <p className="text-neutral-600 dark:text-neutral-300">
        Những câu nói hay từ các trader và nhà đầu tư huyền thoại
      </p>
    </div>

    <div className="relative">
      <div
        ref={scrollContainerRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-6 pt-2 snap-x snap-mandatory"
      >
        {quotes.map((quote, index) => (
          <article
            key={`${quote.author}-${index}`}
            ref={(el: HTMLDivElement | null) => {
              itemRefs.current[index] = el;
            }}
            className="card-minimal flex min-w-[85%] snap-center flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/90 dark:bg-neutral-900/90 p-6 shadow-sm ring-1 ring-neutral-950/5 dark:ring-neutral-50/5 backdrop-blur sm:min-w-[55%] lg:min-w-[32%]"
          >
            <div className="flex-1">
              <QuoteIcon className="h-8 w-8 text-primary dark:text-primary-400 mb-4 opacity-60" />
              <p className="text-neutral-900 dark:text-neutral-50 leading-relaxed mb-6 italic">
                {/* Escape bằng HTML entities */}
                &ldquo;{quote.text}&rdquo;
              </p>
            </div>

            <div className="text-sm font-medium text-primary dark:text-primary-400">
              &mdash; {quote.author}
            </div>
          </article>
        ))}
      </div>

      {/* Gradient edges */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 hidden w-16 bg-gradient-to-r from-white dark:from-neutral-950 to-transparent md:block"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 hidden w-16 bg-gradient-to-l from-white dark:from-neutral-950 to-transparent md:block"
        aria-hidden="true"
      />

      {/* Buttons */}
      <button
        type="button"
        onClick={() => handleNavigate("prev")}
        className="pointer-events-auto absolute left-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 shadow-sm transition hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-primary/60 md:flex"
        aria-label="Xem câu trước"
      >
        <ArrowLeftIcon className="h-4 w-4" />
      </button>

      <button
        type="button"
        onClick={() => handleNavigate("next")}
        className="pointer-events-auto absolute right-4 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900 text-neutral-700 dark:text-neutral-200 shadow-sm transition hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-primary/60 md:flex"
        aria-label="Xem câu tiếp theo"
      >
        <ArrowRightIcon className="h-4 w-4" />
      </button>
    </div>

    {/* Bottom buttons */}
    <div className="mt-10 flex justify-center">
      <div className="flex w-full max-w-xl overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-700 bg-white/90 dark:bg-neutral-900/90 text-sm font-semibold text-neutral-800 dark:text-neutral-200 shadow-sm">
        <button
          type="button"
          onClick={() => handleNavigate("prev")}
          className="flex flex-1 items-center justify-center gap-2 px-4 py-3 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          <span>Câu trước</span>
        </button>

        <button
          type="button"
          onClick={handleRandom}
          className="flex flex-1 items-center justify-center gap-2 border-x border-neutral-200 dark:border-neutral-700 px-4 py-3 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <ShuffleIcon className="h-4 w-4" />
          <span>Ngẫu nhiên</span>
        </button>

        <button
          type="button"
          onClick={() => handleNavigate("next")}
          className="flex flex-1 items-center justify-center gap-2 px-4 py-3 transition hover:bg-neutral-50 dark:hover:bg-neutral-800 focus-visible:ring-2 focus-visible:ring-primary/50"
        >
          <span>Câu tiếp</span>
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>
    </div>

    <div className="text-center mt-8">
      <p className="text-sm text-neutral-600 dark:text-neutral-300">
        Vuốt trái phải để xem thêm quotes
      </p>
    </div>
  </div>
</section>

  
  );
};

const QuoteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 32 32"
    role="img"
    aria-hidden="true"
    focusable="false"
    fill="currentColor"
    {...props}
  >
    <path d="M14 8h-4a4 4 0 0 0-4 4v5c0 3.314 2.686 6 6 6h2v-8H10v-1a1 1 0 0 1 1-1h3z" opacity="0.6" />
    <path d="M26 8h-4a4 4 0 0 0-4 4v5c0 3.314 2.686 6 6 6h2v-8h-4v-1a1 1 0 0 1 1-1h3z" />
  </svg>
);

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 18l-6-6 6-6" />
  </svg>
);

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 6l6 6-6 6" />
  </svg>
);

const ShuffleIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 3h5v5" />
    <path d="M8 21H3v-5" />
    <path d="M21 3l-6.5 6.5" />
    <path d="M3 21l6.5-6.5" />
    <path d="M3 3l6.5 6.5" />
    <path d="M21 21l-6.5-6.5" />
  </svg>
);

export default Quotes;
