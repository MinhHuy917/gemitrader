
export type SocialPost = {
  id: number
  author: string
  time: string
  content: string
  fullContent: string
  shares: number
  slug: string
  views: number
}

const rawSocialPosts: Array<Omit<SocialPost, 'slug' | 'views'>> = [
  {
    id: 1,
    author: "Gemi",
    time: "2 giờ trước",
    content: "Trong thế giới tài chính, có một khái niệm đã ăn sâu vào tư duy của hầu hết nhà đầu tư – ngưỡng cản. Đây là những điểm mà giá...",
    fullContent: `Trong thế giới tài chính, có một khái niệm đã ăn sâu vào tư duy của hầu hết nhà đầu tư – ngưỡng cản. Đây là những điểm mà giá thường gặp khó khăn khi tiếp tục tăng hoặc giảm, được phân thành các loại như: cản tĩnh, cản động, và cản tại các mốc số tròn. Những mức giá này không chỉ là con số trên biểu đồ, mà còn là các cột mốc tâm lý ảnh hưởng trực tiếp đến hành vi và quyết định của trader.\n
\n
Các ngưỡng cản này vô tình trở thành “điểm chốt” trong não bộ, kích hoạt hành vi chốt lời hoặc xác định mức cắt lỗ. Ví dụ, khi giá đạt đến một mức nhất định, bạn có thể cảm thấy đây là thời điểm phải bán ra để bảo vệ lợi nhuận. Ngược lại, khi thị trường lao dốc, bạn lại bám víu vào một mức hỗ trợ nào đó, hy vọng giá sẽ quay đầu để gỡ hòa.\n
\n
Tuy nhiên, thị trường không hoạt động dựa trên cảm giác hay niềm tin của cá nhân. Giá cả không bị giới hạn bởi bất kỳ phân tích nào mà trader nghĩ ra. Ngưỡng cản chỉ là sản phẩm của tâm lý, được tạo ra để rồi phá vỡ.\n
\n
Một sai lầm phổ biến là để ngưỡng cản chi phối lợi nhuận. Khi bạn đang đi đúng xu hướng, việc chốt lời sớm vì "sợ" giá đảo chiều có thể giới hạn khả năng sinh lời. Hãy nhớ rằng, không phải lúc nào giá cũng quay đầu theo mong đợi. Những điểm hỗ trợ hay kháng cự mà bạn tưởng tượng ra không phải là bức tường vững chắc ngăn cản thị trường.\n
\n
Hãy thử gỡ bỏ tất cả các chỉ báo khỏi biểu đồ của bạn. Khi không còn những tín hiệu gây nhiễu, bạn sẽ bắt đầu thấy thị trường ở một góc độ khác – nơi không có giới hạn nào ngoài chính sự kiên nhẫn và kỷ luật của bạn. Thị trường là vô hạn, và cơ hội chỉ đến với những ai dám bước ra khỏi rào cản tâm lý.\n
\n
Nên nhớ: Cản sinh ra để được phá. Và cũng giống như thị trường, khả năng lợi nhuận của bạn chỉ bị giới hạn nếu chính bạn tự đặt ra giới hạn đó.`,
    shares: 8,
  },
  {
    id: 2,
    author: "Gemi",
    time: "4 giờ trước",
    content: "LƯỠI DAO CỦA NGƯỜI ESKIMO. Những người Eskimo lấy các lưỡi dao thật bén đem nhúng vào máu động vật...",
    fullContent: `LƯỠI DAO CỦA NGƯỜI ESKIMO.
\n
Những người Eskimo lấy các lưỡi dao thật bén đem nhúng vào máu động vật, sau đó họ mang ra ngoài trời cho đóng băng lại.
\n
Họ làm như vậy nhiều lần để lớp băng càng lúc càng dày thêm, đến một thời điểm mà lớp băng bằng máu bên ngoài hoàn toàn che đậy được lưỡi dao bên trong. Tối đến, họ cắm cán dao xuống tuyết.
\n
Những con chó sói đánh hơi được mùi của thú rừng từ lưỡi dao và mon men đến. Chúng bắt đầu liếm những lớp băng bằng máu đó, càng lúc càng hăng say hơn, với tất cả những sự thèm thuồng. Cho đến một lúc những lớp băng bên ngoài lưỡi dao đã tan chảy hết và chạm đến lưỡi dao. Khi liếm những lưỡi dao, lưỡi của những con chó sói bị đứt và máu chảy ra, nhưng chúng lại tưởng đó là máu của thú rừng nền càng liếm hăng say hơn. Càng chảy máu thì nó càng khát, và càng khát thì nó lại càng liếm…
Sáng hôm sau, những Eskimo chỉ việc đi thu lượm xác của những con chó sói nằm chết bên cạnh những lưỡi dao đó.
\n
“Bên ngoài một chiếc bẫy bao giờ cũng là những điều tuyệt vời đầy hấp dẫn."
\n
Nếu bạn còn trẻ, nhưng chỉ thích nhàn hạ và sung sướng, suốt ngày chỉ tính chuyện chơi bời với những thú vui tầm thường …..thì sau này, bạn sẽ trả giá bằng máu và nước mắt trong những ngày khổ cực.
\n
Ở đời có công bằng, có ngày chăm bón thì mới có ngày hái quả. Bạn không chịu rèn luyện, học tập và kỷ luật thì đừng mong có ngày tương lai sáng lạng.`,
    shares: 12,
  },
  {
    id: 3,
    author: "Gemi",
    time: "6 giờ trước",
    content: "Trên một ngọn núi cao có một ngôi chùa cổ, nơi lão hòa thượng và tiểu hòa thượng cùng nhau sống. Một hôm, chùa hết dầu...",
    fullContent: `Trên một ngọn núi cao có một ngôi chùa cổ, nơi lão hòa thượng và tiểu hòa thượng cùng nhau sống. Một hôm, chùa hết dầu thắp đèn, lão hòa thượng gọi tiểu hòa thượng lại và dặn: "Con hãy cầm bát xuống núi mua dầu."
\n
Tiểu hòa thượng nhanh chóng chạy xuống núi, lo sợ rằng dầu sẽ bị đổ trên đường về. Cậu cẩn thận, chăm chú vào việc giữ bát dầu. Nhưng khi về đến chùa, hơn nửa bát dầu đã bị vương vãi.
\n
Lão hòa thượng chỉ cười và nói: "Con xuống mua dầu lần nữa đi."
\n
Tiểu hòa thượng buồn bã, nghĩ: "Mình đã cẩn thận như thế, sao dầu vẫn đổ?"
\n
Lão hòa thượng nhận ra nỗi lo của cậu, bèn khuyên: "Lần này, con chỉ cần chú ý con đường phía trước, đừng quá lo dầu sẽ đổ."
\n
Nghe lời, tiểu hòa thượng tập trung đi đường, không nghĩ quá nhiều về bát dầu. Kết quả, lần này cậu mang về nguyên vẹn một bát dầu mà không bị đổ chút nào.
\n
Khi chúng ta quá lo lắng, quá tập trung vào chuyện được mất, ta không chỉ mệt mỏi mà còn khó đạt kết quả như mong muốn. Ngược lại, khi ta buông bỏ lo âu, để mọi việc tự nhiên, kết quả thường đến bất ngờ.
\n
Trong trading cũng vậy. Có lúc, tính toán quá nhiều vẫn có thể gặp thua lỗ. Nhưng có khi, chỉ đơn giản là làm mà không suy nghĩ nhiều, lại thu về kết quả tốt.
\n
Vậy, hãy cứ thuận theo tự nhiên, ngộ tới đâu, làm tới đó. Điều gì phải đến sẽ đến.`,
    shares: 19,
  },
  {
    id: 4,
    author: "Gemi",
    time: "8 giờ trước",
    content: "CÁC GIAI ĐOẠN PHÁT TRIỂN TÂM LÝ GIAO DỊCH. Yếu tố tâm lý là một nguyên nhân quan trọng trong sự thành công...",
    fullContent: `CÁC GIAI ĐOẠN PHÁT TRIỂN TÂM LÝ GIAO DỊCH
\n
Yếu tố tâm lý là một nguyên nhân quan trọng trong sự thành công hay thất bại của trader. Cùng theo dõi các giai đoạn phát triển trong tâm lý giao dịch dưới đây để biết bản thân thuộc giai đoạn nào và cần cải thiện những điểm gì để lên kế hoạch tăng bậc nhé!
\n
1.Giai đoạn bỡ ngỡ
Đây là nơi khởi nguồn của tất cả, nơi mọi thứ bắt đầu. Bạn hầu như biết ít hoặc không hiểu gì về cấu trúc thị trường. Bạn không có khái niệm về mối tương quan giữa các thị trường, giữa thị trường và nền kinh tế của các nước và của toàn cầu.
Biểu đồ giá tưởng chừng là sự pha trộn vô nghĩa của các đường cong sặc sỡ đầy màu sắc và hình vẽ nguệch ngoạc trông giống như một bức tranh từ MOMA (The Museum of Modern Art) hơn bất cứ thứ gì có chứa thông tin.
Bạn nghĩ bất cứ ai có thể đưa ra dự đoán về hướng đi của giá dựa trên mớ rối rắm này đều phải sử dụng ma thuật hắc ám.
Tuy nhiên, khi chính bạn bắt đầu quan sát, đọc, nghiên cứu, mớ hỗn độn có thể bắt đầu hiện ra thành một bức tranh muôn màu và trở nên có ý nghĩa.
\n
2.Giai đoạn ảo tưởng
Bạn sẽ ngắm nghía thị trường mỗi ngày. Sau một thời gian (đôi khi khá lâu), bạn nhận thấy một hiện tượng đặc biệt xuất hiện thường xuyên và dường như hoạt động khá đều đặn. Bạn tập trung vào mẫu hình này. Bạn bắt đầu tìm thấy ngày càng nhiều phiên bản của nó ở các thị trường khác nhau và tất cả chúng đều lặp lại! Sự tự tin của bạn về mô hình tăng lên và bạn quyết định vồ lấy nó vào lần tiếp theo khi nó xuất hiện. Bạn vồ lấy nó và ngay lập tức dính điểm dừng lỗ. Bạn chìm nghỉm với tổng số thua lỗ quá mức tưởng tượng.
Chưa dừng lại, bạn tiếp tục nghiên cứu mô hình này nhiều hơn nữa. Và ngay lần tiếp theo nó xuất hiện, nó diễn biến đúng như dự đoán. Nhưng một lần nữa, một lần nữa bạn thua lỗ, bạn quyết định thử lại, vào một khối lượng lớn hơn và không may, lần này toàn bộ cú đánh ngay trên stoploss của mình.
Thực tế tất cả mọi người đều trải qua giai đoạn này, nhưng ít ai hiểu rằng đây là một phần của chu kỳ thắng-thua. Họ vẫn chưa hiểu rằng thua lỗ là một phần không thể tránh khỏi của bất kỳ hệ thống/chiến lược/phương pháp nào, nghĩa là, không có thứ gọi là phương pháp giành chiến thắng 100%.
\n
3.Giai đoạn hoài nghi
Bạn đã nghiên cứu rất nhiều và nỗ lực rất nhiều, hiện thực hóa vào các giao dịch của mình và sự thất bại phổ biến này xảy ra khiến bạn cảm thấy bị phản bội bởi thị trường, phản bội bởi những cuốn sách và tài liệu, kinh nghiệm, những người thầy mà bạn đã cố gắng học hỏi.
Mọi người đều mặc định tư tưởng của họ là giao dịch phải có lợi nhuận, nhưng mỗi khi thực hiện giao dịch, bạn là một kẻ thua cuộc, mặc dù tất cả các thiết lập đều hoạt động hoàn hảo trước khi bạn tham chiến. Và vì một trong những trải nghiệm đau đớn nhất là thất bại khi trong đầu luôn nghĩ thành công có vẻ dễ dàng, sự bối rối này biến thành sự tức giận: tức giận với các bậc thầy, tức giận với các nhà cung cấp, tức giận với các nhà phân tích, các khóa học, môi giới, các nhà tạo lập thị trường , các chuyên gia, người thao túng.
Trò chơi đổ lỗi dựa trên lý do này là mấu chốt cuối cùng, và giải thích rất nhiều cho những gì bạn tìm thấy trên vô số ở diễn đàn và mạng xã hội.
Ở giai đoạn này, bạn vượt qua nghĩa là bạn sẽ đi tiếp, còn không thì sẽ là rào cản mãi mãi và cuối cùng bạn không thể vượt qua được.
\n
4.Giai đoạn rối rắm
Nếu bạn không bỏ cuộc, bạn tiếp tục tìm tòi, nghiên cứu. Vì bạn đã thất bại với các mẫu hình và cứ thế, bạn sẽ hình dung ra một số “vũ khí bí mật”, một “chén thánh” , một vài siêu hệ thống, và nghĩ thứ đó sẽ giúp bạn lọc ra tất cả những giao dịch tồi tệ.
Bạn mua mọi cuốn sách, tham dự mọi khóa học, đăng ký mọi bản tin và dịch vụ tư vấn, tham gia mọi diễn đàn. Bạn mua phần mềm đắt tiền và được quảng cáo hoành tráng về sự lợi nhuận. Bạn chi tiêu bất cứ điều gì để mua thành công.
Thật không may, bạn xếp quá nhiều vào biểu đồ của bạn đến nỗi bạn bị tê liệt. Với rất nhiều thông tin đầu vào, bạn không thể đưa ra quyết định, đặc biệt là vì các thông tin hiếm khi nhất quán với nhau. Vì vậy, bạn tập trung vào những người đồng ý với hướng giao dịch mà bạn đã thực hiện (hoặc, nếu bạn là loại người hăng máu, bạn chỉ tìm kiếm những người dám chứng minh là bạn sai ).
Đây là tất cả các đặc tính của đồng tiền đi kèm sự sợ hãi.
Nếu không có sự chấp nhận thực sự về sự mất mát và rủi ro liên quan đến giao dịch, bạn sẽ đi lượn quanh như một con bướm để tìm kiếm bất cứ điều gì hoặc bất cứ ai sẽ nói với bạn những lời ngợi ca rằng bạn biết bạn đang làm gì.
Điều này có hai mục đích:
(1) Đổ trách nhiệm cho người khác và
(2) Làm bạn thoát khỏi áp lực trong các lệnh đang chạy khi các chỉ báo bạn dùng đang mâu thuẫn nhau. MACD cho chỉ báo mua, Trendline cho chỉ báo bán. EMA cho biết thị trường đang có xu hướng, RSI cho tín hiệu thị trường đã mua quá mức. Đến cuối ngày, não của bạn đã hóa đá luôn rồi.
\n
5.Giai đoạn hướng nội
Trader có thể tự mình thoát ra khỏi giai đoạn thứ tư và sử dụng kinh nghiệm của mình ở đó một cách hiệu quả. Thay vì tập trung hoàn toàn vào những gì ngoài kia, bạn bắt đầu tự hỏi mình một số câu hỏi:
Chính xác thì mình muốn gì? Mình đang cố gắng để đạt được điều gì?
Loại giao dịch nào có ý nghĩa nhất với bản thân mình? Giao dịch dài hạn, trung hạn hay giao dịch ngắn hạn? giao dịch trong ngày? giao dịch theo xu hướng? Có nên mở rộng phạm vi giao dịch không? Phong cách nào thoải mái nhất?
Rồi bắt đầu kết hợp các phương pháp giao dịch và nỗ lực phát triển một kế hoạch giao dịch, bao gồm quản lý rủi ro và quản lý lệnh cho riêng bản thân mình.
Biết chấp nhận hoàn toàn trách nhiệm đối với các giao dịch của mình, bao gồm các khoản lỗ, nghĩa là Bạn hiểu rằng tổn thất là không thể tránh khỏi.
Bạn không còn cố gắng trả thù thị trường. Bạn không băn khoăn. Bạn không giận dữ. Bạn không khuất phục trước hy vọng, sợ hãi, tham lam, các giao dịch bốc đồng, cảm xúc đã biến mất. Thay vào đó, Bạn chỉ giao dịch.
\n
6.Giai đoạn làm chủ
Ở giai đoạn này, Bạn đạt được trạng thái giao dịch gần như một ẩn sỹ vậy. Lập kế hoạch, phân tích, nghiên cứu là trọng tâm để dành thời gian và nỗ lực. Khi ngày giao dịch mở ra, bạn đã sẵn sàng cho nó. Bạn bình tĩnh, bạn thoải mái, bạn là trung tâm.
Giao dịch trở nên dễ dàng. Bạn hoàn toàn quen thuộc với kế hoạch của mình. Bạn biết chính xác những gì bạn sẽ làm trong bất kỳ tình huống nào, ngay cả khi việc đó có nghĩa là thoát ra ngay lập tức khi có diễn biến hoàn toàn bất ngờ. Bạn hiểu được sự mất mát không thể tránh khỏi và chấp nhận nó như một phần tự nhiên trong trading. Không ai có thể làm tổn thương bạn vì bạn được bảo vệ bởi các quy tắc và kỷ luật của bạn .
Bạn nhạy cảm và đồng điệu với dòng chảy của hành vi thị trường, và các hành động phản ứng tự nhiên đối với nó mà nghiên cứu của bạn đã dạy bạn sẽ tối ưu hóa lợi thế của mình. Bạn không cần phải biết thị trường sẽ làm gì tiếp theo vì bạn biết bạn sẽ phản ứng thế nào với bất cứ điều gì thị trường làm và tự tin vào khả năng phản ứng chính xác của mình.
Bạn hiểu và thực hành “không hành động thái quá”, biết chính xác những gì bạn muốn, chính xác những gì bạn đang tìm kiếm, và chờ đợi, kiên nhẫn, để có cơ hội chính xác. Nếu và khi cơ hội đó xuất hiện, Bạn hành động dứt khoát và không do dự, sau đó chờ đợi, kiên nhẫn, một lần nữa, cho cơ hội tiếp theo.
Bạn không thuyết phục bản thân rằng bạn đúng. Bạn theo dõi chuyển động giá và rút ra kết luận của mình. Khi hành vi thị trường thay đổi, chiến thuật của bạn cũng vậy. Bạn thừa nhận rằng sự chuyển động của thị trường là sự thật cuối cùng. Bạn không cố gắng vượt qua hoặc đánh bại nó một lần nào nữa.
Theo một nghĩa nào đó, bạn ở bên ngoài bản thân, đóng vai trò là huấn luyện viên của chính mình, tự đặt câu hỏi và tự giải thích mà không hợp lý hóa những gì Bạn đang chờ đợi, những gì bạn đang làm, nhắc nhở bản thân về điều này hoặc điều kia, giữ cho mình tập trung. Bạn không nhận được quá nhiều chiến thắng; bạn không chán nản về việc thua lỗ. Bạn chấp nhận rằng giá cả làm những gì nó làm và thị trường là kết quả của hành động giá. Màn trình diễn của bạn không liên quan gì đến giá trị bản thân của bạn nữa.
Chính trong giai đoạn này, cảm giác “trực giác” bắt đầu bộc lộ. Không thường xuyên như vậy, Bạn học cách thử nghiệm nó và xây dựng niềm tin vào nó.
Và vào cuối ngày, bạn xem xét công việc của mình, thực hiện mọi điều chỉnh là cần thiết, nếu có, và bắt đầu chuẩn bị cho ngày hôm sau, hài lòng với bản thân vì đã giao dịch tốt.`,
    shares: 5,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "Bài toán tâm lý muôn thuở của Trader: “Lỗ thì gồng, lãi chốt non. Đa số các Trader luôn có suy nghĩ “chốt lời sớm khi lệnh có lãi” và...",
    fullContent: `Bài toán tâm lý muôn thuở của Trader: “Lỗ thì gồng, lãi chốt non”

Đa số các Trader luôn có suy nghĩ “chốt lời sớm khi lệnh có lãi” và “không muốn cắt lỗ khi lệnh đang âm”. Điều này là bản năng con người. Trader thường cố tránh lỗ bằng cách gồng lệnh thua, hy vọng giá quay lại. Ngược lại, họ chốt lời sớm vì sợ giá đảo chiều bất ngờ.

Cả hai hành động này đều gây ra những quyết định không chính xác. Nếu bạn giữ các lệnh lỗ quá lâu, bạn có thể lỗ nhiều hơn, thậm chí cháy tài khoản. Trong khi đó, các khoản lãi nhỏ không đủ bù đắp cho các khoản lỗ lớn.

Forex là một thị trường khốc liệt. Nếu không đủ vững vàng về kinh nghiệm và tâm lý, bạn sẽ sớm bị loại khỏi cuộc chơi. Những người chiến thắng luôn biết cách quản lý vốn và rủi ro, hiểu rằng cắt lỗ là cần thiết và không có hệ thống nào thắng 100%.

Khi một cặp tiền đang tăng bền vững nhưng bất ngờ hồi, nhiều người mua sẽ chốt lời để “ăn chắc mặc bền”. Tuy nhiên, người chiến thắng sẽ đánh giá lại thị trường và nếu thấy cú hồi chỉ là tạm thời, họ sẽ tiếp tục giữ lệnh.

Nguyên nhân chính của việc chốt lời sớm là do Trader nhìn biểu đồ quá nhiều, dễ hoang mang và lo lắng. Họ cắt lệnh để tâm lý thoải mái hơn. Nhưng điều này có thể dẫn đến thói quen chốt lời quá sớm và về lâu dài, tài khoản sẽ giảm.

Quản trị cảm xúc không chỉ là việc tránh vào lệnh khi thua lỗ mà là hành trình không ngừng nghỉ. Nó bao gồm việc biết khi nào nên dừng, khi nào nên giữ, khi nào nên buông và khi nào nên nắm.

Hãy tập theo dõi cảm xúc của mình mỗi khi vào lệnh và ghi lại chúng. Đây là chìa khóa để hiểu bản thân và cải thiện tâm lý giao dịch.

Bạn sẽ nhận ra rằng việc gồng lời đôi khi còn khó hơn cắt lỗ. Cắt lỗ xong là xong, nhưng gồng lời là một quá trình xung đột giữa các suy nghĩ của bản thân. Gồng lời thực sự là một chiến trường tâm lý đúng nghĩa.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "TIMING TRONG TRADING. Thị trường thường dành 80% thời gian ở trạng thái choppy (không có xu hướng rõ ràng), khiến việc giao dịch trở nên... ",
    fullContent: `TIMING TRONG TRADING

Thị trường thường dành 80% thời gian ở trạng thái choppy (không có xu hướng rõ ràng), khiến việc giao dịch trở nên khó khăn và rủi ro. Nếu ae vào lệnh lúc này, có thể bị kẹt và mất đi lợi thế, khiến mọi dự đoán ban đầu không còn chính xác.

Trong giao dịch, có hai yếu tố ae cần quan tâm là :

1/ Xu hướng chính của thị trường : "Trend is your friend" chắc ae cũng đã nghe khá nhiều rồi
2/ Timing: Đây mới là yếu tố quan trọng hơn, vì khi vào lệnh đúng thời điểm có thể giúp ae kiếm lợi nhuận ngay cả khi sai về xu hướng

Một timing tốt giúp ae tránh bị thua lỗ dù xu hướng không dự dự đoán của ae.
Ngược lại, nếu timing sai có thể khiến ae bị loại khỏi thị trường trước khi giá chạy đi đúng hướng của ae phân tích.

Vậy làm sao để tìm timing trong thị trường?
Ae cũng sẽ không biết được đâu, nhưng chúng ta có thể chọn được khung thời gian giao dịch, cụ thể trong thị trường forex.
Là thời điểm trùng nhau giữa các phiên giao dịch
Vì sao, vì dựa vào độ thanh khoản của thị trường
Thanh khoản của thị trường lúc này sẽ ở mức cao nhất khi có nhiều người tham gia giao dịch
Những thời điểm giao thoa giữa các phiên giao dịch thì khối lượng sẽ lớn hơn từng phiên riêng lẻ, dẫn đến biên độ dao động của các cặp tiền trong thời điểm giao phiên thị trường Forex cũng sẽ lớn hơn. Đây là lí do tại sao các scalper tranh thủ giao dịch giờ giao phiên.
Phiên giao dịch có khối lượng giao dịch lớn thì thanh khoản thị trường cũng sẽ tốt hơn, đồng nghĩa chi phí giao dịch (spread) cũng sẽ thấp hơn.
Và lệnh của chúng ta SẼ TĂNG XÁC XUẤT CAO, TRÙNG VỚI TIMING GIÁ DI CHUYỂN CỦA THỊ TRƯỜNG.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `MA LỰC CỦA THỊ TRƯỜNG TÀI CHÍNH

Thị trường này thẳng thừng mà nói, nó không phù hợp với tất cả mọi người…Khi bạn thắng thì đâu đó ngoài kia người khác đang thua lỗ.

Nghiệp trading này mang tính cá nhân rất cao, bởi bản tánh mỗi người sẽ làm méo mó thực tại thị trường theo cách riêng của mình. Cụ thể mỗi người với mức độ tham sân si khác nhau sẽ gặp các vướng mắc khác nhau, thường xuyên phạm các lỗi giao dịch khác nhau, có thể thành công hay thất bại, có thể kết quả đến sớm hay muộn...

Cùng đối diện với một thị trường biến động không ngừng, giá cả lên hay xuống là do cung cầu, nhưng người ta cứ mong nó đi theo ý mình và dính mắc vào đó. Đúng ý thì vui, khác ý thì buồn, bao kẻ khóc người cười.

Thậm chí khi kiếm được cùng lợi nhuận mà người ta vẫn buồn vui khác nhau, ví như người đang sử dụng tài khoàn 100$ để giao dịch thì sẽ thấy vui khi kiếm được 10$ nhưng người khác có thể thấy khó chịu nếu anh ta đang giao dịch tài khoản 1.000$.

Rõ ràng, buồn vui ở đây là do thái độ của mỗi chúng ta, do ưa ghét mong cầu khác nhau nên xung đột với kết quả thực tại.
Chúng ta ít thấy rằng phiền não trong trading thực ra là phiền não do nơi chính mình, còn thị trường chỉ là cái duyên bên ngoài tác động vào mà thôi.

Bản ngã chỉ khác nhau về bề mặt, còn đi sâu vào bên trong, tất cả đều y hệt như nhau.
Thị trường chẳng bao giờ tha thứ cho ai khi họ không biết mình đang làm gì.

Một khác biệt lớn giữa người đã thắng và kẻ vẫn thua là khi họ đối diện với những thua lỗ trong giao dịch. Người thắng biết rõ khả năng của mình qua nhiều giao dịch thành công nên tự tin sẽ lấy lại lợi nhuận vào lúc khác mà không bị tâm lý sợ hãi, co rút né tránh. Như một võ sĩ biết mình “trên cơ”

Ps/: Hiểu biết là cách duy nhất để giải quyết nỗi sợ hãi`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Vì Sao Bạn Chưa Thoát Ra Khỏi Giai Đoạn Thua Lỗ?

1. Nguyên Nhân Chính
Chúng ta thường thấy mình mất đi số lợi nhuận vừa đạt được trong các giao dịch. Tại sao lại xảy ra điều này và làm thế nào để khắc phục? Dưới đây là một số nguyên nhân và cách bạn có thể hành động để xây dựng phương pháp giao dịch thành công.

2. Sự Bất Hợp Lý Trong Giao Dịch
Quyết Định Không Hợp Lý: Trong những tình huống giao dịch căng thẳng, chúng ta dễ đưa ra các quyết định không hợp lý. Khi thị trường diễn biến không như mong đợi, nhiều trader có xu hướng quay lại giao dịch ngay lập tức để cố gắng bù đắp tổn thất.

Nỗi Đau Từ Việc Mất Tiền: Khi mất tiền, nỗi đau cảm xúc thường mạnh hơn niềm vui khi có lãi. Điều này khiến chúng ta có xu hướng “gồng lỗ” tốt hơn là “gồng lời.”

Áp Lực Từ Việc Mất Tiền: Mọi người thường cảm thấy thất vọng hơn khi giao dịch thất bại, điều này có thể do giao dịch bằng số tiền mà họ sợ mất hoặc sự tuyệt vọng khi chưa có lợi nhuận. Nỗi đau mất tiền khiến chúng ta tìm cách “đền bù,” một quan điểm sai lầm vì không có cách nào để đền bù cho việc thua lỗ.

3. Cách Khắc Phục
Chấp Nhận Tính Ngẫu Nhiên: Hiểu rằng giao dịch có thể thắng hoặc thua một cách ngẫu nhiên và không thể dự đoán chính xác kết quả của từng giao dịch. Điều này giúp giảm bớt nỗi đau khi thua lỗ.

Đánh Giá Thực Tế: Hãy đánh giá đúng giá trị của các giao dịch thắng và lợi nhuận thu được. Điều này giúp bạn không cảm thấy vội vàng hay thất vọng khi thị trường di chuyển theo cách bạn không mong đợi sau khi bạn đã rời khỏi.

Quản Lý Lợi Nhuận: Khi tạo ra lợi nhuận, hãy thường xuyên thu hồi một phần từ tài khoản giao dịch và giữ chúng để nhắc nhở rằng lợi nhuận là có thật. Điều này giúp bạn giữ được sự hài lòng và kiềm chế sự hưng phấn.

Biết Đủ, Biết Hài Lòng: Hãy biết đủ và biết hài lòng với những gì bạn đã đạt được. Điều này giúp kìm hãm sự hưng phấn và tránh việc quay lại giao dịch ngay lập tức sau khi thua lỗ.

Chấp Nhận Và Sửa Sai: Xoá tan nỗi sợ hãi bằng cách chấp nhận sự thất bại như một phần của giao dịch và học hỏi từ những sai lầm để cải thiện kỹ năng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Điều đầu tiên, sau khi xác định một giao dịch PHẢI LUÔN LÀ - RỦI RO CỦA TÔI LÀ GÌ? Điều DUY NHẤT mà các trader chuyên nghiệp quan tâm là họ có thể MẤT bao nhiêu tiền. Những người nghiệp dư và tất cả các nhà giao dịch khác đều nghĩ ngược lại - họ có thể kiếm được bao nhiêu.

Khi các trader chuyên nghiệp LẬP KẾ HOẠCH GIAO DỊCH, điều đầu tiên xuất hiện trên tờ giấy của họ là TÔI SẼ MẤT BAO NHIÊU? Toàn bộ kế hoạch của họ được xác định xung quanh THUA. Nếu họ không cảm thấy thoải mái với số tiền mà họ SẼ MẤT, họ sẽ giảm vị thế của mình (thấp hơn số tiền trên mỗi pip) hoặc KHÔNG THỰC HIỆN GIAO DỊCH. Họ không quan tâm đến chiến thắng bởi vì họ là những nhà giao dịch thành công, biết tất cả chỉ là xác suất và cuối cùng sẽ là người chiến thắng (tổng số giao dịch).

Khi họ cảm thấy thoải mái với BAO NHIÊU HỌ SẼ MẤT, họ tiếp tục và thực hiện giao dịch. Điều này NGAY LẬP TỨC lấy đi mọi quyết định và cảm xúc của bạn trong giao dịch này, để lại cho bạn một GIAO DỊCH KHÔNG CĂNG THẲNG. Sau đó, bạn GIAO DỊCH THEO KẾ HOẠCH bằng cách để thị trường đưa bạn ra ngoài (cú cắt lỗ) hoặc giúp bạn có lãi. Sau khi có lãi, kế hoạch của bạn sẽ cho bạn biết khi nào nên chốt lãi, hòa vốn, v.v. Nó có thể không có những con số khó mà chỉ là những thứ như chốt lãi ở mức 50 pip trong hợp đồng đầu tiên, mang phần còn lại để hòa vốn ở mức 100 pip hoặc chốt lợi nhuận ở S&R đầu tiên, S&R thứ hai, v.v.

Nếu bạn cảm thấy cần phải can thiệp vào Kế hoạch của mình thì bạn đã lên kế hoạch chưa chính xác. Khi đã giao dịch với một kế hoạch - cứ để nó trôi qua và thực hiện nó! Nếu bạn lên kế hoạch chính xác, những con quỷ, yêu tinh, giọng nói trong đầu bạn, người đàn ông trong gương không còn cơ sở để lừa bạn nữa.

Bạn sẽ KHÔNG BAO GIỜ kiếm được tiền nghiêm túc với điều này CHO ĐẾN KHI bạn đảo lộn logic của mình, quên đi lợi nhuận và TẬP TRUNG VÀO BẠN CÓ THỂ MẤT BAO NHIÊU.

Tôi hứa với bạn chắc chắn 100% rằng nếu bạn làm điều này, bạn sẽ xoay chuyển sự nghiệp giao dịch của mình trong THỜI GIAN LỚN!`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Những Triết Lý Vàng Của Warren Buffett: Bài Học Đắt Giá Về Đầu Tư và Cuộc Sống

1. "Nguyên tắc số 1: Không bao giờ để mất tiền - Nguyên tắc số 2: Đừng quên nguyên tắc số 1."
2. "Giá cả là những gì bạn trả, giá trị là những gì bạn nhận."
3. "Tốt hơn nhiều khi mua một công ty tuyệt vời với giá hợp lý hơn là mua một công ty bình thường với giá tuyệt vời."
4. "Thị trường chứng khoán là một công cụ để chuyển tiền từ những người thiếu kiên nhẫn sang những người kiên nhẫn."
5. "Thời gian nắm giữ yêu thích của chúng tôi là mãi mãi."
6. "Rủi ro đến từ việc không biết mình đang làm gì."
7. "Ai đó đang ngồi trong bóng râm hôm nay vì ai đó đã trồng cây từ lâu."
8. "Hãy sợ hãi khi người khác tham lam và tham lam khi người khác sợ hãi."
9. "Trong thế giới kinh doanh, gương chiếu hậu luôn rõ ràng hơn kính chắn gió phía trước."
10. "Khoản đầu tư quan trọng nhất mà bạn có thể thực hiện là vào chính bản thân mình."
11. "Mất 20 năm để xây dựng danh tiếng và chỉ 5 phút để hủy hoại nó. Nếu nghĩ về điều đó, bạn sẽ làm mọi việc khác đi."
12. "Bạn chỉ cần làm đúng một vài việc trong cuộc đời mình miễn là bạn không làm quá nhiều việc sai lầm."
13. "Sự khác biệt giữa người thành công và người thực sự thành công là người thực sự thành công từ chối gần như mọi thứ."
14. "Sự trung thực là một món quà rất đắt giá. Đừng mong đợi điều đó từ những người rẻ tiền."`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Sự Tham Lam, Nỗi Sợ Hãi, và Hy Vọng Trong Thị Trường Tài Chính

Trong hành trình đầu tư và giao dịch trên thị trường tài chính, ba cảm xúc mạnh mẽ nhất mà mỗi cá nhân đều phải đối mặt chính là tham lam, sợ hãi, và hy vọng. Những cảm xúc này không chỉ định hình hành vi của chúng ta mà còn ảnh hưởng sâu sắc đến các quyết định tài chính, đôi khi làm sai lệch lý trí và đưa ta đến những kết quả không mong đợi.

Tham Lam: Mong Muốn Không Giới Hạn
Tham lam là một đặc tính tự nhiên tồn tại trong mỗi con người. Nó được định nghĩa là sự khao khát vượt quá nhu cầu, một mong muốn có nhiều hơn những gì thực sự cần thiết hoặc xứng đáng. Trong thị trường tài chính, tham lam thúc đẩy người ta chạy theo lợi nhuận một cách mù quáng, quên đi những rủi ro và thực tế mà thị trường có thể mang lại. Dù không ai có thể biết chính xác nguồn gốc của lòng tham, nhưng ai cũng hiểu rằng nó luôn ẩn hiện trong từng hành động, từng quyết định của chúng ta.

Sợ Hãi: Kẻ Thù Của Lý Trí
Sợ hãi là một cảm xúc luôn hiện hữu trong mỗi con người, chỉ chờ để trỗi dậy trong những khoảnh khắc đơn độc. Khi sợ hãi xuất hiện, nó làm méo mó mọi lý lẽ, khiến cho những người vốn dĩ sáng suốt cũng trở nên thiếu suy xét. Trong thị trường tài chính, sợ hãi thường xuất hiện khi thua lỗ, làm cho khả năng phán đoán của nhà đầu tư trở nên yếu kém. Ngay cả khi đang có lợi nhuận, nỗi sợ hãi rằng những thành quả đó sẽ mất đi cũng khiến họ hành động không đúng đắn, dẫn đến những quyết định vội vàng và thiếu cân nhắc.

Hy Vọng: Ánh Sáng và Bóng Tối
Hy vọng luôn đi cùng với lòng tham trong mỗi nhà đầu tư. Mỗi khi thực hiện một giao dịch, hy vọng lại trỗi dậy mạnh mẽ, thúc đẩy niềm tin vào những kết quả tích cực. Hy vọng là một phần quan trọng của cuộc sống, mang lại sự lạc quan và động lực để con người tiến về phía trước. Tuy nhiên, trong thị trường tài chính, hy vọng cũng có thể trở thành sự mù quáng, che lấp sự thật, khiến nhà đầu tư bỏ qua những tín hiệu cảnh báo và tiếp tục tin vào những điều không thực tế. Trong khi đó, thị trường chỉ quan tâm đến sự thật, và kết quả cuối cùng luôn là điều không thể thay đổi.

Trong thị trường tài chính, để thành công, chúng ta cần phải đối diện và kiểm soát được ba cảm xúc này. Tham lam, sợ hãi, và hy vọng là những cảm xúc tự nhiên, nhưng nếu để chúng chi phối, chúng ta sẽ dễ dàng rơi vào những quyết định sai lầm. Hãy luôn giữ vững lý trí, hiểu rõ bản chất của những cảm xúc này, và tập trung vào kết quả cuối cùng, không để bản thân bị chi phối bởi những điều không thực tế.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "Bài học xương máu trong đầu tư",
    fullContent: `Bài học xương máu trong đầu tư
    Từ 36.000 USD, Nicolas Darvas gia tăng tài sản của mình lên tới hơn 2 triệu USD. Và cứ thế trong vòng có vài năm, Nicolas Darvas đã trở thành triệu phú chỉ nhờ kinh doanh chứng khoán. Ông là tác giả của cuốn sách nổi tiếng: Tôi đã kiếm 2 triệu đô la từ thị trường chứng khoán như thế nào? Những năm 1955 – 1960, Nicolas Darvas được coi là hiện tượng kì lạ trên thị trường chứng khoán. Báo chí lúc đó đã tốn không ít giấy mực để viết về ông. Bên cạnh phương pháp Darvas và các nguyên tắc đầu tư chứng khoán, Nicolas Darvas còn được biết nhiều trong giới nghiên cứu chứng khoán bởi nguyên lý hình hộp rất nổi tiếng cũng do ông phát minh. Dưới đây là 24 bài học giá trị trong giao dịch cổ phiếu từ thiên tài Nicolas Darvas:
1. Không có cổ phiếu tốt hay xấu. Có chỉ là cổ phiếu tăng giá và cổ phiếu sụt giảm giá, và mức giá dựa trên luật cung và cầu của thị trường.
2. “Bạn không bao giờ có lợi nhuận nếu không có người môi giới” là lời khuyên tồi sẽ dẫn đến việc mua bán quá mức và làm giảm lợi nhuận của cổ phiếu đang tăng giá.
3. Tránh việc bán cổ phiếu đang tăng giá và giữ cổ phiếu đang giảm giá .
4. Có một phong cách trên thị trường là theo sau cổ phiếu dẫn dắt. Bạn sẽ tìm thấy thành công bằng cách lựa chọn nghành hoạt động tích cực nhất và nhóm ngành công nghiệp mạnh nhất và mua cổ phiếu dẫn đầu.
5. Sự kết hợp của giá cả và khối lượng tăng lên là chìa khóa để lựa chọn cổ phiếu. Tập trung thời gian của bạn trên các cổ phiếu dẫn dắt mới đang nổi lên với một chu kỳ thị trường mới.
6. Dự đoán tăng trưởng hơn là bản thân sự tăng trưởng dẫn đến lợi nhuận lớn trong cổ phiếu tăng trưởng “Bạn có để tìm ra những gì đám đông muốn và đi cùng với nó. Bạn không thể chống lại đám đông”.
7. Một trong những cách nhanh nhất để mất tiền trên thị trường là để lắng nghe người khác và tất cả cái gọi là ý kiến của các chuyên gia. Để thành công, bạn phải bỏ qua tất cả các ý kiến bên ngoài và các dự đoán. Thực hiện theo chiến lược của riêng bạn!
8. Thiệt hại là học phí ở Phố Wall. Học hỏi từ các thiệt hại đó.
9. Bạn có thể mong là mình sai trong một nửa các quyết định của mình. Mục tiêu của bạn là mất càng ít càng tốt khi bạn là “Tôi không có cái tôi trong thị trường chứng khoán. Nếu tôi phạm một sai lầm, tôi thừa nhận nó ngay lập tức và nhận ra nhanh chóng. Nếu bạn có thể chơi roulette với sự đảm bảo rằng bất cứ khi nào bạn đặt cược $ 100, bạn có thể nhận được với $ 98 , sẽ không gọi tỷ lệ cược là tốt?”.
10. Hầu hết những thất bại lớn của bạn sẽ đến từ ba điều: 1) khi bạn từ bỏ các quy tắc của bạn, 2) bạn trở nên quá tự tin, và 3) giao dịch trong tuyệt vọng khi không thành công.
11. Các nhà đầu cơ tìm kiếm những cơ hội tốt nhất. Để thực sự thành công, bạn phải chờ đợi đúng cơ hội khi nó thể hiện mình và điều này thường có nghĩa là không làm gì trong thời gian dài.
12. Thị trường này hoạt động theo cách của nó do người tham gia hành xử theo cách mà họ làm. Không ai biết họ sẽ làm gì cho đến khi họ thực sự làm điều đó.
13. Nhà đầu tư dài hạn là những con bạc thực sự trên thị trường do hy vọng đời đời của họ là giữ cổ phiếu thua lỗ và mong sẽ tăng giá trở lại.
14. Rất khó khăn để có lợi nhuận ở phía bên Short Sell của thị trường so với bên đầu tư dài hạn. Cơ hội thành công tốt nhất cho bạn là đầu tư trong xu hướng tăng – Up trend hoặc thị trường giá lên Bull market. 15. Hầu hết, không phải tất cả cổ phiếu, sẽ theo xu hướng chung của thị trường Để rèn luyện những cảm xúc của bạn, hãy viết ra những lý do làm cho mỗi lần giao dịch. Khi bạn bị mất tiền hãy viết lại những gì bạn nghĩ góp phần cho sự thua lỗ. Và sau đó nghiên cứu và thiết lập các quy tắc mới để tránh những sai lầm tương tự.
15. Tập trung các kỹ năng giao dịch của bạn. Ở đỉnh cao của sự thành công của mình, Darvas nắm giữ chỉ 5 đến 8 cổ phiếu một lúc mà trái ngược với những ngày trước đó của ông khi ông quá tích cực mua bán và có đến 30 cổ phiếu trong danh mục của mình.
16. Tránh đầu tư vào các cổ phiếu dẫn dắt trên đà giảm. Các mức kháng cự trên cao sẽ kiềm giữ khả năng của xu hướng tăng giá (Uptrend) bởi các nguồn cung từ những nhà đầu tư trước đó không cắt giảm thua lỗ của họ. Theo Darvas, lý do duy nhất cho một cổ phiếu được xem xét là nó đang tăng giá. Nếu điều đó không xảy ra, thi “không có lý do khác đáng xem xét.”
17. Darvas sử dụng “lý thuyết hộp” của mình khi giao dịch: Ông mua khi xuất hiện một hộp mới đang hình thành cao hơn hộp cũ và bán khi xuất hiện xu thế phá vỡ bên dưới hộp hiện tại.
18. Đối với lần mua bán mới, Darvas sử dụng “mua thí điểm” mà về cơ bản là vị trí khởi đầu cho các cổ phiếu ông thích. Chỉ khi các cổ phiếu tiếp tục di chuyển lên giá cao hơn thì ông tăng vị thế mua của mình. Ông đã học được là không bao giờ mua thêm một cổ phiếu đang xuống giá (bắt dao rơi), đó không khác gì hành động tự sát.
19. Ông nghĩ rằng nhiều nhà đầu tư không thành công đã sai lầm khi nhìn vào những cổ phiếu quen thuộc đã mang lại kết quả cho họ trong quá khứ thay vì tập trung vào các cổ phiếu tiếp theo với các yếu tố phù hợp với chu kỳ thị trường mới: “Tôi chỉ ở trong ngành công nghiệp non trẻ, thu nhập có thể tăng gấp đôi hoặc gấp ba. Các yếu tố lớn nhất ảnh hưởng đến giá cổ phiếu là sự thu hút của các khoản thu nhập trong tương lai. Những ước mơ của tương lai là những gì kích thích con người, điều này không thực tế”
.20. Sự hoàn hảo không có vai trò quan trọng trong việc giúp cho kinh doanh chứng khoán thành công. Không ai có thể mua ở mức giá thấp nhất tuyệt đối và bán ở mức giá cao nhất. Không nên dành thời gian hay nỗ lực cho mục tiêu đó “Tôi không bao giờ mua một cổ phiếu thấp, bán cao trong cuộc sống của tôi. Tôi hài lòng khi đi cùng xu hướng thị trường”.
21. Chỉ thực hiện giao dịch khi môi trường có lợi cho bạn. Chiến lược của Darvas giúp ông ra khỏi sự nghèo đói và thị trường giá xuống bởi vì ông sẽ không giao dịch cổ phiếu không phù hợp với yêu cầu của mình mà chỉ phù hợp ở thị trường giá lên đang phát triển. Tích cực gia tăng tỷ lệ. Darvas tin rằng nên tích cực tăng vị thế mua khi hệ thống của mình xuất hiện tín hiệu mua mạnh. Trong thực tế, đôi khi 50% vốn của ông đã được dành để mua chỉ một cổ phiếu.
22. Trong khi phương pháp tiếp cận kinh doanh của ông là rất kỹ thuật, sau khi nghiên cứu những người chiến thắng của thị trường, ông hiểu sự liên quan của việc tìm kiếm cổ phiếu có nền tảng tài chính tốt. Cụ thể, Darvas nghĩ rằng thu nhập và dự đoán thu nhập tăng thêm của cổ phiếu trong tương lai là rất quan trọng.
23. Hãy luôn là một kẻ học hỏi thị trường. Darvas đã học bằng cách đọc hơn 200 cuốn sách về các nhà đầu cơ và thị trường chứng khoán và dành nhiều giờ một ngày nghiên cứu thị trường chứng khoán. Trong thực tế, cuốn sách của Gerald Loeb & phương pháp tiếp cận từng là nguồn cảm hứng chính.
24. Không ai có thể hoàn toàn làm chủ thị trường.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Chinh Phục Nỗi Sợ Mất Tiền

Đừng bận tâm quá về việc mất tiền. Đối với những người mới bắt đầu, hãy nhìn nhận sự lo sợ là một phần tự nhiên và có thể đem lại những kinh nghiệm quý báu. Số tiền đó là thành quả của sự nỗ lực của bạn, và không có nghĩa là bạn không thể thực hiện giao dịch. Hãy học cách kiểm soát nỗi sợ để bước tiến mạnh mẽ trên con đường tài chính của bạn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `5 kinh nghiệm “xương máu” từ Livermore

TIN TƯỞNG VÀO NHẬN ĐỊNH CỦA CHÍNH MÌNH
Sau hàng chục lần thất bại vì tin tưởng nhiều lời khuyên sai lầm/lừa đảo của người khác, Livermore đã đúc kết lại rằng: “Một người phải tin vào chính quan điểm của anh ta nếu anh ta muốn kiếm được tiền từ thị trường. Nếu tôi mua dựa trên lời khuyên của Smith, thì tôi cũng sẽ phải bán dựa trên lời khuyên của Smith. Nhỡ đâu Smith đột nhiên biến mất? Tôi hoàn toàn phụ thuộc vào anh ta. Chẳng có người nào có thể kiếm được số tiền lớn khi có một người khác bảo anh ta phải làm gì!”

CHỜ ĐỢI VÀ HÀNH ĐỘNG QUYẾT ĐOÁN ĐÚNG LÚC
Livermore cho rằng, bất kỳ nhà đầu tư cá nhân nào cũng chỉ nên giới hạn bản thân ở một số thương vụ, cụ thể hơn là một số cổ phiếu và một số ngành mà anh ta hiểu rõ – trái với tình trạng đầu cơ tràn lan ngành nghề của các nhà đầu cơ Việt Nam hiện nay.
Hơn nữa, ông khẳng định rằng chỉ có những kẻ ngốc (foolhardy) mới cố gắng thắng mọi “ván bài”, mọi lúc, mọi nơi. Ngược lại, những người thông minh sẽ kiếm được rất nhiều tiền từ việc chờ đợi và hành động quyết đoán đúng lúc.

GIỮ THÓI QUEN GHI CHÚ LẠI NHỮNG THƯƠNG VỤ/CỔ PHIẾU
Livermore nổi tiếng với những mẩu ghi chú giá cổ phiếu và các xu hướng tựa như các đồ thị bây giờ. Dù vậy, ông khuyên rằng các cá nhân nên tự xây dựng và duy trì một hệ thống ghi chú riêng để theo dõi và lưu lại nhận định của bản thân.

BIẾT ĐIỂM DỪNG VÀ TẬN HƯỞNG CUỘC SỐNG
Theo Livermore, hầu hết các tay đầu cơ đều không bao giờ thỏa mãn. Kiếm được 1 tỷ hôm nay dễ dàng, hôm sau anh ta sẽ đòi thêm nhiều tỷ nữa. Và cứ như thế, anh ta tựa như một con thiêu thân cờ bạc và sớm ra về trắng tay.
Ông khuyên rằng mỗi khi thắng lớn, cần rút ra ít nhất 50% lợi nhuận – cất vào tài khoản phong tỏa – và tận hưởng cuộc sống vì cuộc đời quá ngắn.

HIỂU RÕ CÁI GIÁ PHẢI TRẢ CHO “TRÒ CHƠI ĐẦU CƠ”
Câu mở đầu quyển sách của Livermore đã trở nên kinh điển trong tâm trí của bất kỳ cá nhân nào: “Trò chơi đầu cơ là một trong những trò chơi chính thức thú vị nhất trên thế giới. Tuy nhiên, đây không phải là trò chơi cho những kẻ cứng đầu, những kẻ lười suy nghĩ, những kẻ không biết kiểm soát cảm xúc hay những kẻ muốn giàu nhanh. Bọn họ sẽ chết trong nghèo khó.”`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nhà toán học vĩ đại gần đây Benoit Mandelbrot được chính phủ Ai Cập thuê để tạo một mô hình toán học cho giá cotton – nguồn xuất khẩu nông nghiệp chính của nước đó. Sau khi nghiên cứu mở rộng, nhà khóa học tìm ra điều này: “Giá dao động trên và dưới giá trị”. Nó nghe có vẻ đơn giản, nhưng thực tế nó sâu sắc. Nếu chúng ta chấp nhận kết luận toán học này và nếu chúng ta có các định nghĩa về giá trị xác định và đo một khoảng dao động trung bình, chúng ta sẽ có một hệ thống giao dịch. Chúng ta sẽ cần mua dưới giá trị và chốt lời tại giá trị hoặc bán trên giá trị và thu lời tại đó.
Chúng ta đã đồng ý rằng giá trị đó là vùng nằm giữa một đường MA ngắn và dài. Chúng ta có thể dùng các kênh để tìm các dao động bình thường và không bình thường.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Thời gian rồi thấy nhiều người than thở khóc lóc trên thị trường tài chính quá, Mình mới nhớ tới câu chuyện của Tư Mã Ý...Trong thời Tam quốc có rất nhiều anh tài, mạnh từ tướng cho tới quốc lực ví dụ như so về mưu lược thì Tư Mã Ý không thể sánh bằng Khổng Minh, nếu so về quốc lực thì Tư Mã Ý phải theo thờ Tào Tháo vậy nhưng mà cuối cùng người thắng hết toàn bộ thiên hạ lại là Tư Mã Ý, mọi người có biết tại sao không ? Đơn giản lắm vì ông ta sống lâu nhất, nhẫn nhịn kiên nhẫn tốt nhất ...
Bạn có bao giờ hỏi tại sao đem tiền vào đánh tại Casino thì người chơi luôn trắng tay ra về còn sòng bài thì luôn thắng? Rất là đơn giản vì số tiền của người chơi là có hạn còn tiền của Casino gần như vô hạn, nên nếu hai bên cứ đánh với nhau thì có những lúc tài vận của người chơi may mắn sẽ thắng nhưng nếu không chịu nghỉ bước ra thì chắc chắn sẽ có lúc người chơi bị cháy túi vì hầu như không thể ăn hết tiền của chủ sòng được. Vậy nguyên lý của bên thắng cuộc là phải có khả năng sống lâu hơn bên còn lại phải không ? Rất nhiều người trắng tay vì không hiểu cái nguyên lý đơn giản này...

Với tình hình lạm phát chung của TG đang tăng chóng mặt thì sẽ rất khó khăn cho việc mở rộng kdsx của các doanh nghiệp, trong khi giá nguồn nguyên-nhiên vật liệu tăng, bắt buộc giá thành phẩm cũng phải tăng, mà dân chúng lại thắt chặt chi tiêu trong bối cảnh này thì doanh nghiệp lăn ra chết sặc tiết...
Theo quan điểm cá nhân tôi thì dòng tiền một lần nữa quay về các kênh trú ẩn: có thể là vàng, bđs, đô la...
Tuy nhiên, vàng vật chất trong nước có mức giá chênh lệch khá lớn với giá vàng thế giới, mua vào thời điểm hiện tại ko phải là một lựa chọn...
Theo tôi thì để chống lại tốc độ tăng của lạm phát, nên tiêu hết số tiền mình có, hoặc kiếm thật nhiều tiền để tốc độ lạm phát ko đuổi kịp.

Tư Mã Ý:
Thua mà không đau, thua mà không nhục, cái cần học trước tiên là giỏi thua

Sau khi thất bại trước trận đánh với Khổng Minh, hai người con của Tư Mã Ý đứng ngồi không yên, nôn nóng muốn báo thù rửa hận.

Ông bèn nói rằng: "Các người là đến đánh trận hay là đến đọ khí thế với người, những kẻ một lòng muốn thắng liệu có thắng cuối cùng hay không? Đánh trận, cái đầu tiên phải học là giỏi thua, thua mà không nhục, thua mà không đau, mới là kẻ cười sau cùng".`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Wall Street được đặt tên sau một bức tường giữ các động vật nuôi khỏi lang thang từ nơi chăn nuôi tới mũi phía Nam của Manhattan. Các di sản nông nghiệp sống mãi trong ngôn ngữ của các trader. Bốn động vật đặc biệt được nhắc đến ở Phố Wall là: bò và gấu, lợn và cừu. Các trader nói rằng: “Bò kiếm tiền, gấu kiếm tiền, nhưng heo bị giết.”
Một con bò đánh nhau bằng cách đâm sừng lên. Một con bò là một người mua – người đánh cược vào một đợt tăng giá và kiếm lời từ việc tăng giá. Một con gấu đánh nhau bằng cách dùng tay đập xuống. Một con gấu là một người bán – người đặt cược vào một đợt giảm giá và kiếm lời từ một đợt giảm giá. Những con lợn thì tham lam. Vài người trong số họ mua hoặc bán các lệnh quá lớn đối với tài khoản và bị giết bởi một dịch chuyển bất lợi nhỏ. Các con lợn khác gồng lệnh – họ tiếp tục đợi kiếm lời mặc dù xu hướng đã đảo chiều. Cừu là những người thụ động và sợ hãi đi theo xu hướng, lời khuyên, hay sư phụ. Họ đôi khi vào chạm vào sừng bò hoặc da gấu và cố gắng huênh hoang. Bạn có thể nhận ra họ bởi tiếng kêu đáng thương khi thị trường trở nên biến động.
Bất cứ khi nào thị trường mở cửa, bò thì mua, gấu thì bán, lợn và cừu bị chà đạp dưới chân, và các trader chưa quyết định đợi bên lề. Màn hình giá khắp thế giới cho thấy một dòng ổn định các giá mới nhất của mọi phương tiện giao dịch. Hàng nghìn con mắt tập trung vào từng giá như mọi người đưa ra các quyết định giao dịch`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Chắc chắn, có rất nhiều con cừu đang đợi bị lừa hoặc bị giết. Con cừu thì dễ giết – nhưng nếu bạn muốn có một miếng thịt của nó, bạn phải chiến đấu với những đối thủ cạnh tranh rất nguy hiểm. Đó là những chuyên gia thủ đoạn: xạ thủ Mỹ, hiệp sĩ Anh, lính đánh thuê Đức, samurai Nhật Bản, và các chiến binh khác, tất cả đi sau các con cừu không may tương tự. Giao dịch nghĩa là chiến đấu với đám đông thù địch, trong khi phải trả tiền cho đặc quyền để vào cuộc chiến và rời đi, dù là sống, hay chết hoặc bị thương.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Các đám đông lớn giao dịch cổ phiếu, hàng hóa, và trao đổi quyền chọn. Tiền lớn và tiền nhỏ, tiền thông minh và tiền ngu ngốc, tiền công ty hay tiền cá nhân, các nhà đầu tư dài hạn và các trader ngắn hạn, tất cả gặp nhau tại sàn. Mỗi giá thể hiện một sự đồng thuận tạm thời về giá trị giữa người mua, người bán, và các trader chưa quyết định tại thời điểm giao dịch. Có một đám đông đằng sau mỗi mô hình trên màn hình.
Sự đồng thuận của đám đông thay đổi mọi lúc. Đôi khi nó thể hiện trong một môi trường rất yên tĩnh, và ở các thời điểm khác thị trường điên dại. Giá dịch chuyển từng bước nhỏ trong suốt các thời điểm yên tĩnh. Khi một đám đông trở nên hoảng sợ hoặc phấn khích, giá bắt đầu nhảy. Hãy tưởng tượng rằng đấu thầu cho một cái áo phao trên một con thuyền chìm – đó là cách giá nhảy vọt khi các đám đông trader trở nên cảm xúc về một xu hướng. Một trader nhắm vào thị trường trong suốt thời điểm yên tĩnh và chốt lời trong những thời điểm biến động. Điều đó, tất nhiên, hoàn toàn trái ngược với cách những người nghiệp dư làm: họ nhảy vào hoặc ra khi giá bắt đầu chạy, nhưng nhanh chán và không thích thú khi giá đứng yên.
Các mô hình biểu đồ phản ánh biến động của tâm lý đám đông trong thị trường tài chính. Mỗi phiên giao dịch là một trận chiến giữa phe tăng giá, những người kiếm tiền khi giá tăng, và phe giảm giá, những người kiếm lời khi giá giảm. Mục tiêu của một nhà phân tích kỹ thuật nghiêm túc là khám phá cán cân quyền lực giữa phe mua và phe bán và đặt cược vào
nhóm thắng cuộc. Nếu phe mua mạnh hơn nhiều, bạn nên mua và giữ lệnh. Nếu phe bán mạnh hơn, bạn nên bán và bán khống. Nếu cả hai phe ngang bằng nhau, một trader khôn ngoan sẽ đứng ngoài cuộc. Anh ấy để phe mua và phe bán đánh nhau, và chỉ vào lệnh khi anh ấy chắc chắn hợp lý là bên nào có nhiều khả năng thắng.
Giá và khối lượng giao dịch, cùng với các indicator theo dõi chúng, phản ánh hành vi đám đông. Phân tích kỹ thuật tương tự với việc thăm dò ý kiến. Cả hai đều kết hợp giữa khoa học và nghệ thuật: chúng có một phần khoa học vì chúng ta dùng các phương pháp thống kê và máy tính; chúng là một phần nghệ thuật vì chúng ta sử dụng đánh giá cá nhân và kinh nghiệm để giải thích những phát hiện của mình.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trader - Gemi, [08/11/2024 08:28]
Các đám đông lớn giao dịch cổ phiếu, hàng hóa, và trao đổi quyền chọn. Tiền lớn và tiền nhỏ, tiền thông minh và tiền ngu ngốc, tiền công ty hay tiền cá nhân, các nhà đầu tư dài hạn và các trader ngắn hạn, tất cả gặp nhau tại sàn. Mỗi giá thể hiện một sự đồng thuận tạm thời về giá trị giữa người mua, người bán, và các trader chưa quyết định tại thời điểm giao dịch. Có một đám đông đằng sau mỗi mô hình trên màn hình.
Sự đồng thuận của đám đông thay đổi mọi lúc. Đôi khi nó thể hiện trong một môi trường rất yên tĩnh, và ở các thời điểm khác thị trường điên dại. Giá dịch chuyển từng bước nhỏ trong suốt các thời điểm yên tĩnh. Khi một đám đông trở nên hoảng sợ hoặc phấn khích, giá bắt đầu nhảy. Hãy tưởng tượng rằng đấu thầu cho một cái áo phao trên một con thuyền chìm – đó là cách giá nhảy vọt khi các đám đông trader trở nên cảm xúc về một xu hướng. Một trader nhắm vào thị trường trong suốt thời điểm yên tĩnh và chốt lời trong những thời điểm biến động. Điều đó, tất nhiên, hoàn toàn trái ngược với cách những người nghiệp dư làm: họ nhảy vào hoặc ra khi giá bắt đầu chạy, nhưng nhanh chán và không thích thú khi giá đứng yên.
Các mô hình biểu đồ phản ánh biến động của tâm lý đám đông trong thị trường tài chính. Mỗi phiên giao dịch là một trận chiến giữa phe tăng giá, những người kiếm tiền khi giá tăng, và phe giảm giá, những người kiếm lời khi giá giảm. Mục tiêu của một nhà phân tích kỹ thuật nghiêm túc là khám phá cán cân quyền lực giữa phe mua và phe bán và đặt cược vào
nhóm thắng cuộc. Nếu phe mua mạnh hơn nhiều, bạn nên mua và giữ lệnh. Nếu phe bán mạnh hơn, bạn nên bán và bán khống. Nếu cả hai phe ngang bằng nhau, một trader khôn ngoan sẽ đứng ngoài cuộc. Anh ấy để phe mua và phe bán đánh nhau, và chỉ vào lệnh khi anh ấy chắc chắn hợp lý là bên nào có nhiều khả năng thắng.
Giá và khối lượng giao dịch, cùng với các indicator theo dõi chúng, phản ánh hành vi đám đông. Phân tích kỹ thuật tương tự với việc thăm dò ý kiến. Cả hai đều kết hợp giữa khoa học và nghệ thuật: chúng có một phần khoa học vì chúng ta dùng các phương pháp thống kê và máy tính; chúng là một phần nghệ thuật vì chúng ta sử dụng đánh giá cá nhân và kinh nghiệm để giải thích những phát hiện của mình.

Trader - Gemi, [08/11/2024 08:28]
Trên bài đăng Lance đã đăng về việc "đúng". Điều này nhấn vào nút Nhớ lại ký ức cũ khi tôi nhớ đã được một nhà môi giới cũ trở thành nhà giao dịch chuyên nghiệp nói về việc "đúng hoặc có lãi" cách đây rất lâu. Vì vậy, tối nay, tôi đã tìm kiếm đồ đạc của mình và cuối cùng đã tìm thấy nó. Ban đầu nó là một bản fax. Tôi đã định dạng nó một chút để nhấn mạnh.

Tôi chỉ ước tôi có thể nhớ tất cả những thứ này!

"" Cách đây rất lâu, khi thế giới còn non trẻ và tôi là một nhà môi giới, tôi phải
tìm các giao dịch cho khách hàng. Tôi đã tìm thấy rất nhiều giao dịch tốt, nhưng tôi
nhận thấy rằng mọi người sẽ tìm lý do để thoát khỏi chúng. Vì vậy, tôi
bắt đầu hỏi mọi người khi nào tôi có một giao dịch tốt cho họ, liệu họ muốn
tôi đúng hơn hay họ muốn kiếm tiền hơn.

Vâng, bạn đọc đúng rồi. Và tôi đã có được một cái gì đó nổi tiếng về sự
lập dị. Nhưng tôi thường thấy sự lựa chọn đó được đưa ra cho các nhà giao
dịch trong 20 năm sau đó.

Bạn sẽ giao dịch dựa trên ý kiến, diễn giải, chỉ số của bạn hay bạn sẽ kiếm tiền?

Thực tế là, hầu hết các nhà giao dịch có quá nhiều giao dịch, họ không thể
theo dõi những gì họ nghĩ, càng không thể theo dõi kế hoạch giao dịch của họ.
Có quá nhiều hoạt động vô nghĩa và bạn phải cắt giảm
thời gian lãng phí đó.

Nhưng khi bạn làm điều đó, và bạn bắt đầu xác định một kế hoạch giao dịch và những gì bạn đang làm, bạn sẽ tìm thấy hai điều:

Thứ nhấtlà thường xuyên, bất kể phương thức giao dịch của bạn là gì, bạn sẽ bị lỗ trong một giao dịch cụ thể. Và như tất cả chúng ta đều biết, bạn thoát khỏi những giao dịch đó ngay lập tức.
Không cần suy nghĩ, không cần bào chữa...phải không?

Thứ hai là khi cuối cùng bạn cũng đúng, bạn sẽ bắt đầu nghĩ rằng mình đang ở trong tình trạng nóng nảy, giải mã được, không thể làm sai.... về cơ bản, bạn sẽ
nghĩ mình là điều tuyệt vời nhất kể từ khi việc đi thẳng đứng trở nên phổ biến .
Chỉ có một vấn đề. Bạn sẽ bắt đầu suy nghĩ .

Khi bạn thua lỗ , bạn nên cắt lỗ . Nếu bạn đã
đạt được bất kỳ sự trưởng thành nào với tư cách là một nhà giao dịch, thì khái niệm TIẾP THEO sẽ bắt đầu.
Mất mát nhỏ, một phần của trò chơi, yadda yadda, giao dịch tiếp theo .

Nhưng khi bạn có lợi nhuận , sẽ không có lợi nhuận tiếp theo ngay lập tức. Bạn
thực sự phải đưa ra quyết định mới mỗi khi bạn nhìn vào
giao dịch đó. Ở lại hay thoát ra? Và những lý do để thoát ra sẽ
tích lũy. Bạn sẽ tiếp tục kiểm tra các chỉ số mới. Bạn sẽ nói chuyện với những người không có vị trí trong thị trường đó. Bạn sẽ tiếp tục tìm kiếm theo đúng nghĩa đen cho đến khi bạn tìm thấy lý do để thoát khỏi vị trí có lợi nhuận đó.

Nhưng vấn đề là... bạn không bao giờ kiểm soát bất cứ thứ gì trên thị trường ngoại trừ
các lệnh của bạn. Bạn có thực sự muốn tuân theo một kế hoạch giao dịch dựa vào việc bạn đúng không?

Nói rằng một xu hướng sắp kết thúc và thoát khỏi một
giao dịch có lợi nhuận cũng nguy hiểm như nói rằng một xu hướng sẽ
bắt đầu và bạn sẽ ở vị thế thua lỗ cho đến khi nó xảy ra...và bù
lại tất cả các khoản lỗ của bạn bằng tiền lãi hoặc sao cũng được.

Bởi vì nếu không có các giao dịch sinh lãi lớn, thì cuối cùng, ngay cả những khoản lỗ nhỏ cũng sẽ khiến bạn gục ngã.

Đây là những gì nghiệp dư làm . Họ nghĩ về việc đúng. Họ mơ
về nó. Các chuyên gia nghĩ về rủi ro. Họ mơ về những cách mới và tốt hơn
để tính toán các điểm dừng lỗ, đạt được tỷ lệ phần trăm giao dịch có lãi cao hơn,
bất cứ điều gì giúp bù đắp cho sai lầm.

Tôi biết các triệu phú sẽ chỉ giao dịch các hợp đồng nhỏ. Họ biết sai lầm dễ dàng như thế nào. Họ biết họ *sẽ* sai. Họ * tính * là sai!
Nhưng họ cũng cố gắng tìm mọi cách để kiếm tiền bất chấp sai lầm.

Một kế hoạch giao dịch *không* về những gì bạn nghĩ . Đó là về những gì sẽ
kích hoạt bạn tham gia giao dịch, ( lựa chọn ), cách bạn sẽ tránh mất tiền,
( cắt lỗ ), và quan trọng nhất là toàn bộ vấn đề,
lý do bạn giao dịch, để lợi nhuận của bạn chạy .

Khi bạn đã có một kế hoạch giao dịch, không bước nào trong số này cần phải suy nghĩ thêm. Nếu họ làm, bạn cần một kế hoạch mới. Và nếu bạn biếtbạn cần một cái mới, tại sao lại giao dịch với cái cũ?
Trader - Gemi, [08/11/2024 08:28]
Các đám đông lớn giao dịch cổ phiếu, hàng hóa, và trao đổi quyền chọn. Tiền lớn và tiền nhỏ, tiền thông minh và tiền ngu ngốc, tiền công ty hay tiền cá nhân, các nhà đầu tư dài hạn và các trader ngắn hạn, tất cả gặp nhau tại sàn. Mỗi giá thể hiện một sự đồng thuận tạm thời về giá trị giữa người mua, người bán, và các trader chưa quyết định tại thời điểm giao dịch. Có một đám đông đằng sau mỗi mô hình trên màn hình.
Sự đồng thuận của đám đông thay đổi mọi lúc. Đôi khi nó thể hiện trong một môi trường rất yên tĩnh, và ở các thời điểm khác thị trường điên dại. Giá dịch chuyển từng bước nhỏ trong suốt các thời điểm yên tĩnh. Khi một đám đông trở nên hoảng sợ hoặc phấn khích, giá bắt đầu nhảy. Hãy tưởng tượng rằng đấu thầu cho một cái áo phao trên một con thuyền chìm – đó là cách giá nhảy vọt khi các đám đông trader trở nên cảm xúc về một xu hướng. Một trader nhắm vào thị trường trong suốt thời điểm yên tĩnh và chốt lời trong những thời điểm biến động. Điều đó, tất nhiên, hoàn toàn trái ngược với cách những người nghiệp dư làm: họ nhảy vào hoặc ra khi giá bắt đầu chạy, nhưng nhanh chán và không thích thú khi giá đứng yên.
Các mô hình biểu đồ phản ánh biến động của tâm lý đám đông trong thị trường tài chính. Mỗi phiên giao dịch là một trận chiến giữa phe tăng giá, những người kiếm tiền khi giá tăng, và phe giảm giá, những người kiếm lời khi giá giảm. Mục tiêu của một nhà phân tích kỹ thuật nghiêm túc là khám phá cán cân quyền lực giữa phe mua và phe bán và đặt cược vào
nhóm thắng cuộc. Nếu phe mua mạnh hơn nhiều, bạn nên mua và giữ lệnh. Nếu phe bán mạnh hơn, bạn nên bán và bán khống. Nếu cả hai phe ngang bằng nhau, một trader khôn ngoan sẽ đứng ngoài cuộc. Anh ấy để phe mua và phe bán đánh nhau, và chỉ vào lệnh khi anh ấy chắc chắn hợp lý là bên nào có nhiều khả năng thắng.
Giá và khối lượng giao dịch, cùng với các indicator theo dõi chúng, phản ánh hành vi đám đông. Phân tích kỹ thuật tương tự với việc thăm dò ý kiến. Cả hai đều kết hợp giữa khoa học và nghệ thuật: chúng có một phần khoa học vì chúng ta dùng các phương pháp thống kê và máy tính; chúng là một phần nghệ thuật vì chúng ta sử dụng đánh giá cá nhân và kinh nghiệm để giải thích những phát hiện của mình.

Trader - Gemi, [08/11/2024 08:28]
Trên bài đăng Lance đã đăng về việc "đúng". Điều này nhấn vào nút Nhớ lại ký ức cũ khi tôi nhớ đã được một nhà môi giới cũ trở thành nhà giao dịch chuyên nghiệp nói về việc "đúng hoặc có lãi" cách đây rất lâu. Vì vậy, tối nay, tôi đã tìm kiếm đồ đạc của mình và cuối cùng đã tìm thấy nó. Ban đầu nó là một bản fax. Tôi đã định dạng nó một chút để nhấn mạnh.

Tôi chỉ ước tôi có thể nhớ tất cả những thứ này!

"" Cách đây rất lâu, khi thế giới còn non trẻ và tôi là một nhà môi giới, tôi phải
tìm các giao dịch cho khách hàng. Tôi đã tìm thấy rất nhiều giao dịch tốt, nhưng tôi
nhận thấy rằng mọi người sẽ tìm lý do để thoát khỏi chúng. Vì vậy, tôi
bắt đầu hỏi mọi người khi nào tôi có một giao dịch tốt cho họ, liệu họ muốn
tôi đúng hơn hay họ muốn kiếm tiền hơn.

Vâng, bạn đọc đúng rồi. Và tôi đã có được một cái gì đó nổi tiếng về sự
lập dị. Nhưng tôi thường thấy sự lựa chọn đó được đưa ra cho các nhà giao
dịch trong 20 năm sau đó.

Bạn sẽ giao dịch dựa trên ý kiến, diễn giải, chỉ số của bạn hay bạn sẽ kiếm tiền?

Thực tế là, hầu hết các nhà giao dịch có quá nhiều giao dịch, họ không thể
theo dõi những gì họ nghĩ, càng không thể theo dõi kế hoạch giao dịch của họ.
Có quá nhiều hoạt động vô nghĩa và bạn phải cắt giảm
thời gian lãng phí đó.

Nhưng khi bạn làm điều đó, và bạn bắt đầu xác định một kế hoạch giao dịch và những gì bạn đang làm, bạn sẽ tìm thấy hai điều:

Thứ nhấtlà thường xuyên, bất kể phương thức giao dịch của bạn là gì, bạn sẽ bị lỗ trong một giao dịch cụ thể. Và như tất cả chúng ta đều biết, bạn thoát khỏi những giao dịch đó ngay lập tức.
Không cần suy nghĩ, không cần bào chữa...phải không?

Thứ hai là khi cuối cùng bạn cũng đúng, bạn sẽ bắt đầu nghĩ rằng mình đang ở trong tình trạng nóng nảy, giải mã được, không thể làm sai.... về cơ bản, bạn sẽ
nghĩ mình là điều tuyệt vời nhất kể từ khi việc đi thẳng đứng trở nên phổ biến .
Chỉ có một vấn đề. Bạn sẽ bắt đầu suy nghĩ .

Khi bạn thua lỗ , bạn nên cắt lỗ . Nếu bạn đã
đạt được bất kỳ sự trưởng thành nào với tư cách là một nhà giao dịch, thì khái niệm TIẾP THEO sẽ bắt đầu.
Mất mát nhỏ, một phần của trò chơi, yadda yadda, giao dịch tiếp theo .

Nhưng khi bạn có lợi nhuận , sẽ không có lợi nhuận tiếp theo ngay lập tức. Bạn
thực sự phải đưa ra quyết định mới mỗi khi bạn nhìn vào
giao dịch đó. Ở lại hay thoát ra? Và những lý do để thoát ra sẽ
tích lũy. Bạn sẽ tiếp tục kiểm tra các chỉ số mới. Bạn sẽ nói chuyện với những người không có vị trí trong thị trường đó. Bạn sẽ tiếp tục tìm kiếm theo đúng nghĩa đen cho đến khi bạn tìm thấy lý do để thoát khỏi vị trí có lợi nhuận đó.

Nhưng vấn đề là... bạn không bao giờ kiểm soát bất cứ thứ gì trên thị trường ngoại trừ
các lệnh của bạn. Bạn có thực sự muốn tuân theo một kế hoạch giao dịch dựa vào việc bạn đúng không?

Nói rằng một xu hướng sắp kết thúc và thoát khỏi một
giao dịch có lợi nhuận cũng nguy hiểm như nói rằng một xu hướng sẽ
bắt đầu và bạn sẽ ở vị thế thua lỗ cho đến khi nó xảy ra...và bù
lại tất cả các khoản lỗ của bạn bằng tiền lãi hoặc sao cũng được.

Bởi vì nếu không có các giao dịch sinh lãi lớn, thì cuối cùng, ngay cả những khoản lỗ nhỏ cũng sẽ khiến bạn gục ngã.

Đây là những gì nghiệp dư làm . Họ nghĩ về việc đúng. Họ mơ
về nó. Các chuyên gia nghĩ về rủi ro. Họ mơ về những cách mới và tốt hơn
để tính toán các điểm dừng lỗ, đạt được tỷ lệ phần trăm giao dịch có lãi cao hơn,
bất cứ điều gì giúp bù đắp cho sai lầm.

Tôi biết các triệu phú sẽ chỉ giao dịch các hợp đồng nhỏ. Họ biết sai lầm dễ dàng như thế nào. Họ biết họ *sẽ* sai. Họ * tính * là sai!
Nhưng họ cũng cố gắng tìm mọi cách để kiếm tiền bất chấp sai lầm.

Một kế hoạch giao dịch *không* về những gì bạn nghĩ . Đó là về những gì sẽ
kích hoạt bạn tham gia giao dịch, ( lựa chọn ), cách bạn sẽ tránh mất tiền,
( cắt lỗ ), và quan trọng nhất là toàn bộ vấn đề,
lý do bạn giao dịch, để lợi nhuận của bạn chạy .

Khi bạn đã có một kế hoạch giao dịch, không bước nào trong số này cần phải suy nghĩ thêm. Nếu họ làm, bạn cần một kế hoạch mới. Và nếu bạn biếtbạn cần một cái mới, tại sao lại giao dịch với cái cũ?
Như bạn đã chỉ ra, việc duy trì giao dịch trái phiếu hoặc trái phiếu vào cuối
năm ngoái có thể đã bù đắp cho bạn hai năm lội nước. Đây là lý do tại sao bạn thực hiện hoạt động giao dịch rủi ro. Đây là những gì nỗ lực
là dành cho. Tỷ lệ phần trăm không cao. Tổn thất không nhỏ hơn. Giao dịch lớn, có lãi
. Nhưng bạn phải để lợi nhuận của mình chạy để có được chúng`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Những gì anh ấy nhìn thấy trong 15 đến 30 phút đầu tiên, anh ấy sẽ không bao giờ tin ngay cả khi người bạn thân nhất của anh ấy đã nói với anh ấy. Khi mở cửa, các giao dịch qua đêm, tức là các vị thế mua, đã được thực hiện nhưng anh ấy phát hiện ra rằng các nhà giao dịch tham gia giao dịch đó đang đưa ra tín hiệu cho các nhà giao dịch khác. Sau khi các lệnh được thực hiện thì “không có gì” – họ chỉ chờ xem thị trường phản ứng thế nào với các lệnh đó.

Sau đó, anh ấy quan sát những gì anh ấy nghĩ là những hành vi bất hợp pháp nhưng sau đó biết được đó là những gì thực sự diễn ra hàng ngày. Trong khoảng thời gian “chết” này, các nhà giao dịch trên sàn đang xem xét các lệnh của họ trong hệ thống và sau đó dựa trên một tín hiệu nhất định, một nhóm bắt đầu bán theo sau là một nhóm khác. Sau đó, khi đạt đến một mức giá thấp hơn nhất định, một tín hiệu khác được đưa ra và các nhóm tương tự sau đó mua lại với nhau. Sau đó, anh ấy biết được điều này được gọi là “Running the Stops” và những gì họ đã làm là tìm ra vị trí của tất cả các đơn đặt hàng, dưới mức thấp nhất, mức thấp nhất và những nơi khác, và chỉ đẩy giá xuống để lấp đầy chúng và loại bỏ chúng để họ đã có một bảng đặt hàng sạch sẽ! Không hài lòng với điều đó, sau đó họ đã thu giá chung lại nơi nó đã mở!

Sau đó và bây giờ với sự vận động của thị trường, các đơn đặt hàng bắt đầu đến và khi một đơn đặt hàng lớn đến từ ngân hàng, quỹ hoặc tổ chức lớn khác, người giao dịch với đơn đặt hàng đã đưa ra tín hiệu trước khi vào lệnh. Sau khi vào đó, các thương nhân lại im lặng. Họ đang xem thị trường phản ứng thế nào với lệnh đó. Khi họ thấy có nhiều lệnh mua hơn, họ chỉ mua ngày càng nhiều và tiếp tục mua cho đến khi có tín hiệu từ một nhà giao dịch rằng anh ta có một lệnh bán lớn. Một lần nữa lệnh bán được đưa vào và các nhà giao dịch im lặng chờ đợi phản ứng từ thị trường. Anh biết được rằng những người giao dịch trên sàn đang chờ xem liệu lệnh bán sẽ được chấp nhận dưới hình thức chốt lãi hay bán khống hoàn toàn. Anh ấy nói điều này diễn ra cả ngày với việc các nhà giao dịch trên sàn chỉ “cõng” theo bất kỳ cách nào thị trường di chuyển.

.....Từ đó ông có phương pháp rất đơn giản:

Mua khi giá tăng và bán khi giá giảm .

Anh ấy tiếp tục kiếm được hàng triệu đô la khi làm việc này và sau đó tôi được biết anh ấy đã qua đời, một người đàn ông rất giàu có và mãn nguyện khi biết rằng anh ấy đã đánh bại “những con điếm” trong trò chơi của chính họ.

Tôi đã học được tất cả những điều này trong một vài cuộc nói chuyện qua điện thoại với anh ấy nhưng anh ấy đã mất kiên nhẫn với tôi khi tôi vẫn đặt câu hỏi về phương pháp của anh ấy. Anh ấy không trả lời các cuộc gọi của tôi nên tôi quay lại fax. Một lần nữa, tôi không thể nhớ từng chữ nhưng tôi đã gửi một bản fax đơn giản với nội dung:

“Làm sao bạn biết khi nào nên ngừng mua?”

Trên cùng một bản fax là câu trả lời viết tay của anh ấy, "Khi nó ngừng tăng."

Vì vậy, tôi đã viết trên đó, “Làm sao bạn biết khi nào nó ngừng tăng?”

Câu trả lời viết tay của anh ấy, "Khi nó bắt đầu đi xuống."

Vì vậy, tôi đã viết trên đó, “Làm sao bạn biết khi nào nó ngừng tăng và bắt đầu giảm?”

Câu trả lời viết tay của anh ấy, "Khi mọi người bắt đầu bán."

Sau khi đi lòng vòng như thế này trong các câu đố, tôi đã cầu xin anh ấy “hãy đưa thẳng cho tôi”.

Anh ấy đã gửi một bản fax nói rằng đây sẽ là lần liên lạc cuối cùng của anh ấy với tôi và rằng nếu tôi không hiểu cách mua khi giá tăng và bán khi giá giảm, thì tôi đã không có giao dịch kinh doanh.

Đoạn cuối cùng của anh ấy là đoạn mà tôi bỏ qua, giống như mọi thứ khác mà anh ấy nói với tôi, cho đến vài năm trước khi tôi nhận ra rằng mình đã là một thằng ngốc ngu ngốc, kiêu ngạo và cứng đầu như thế nào:

Anh ấy nói rằng tôi sẽ chỉ sai hai lần khi sử dụng đơn giản của anh ấy. phương pháp:

“Một lần khi bạn mua ở đỉnh và một lần khi bạn bán ở đáy.”

Tôi chỉ phớt lờ đây như một câu trả lời thông minh nhưng vẫn cố gắng làm theo lời anh ấy. Thật không may, và như định luật Sod quy định, tôi đã cố gắng thực hiện nó trong tình trạng hợp nhất và thua lỗ trong mọi giao dịch mà tôi phải mua trong khi lẽ ra tôi nên bán, v.v.

Tôi đã thử và lại thất bại, rồi cuối cùng lạc đường trong hành trình tìm kiếm Chén Thánh ở Vùng đất chỉ dẫn.

Giờ đây, với tất cả kinh nghiệm của mình và hàng nghìn đô la bị mất sau lưng, đèn đã sáng!

Sự hiểu biết của tôi về những gì anh ấy nói với tôi là: Hãy

mua khi giá đang tăng lên. Mua mỗi lần hồi/nhúng. Tiếp tục mua cho đến khi lần thoái lui cuối cùng trở thành một xu hướng thay đổi, đó là giao dịch mà bạn thua lỗ.

Bán khi giá đang di chuyển xuống. Bán mỗi lần thoái lui / phục hồi. Tiếp tục bán cho đến khi lần thoái lui cuối cùng trở thành một xu hướng thay đổi, đây là lần giao dịch thứ hai mà bạn thua lỗ.

Tôi đã không giao dịch như thế này vì hiện tại tôi có phương pháp/phong cách của riêng mình nhưng nhìn lại thì tôi đã thực hiện nó hoạt động rất tốt. Rõ ràng, giá càng hợp thời trang thì hiệu quả càng tốt.

Trong những lần liên lạc sau này với những người giao dịch trên sàn khác, tôi đã kể cho họ nghe về Tiến sĩ Joe và những gì ông ấy nói với tôi, đồng thời hỏi họ xem điều đó có đúng không. Như bạn mong đợi, từng người và tất cả mọi người đều kịch liệt từ chối nó như một thứ rác rưởi tuyệt đối.

Đôi khi tôi tự hỏi liệu Tiến sĩ già Joe có đang hút thứ gì đó không nhưng sau đó khi tôi nhìn thấy những doji trung lập chân dài đó trước một động thái quan trọng, tôi biết ông ấy đã đúng.

Cảm ơn Tiến sĩ Joe`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Đôi khi, thua lỗ trong giao dịch khiến ta thất vọng và nghi ngờ về con đường trading của mình. 

    Tuy nhiên, thực ra, thua lỗ, thất vọng và nghi ngờ là một phần không thể thiếu của cuộc chơi khốc liệt này. 

    Có người chán nản từ bỏ, nhưng cũng có người nhận ra rằng đó là một phần không thể tránh khỏi của quá trình. 

    Họ rút kinh nghiệm từ những thất bại và nghiêm túc hơn trong những lần giao dịch sau. 

    Nhờ đó, họ dần trở thành những nhà đầu cơ thực thụ.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Kẻ gan dạ thường all in, nhồi lệnh 
Người sợ hãi thì chần chừ không dám vào lệnh 
Chỉ những người không biết sợ là gì (quản lý vốn) mới luôn nhìn market như nó vốn có và làm những điều cần thiết.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi giao dịch tài chính nếu ta đạt trạng thái "mặc kệ lệnh" trong lúc lệnh đang chạy
Thì lúc đó ta đang rơi vào trạng thái giao dịch tốt nhất
Để đạt trạng thái "mặc kệ lệnh" như vậy
Thì chúng ta chỉ cần làm một việc
Là chúng ta hạ volume tới mức để bản thân ta
Rơi vào trạng thái "không còn nỗi đau hoặc ít nỗi đau nhất" khi lệnh đó thua.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Ví dụ bạn mua cổ phiếu ở mức giá $30, hôm sau giá cổ phiếu đó tăng lên $32 hay $32.50. Bạn cảm thấy sợ rằng nếu bạn không chốt lời ngay thì hôm sau có thể không còn có giá đó nữa. Vì thế bạn chấp nhận một khoản lợi nhuận nho nhỏ trong khi bạn có thể mong đợi hơn thế. Tại sao bạn lại lo sợ mất đi lợi nhuận $2/cổ phiếu mà hôm trước bạn vẫn chưa có được? Nếu bạn có lời $2 trong một ngày thì bạn có thể kiếm được $2-$3 trong ngày tiếp theo, thậm chí là $5 trong tuần tới. Khi thị trường đang đi đúng hướng, đừng nên vội vã chốt lời. Bởi vì bạn biết rằng mình đã đúng, nếu không thì bạn chẳng có đồng lời nào cả. Cứ để thị trường đi tiếp con đường của nó và hãy đi theo nó, bạn có thể kiếm được một món lợi lớn miễn là hoạt động của thị trường không có những dấu hiệu khiến bạn lo ngại, hãy giữ vững niềm tin của bạn.
    
    Ngược lại, nếu bạn mua cổ phiếu ở giá $30, qua hôm sau chỉ còn $28, bạn mất đi $2/cổ phiếu. Khi đó, bạn vẫn không lo sợ rằng nếu để qua hôm sau nữa thì có thể bạn sẽ mất đến $3/ cổ phiếu hoặc hơn nữa. Không, bạn chỉ xem nó như phản ứng ngược tạm thời, hy vọng rằng ngày tiếp theo giá sẽ quay trở lại mức ban đầu. Nhưng đó là lúc bạn nên lo sợ. Ngày tiếp theo bạn có thể mất thêm $2 nữa, hoặc có thể là $5-$10 trong 1 hoặc 2 tuần tới. Đó là lúc bạn nên sợ hãi, bởi vì nếu bạn không cắt lỗ thì bạn có thể bị tổn thất nhiều hơn sau đó. Đó là lúc bạn nên bảo vệ mình bằng cách bán cổ phiếu đó đi trước khi con số lỗ lớn hơn.
Có lời thì cứ để tiếp, nhưng đã lỗ thì không bao giờ để lâu. Nhà đầu cơ phải đảm bảo giảm lỗ tối đa bằng cách thoát khỏi thị trường ngay con số lỗ nho nhỏ đầu tiên. Làm thế, bạn sẽ bảo vệ được tài khoản của mình để trong tương lai, khi có một nhận định mới bạn có thể đặt một lệnh khác với số lượng bằng số lượng mà bạn đã bỏ lỡ trước kia. Nhà đầu cơ phải là một người bán bảo hiểm cho chính mình, và cách duy nhất để bạn có thể tiếp tục cuộc kinh doanh là bảo toàn vốn, không cho phép mình lỗ đến mức nguy hiểm cho việc đầu tư của bạn, khi thị trường lại đi theo đúng hướng bạn đã định.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi bạn không cảm nhận đường xu hướng chính của thị trường 
Hãy xoá bỏ mọi chỉ báo, đường trendline trên biểu đồ của bạn
Và chỉ giữ lại một biểu đồ trống không, chỉ duy nhất có đường giá 
Như vậy, bạn sẽ dễ dàng nhận thấy được 
Xu hướng chung của thị trường 
là giá đang tăng, đang giảm hay đi ngang. 
Khi thị trường đang tăng, chỉ chờ canh mua 
Khi thị trường đang giảm, chỉ chờ canh bán 
Và khi thị trường đi ngang, hãy đứng ngoài.
Khi bạn đi theo xu hướng chính của thị trường 
Nó sẽ giúp bạn tồn tại lâu hơn với thị trường,
Còn kiếm được tiền hay không,
thì phụ thuộc tâm lý giao dịch của bạn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi giao dịch đủ lâu ta nhận thức được
phương pháp giao dịch nào cũng ok hết
nhưng hãy chọn pp đi ngược lại những gã hay cháy tài khoản và thua lỗ nặng nề 
đó là tụi nó mua ở hỗ trợ và bán kháng cự
và có hành vi gồng lỗ đắm đuối , 
tệ hơn nữa là về vùng hỗ trợ/kháng cự tiếp theo thì lại dca tiếp
và kết quả là cháy tài khoản
hành vi giao dịch điển hình của trader newbie/ thất bại
tại sao lại có hành vi như vậy, ta sẽ bàn ở một chủ đề khác
việc của ta sẽ không mua khi giá gặp hỗ trợ và bán khi giá gặp kháng cự
việc của ta là chờ thủng hỗ trợ thì bán - và phá kháng cự thì buy 
để lấy lợi nhuận từ việc gồng lỗ đắm đuối của những gã tay mơ này`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Hi Vọng – Kẻ Thù Nguy Hiểm Nhất Của Trader 
Khi thị trường đi ngược với phân tích, bạn dễ rơi vào trạng thái hi vọng, hi vọng giá sẽ quay lại trở lại entry. Điều này khiến bạn có xu hướng tháo sl, hoặc di dời sl ra xa hơn, hành vi này khiến bạn sẽ gồng lỗ đắm đuối / call margin vào một ngày đó, và một ngày đó thường đến rất nhanh 
Hãy nhận ra, hành vi gồng lỗ này bắt nguồn từ sự hi vọng, một bản năng rất tự nhiên của con người. Nhưng trong trading, khi lỗ thì hi vọng là kẻ thua của các nhà đầu cơ chúng ta.
Khi lỗ, hãy cắt sớm. Bởi vì, thị trường đã đi ngược lại nhận định của bạn, nghĩa là phân tích của bạn đã sai, và khi sai chúng ta không có quyền hi vọng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nếu bạn không sẵn sàng cắt lỗ 
trước khi tham giao dịch bất kỳ 1 lệnh
thì dù có bao nhiêu tiền đi chăng nữa, 
bạn cũng không thể sống sót trong thị trường được lâu
Điều này nhấn mạnh tầm quan trọng,
của việc có một kế hoạch quản lý vốn chặt chẽ 
trước khi bắt đầu mọi hoạt động giao dịch trên thị trường tài chính.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Mỗi phương pháp giao dịch đều hướng tới một mục tiêu chung: nắm bắt được xu hướng thị trường. Nhưng dù chiến lược có hay đến đâu, khi áp dụng vào thực tế thì mắt xích yếu nhất lại là chính  con người.
Thiếu kỷ luật, quản lý vốn kém, những cảm xúc như tham lam, sợ hãi, lo lắng, hưng phấn – tất cả đều có thể trở thành “cái bẫy” mà trader tự đặt ra cho mình. Bởi vậy, bên cạnh những phân tích khách quan, điều quan trọng nhất là phải hiểu và làm chủ tâm lý của chính mình để nhìn rõ thị trường một cách toàn diện hơn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trong thị trường, có vô số phương pháp giao dịch hữu ích và hiệu quả. 
Chúng ta có thể học và giao dịch tất cả các phương pháp trên thị trường giả lập (demo)
Và sau đó tìm ra phương pháp giao dịch phù hợp với tính cách của ta nhất 
Rồi bắt đầu thử nghiệm nó trên môi trường thật với tài khoản nhỏ 
Để gọt giũa hệ thống 1 cách séc bén nhất trong vài năm 
Và hệ thống đó phải cho lợi nhuận ổn định ít nhất 6 tháng
Sau khi nhuần nhuyễn vào lệnh 1 cách nhất quán
Là vào lệnh "Automatic" y sì 1 phương pháp nhất định
Khi đó, tiền chỉ là phần thưởng cho việc tuân thủ và thực hiện đúng hệ thống giao dịch của mình.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Sự chú ý ->  quan trọng hơn sự tập trung -> sự chú ý đủ dẫn đến -> ý thức -> nắm bắt được mọi thứ nó như là -> tâm trí của bạn ko hoạt đông như tấm gương, nó luôn bóp méo mọi thứ và tạo ra những thứ thiết kế ở nơi chúng không tồn tại ->. có ý thức tâm trí bạn giống như một tấm gương đơn giản , nó chỉ thể hiện mọi thứ như nó vốn có -> chỉ khi bạn nhìn nhận mọi. thứ như nó vốn có -> bạn mới có khả năng xử lý mọi việc một cách hợp lý`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi bạn không cảm nhận đường xu hướng chính của thị trường 
Hãy xoá bỏ mọi chỉ báo, đường trendline trên biểu đồ của bạn
Và chỉ giữ lại một biểu đồ trống không, chỉ duy nhất có đường giá 
Như vậy, bạn sẽ dễ dàng nhận thấy được 
Xu hướng chung của thị trường 
là giá đang tăng, đang giảm hay đi ngang. 
Khi thị trường đang tăng, chỉ chờ canh mua 
Khi thị trường đang giảm, chỉ chờ canh bán 
Và khi thị trường đi ngang, hãy đứng ngoài.
Khi bạn đi theo xu hướng chính của thị trường 
Nó sẽ giúp bạn tồn tại lâu hơn với thị trường,
Còn kiếm được tiền hay không,
thì phụ thuộc tâm lý giao dịch của bạn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Chúng ta không cần một kế hoạch giao dịch hoàn hảo, mà cần một kế hoạch rõ ràng.
Chúng ta không cần một hệ thống giao dịch hoàn hảo, mà cần một hệ thống rõ ràng.
Chúng ta không cần một phương pháp quản lý vốn hoàn hảo, mà cần một phương pháp rõ ràng.
Sự "hoàn hảo" có thể mang lại sự tự tin tạm thời, nhưng không có sự rõ ràng thì đó chỉ là một con dao hai lưỡi. Trading không phải cuộc tìm kiếm sự tuyệt đối, mà là hành trình xây dựng sự rõ ràng và kỷ luật nhất quán.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `3 cái khác biệt giữa người trader thành công và không thành công.
Thứ nhất là tư duy dài hạn, họ làm gì cũng xây dựng nền tảng vững chắc, bài bản, chuyên nghiệp chứ không ăn xổi ở thì, làm tới đâu hay tới đó.
Hai là, họ biết cách nâng cấp sự chuyên nghiệp theo thời gian, bằng cách học hỏi, quản trị rủi ro, quản lý vốn chuyên nghiệp để nâng cao tính chuyên nghiệp của một trader. Không ai nhân bản từ 1 mà lên cả ngàn mà tự lui cui làm, sai tới đâu sửa tới đó. Làm gì cũng phải có bản đồ, kế hoạch và cam kết vững vàng.
Cuối cùng, họ khác vì họ hành động và triển khai hiệu quả, quyết liệt.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Market sẽ dạy ta khôn lớn qua những lần cháy tài khoản
Nên việc cháy tài khoản là chuyện đương nhiên phải xảy ra
Không có việc gì phải buồn hay khóc lóc
Điều quan trọng là sau mỗi lần cháy tài khoản
Mình rút ra được bài học gì
Nên những newbie mới bước vào nghề hãy xác định sẵn tâm lý
Là mình sẽ còn rất nhiều lần cháy tài khoản
Trước khi có thể kiếm tiền ổn định trên thị trường
Vậy hãy quản lý vốn như thế nào
Để làm sao cháy vài chục cái account
Vẫn còn tiền để luyện tập giao dịch tiếp
Tiếc nhất là những trader mới bắt đầu giao dịch
Sau vài lần cháy tài khoản đầu tiên
Là những cú cháy tài khoản lớn hơn, 
Do đa số là vay mượn để trả thù market
Chính những hành vi giao dịch này
Loại họ ra khỏi cuộc chơi tài chính.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Hi Vọng – Kẻ Thù Nguy Hiểm Nhất Của Trader 
Khi thị trường đi ngược với phân tích, bạn dễ rơi vào trạng thái hi vọng, hi vọng giá sẽ quay lại trở lại entry. Điều này khiến bạn có xu hướng tháo sl, hoặc di dời sl ra xa hơn, hành vi này khiến bạn sẽ gồng lỗ đắm đuối / call margin vào một ngày đó, và một ngày đó thường đến rất nhanh 
Hãy nhận ra, hành vi gồng lỗ này bắt nguồn từ sự hi vọng, một bản năng rất tự nhiên của con người. Nhưng trong trading, khi lỗ thì hi vọng là kẻ thù của các nhà đầu cơ chúng ta.
Khi lỗ, hãy cắt sớm. Bởi vì, thị trường đã đi ngược lại nhận định của bạn, nghĩa là phân tích của bạn đã sai, và khi sai chúng ta không có quyền hi vọng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `SỰ SỢ HÃI TRONG TRADING
Ae trade một thời gian rồi cũng đều biết cái cảm giác sợ hãi nó dính tới quyết định ra vào lệnh của ae như thế nào.
- Lỗ thì sợ mà lãi cũng sợ hơn, vấn đề là ae không học cách xử lý nó, thì ae sẽ mãi quay cuồng với cái vòng lặp cảm xúc này 
Khi lỗ, ae thường “SỢ” mất đi số tiền ae đang có, ae ngồi hi vọng rằng giá sẽ quay đầu , kết quả của hi vọng là gì thì ae cũng biết rồi ( đó là những khoản lỗ lớn và cháy tài khoản ).
- Còn khi lãi , ae “SỢ” mất đi lợi nhuận mà ae đang có, sợ giá nó về lại entry hay sl, mất đi lợi nhuận mà ae đã đạt được, nên ae có xu hướng chốt vội hay còn gọi là chốt non ( chốt không đúng với kế hoạch ban đầu ae đặt ra ) 
Nỗi sợ hãi khiến đầu óc ae bị tê liệt, tư duy logic biến mất, và hành động giao dịch lúc đấy là do cảm xúc ae quyết định, mà trong trading mà ae dùng cảm xúc để giao dịch thì gần như quyết định lúc đó luôn là sai lầm.
Điều quan trọng là ae học cách dùng nỗi sợ thay vì để nó điều khiển hành vi của mình, ae để ý mà xem, đám đông ngoài kia toàn bị cảm xúc dẫn dắt.
Nhận thức đúng:
- Khi ae đang lỗ ae nên sợ rằng nếu mình gồng lỗ nữa thì tài khoản sẽ cháy và không còn tiền để giao dịch nữa , chính vì vậy ae sẽ dứt khoát hơn trong việc cắt lỗ khi khoản lỗ còn nhỏ, nếu khoản lỗ lớn ae sẽ rất khó để cắt lỗ.
- Còn khi lãi ae nên tin tưởng rằng, lệnh này của ae phân tích đang đi đúng hướng của thị trường, nên ae có quyền hi vọng lợi nhuận sẽ tiếp tục tăng lên , vì thị trường đang ủng hộ ae, nếu thị trường không ủng hộ ae thì lệnh này của ae đang âm chứ không phải đang dương.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Phía bên trái màn hình những thứ đã xảy ra rồi, ai cũng dễ dàng phân tích được, khi giá đã chạy xong.
Nhưng phía bên phải màn hình là tương lai, là những thứ không chắn chắc, không ai biết được điều gì sẽ xảy ra ở thì tương lai.
Vậy nên mỗi lần đặt cược, chúng ta cũng chỉ là người phỏng đoán dựa trên kiến thức, kinh nghiệm, trải nghiệm của ta, để chọn phe, còn kết quả phe nào thắng thì chỉ có ngài  thị trường quyết định giá sẽ về đâu.
Nên ae đừng quá ảo tưởng, thần thánh hoá vào phương pháp, hệ thống giao dịch của mình mà tự tin quá dẫn đến những cú all in nhớ đời.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `THẤT BẠI – Chìa khóa dẫn đến thành công trong trading
Trading không phải là một cuộc chơi dễ dàng, và sai lầm là điều không thể tránh khỏi. Nhưng vấn đề không nằm ở việc bạn có mắc sai lầm hay không, mà là cách bạn xử lý chúng.
Hãy tạo cho mình một thói quen: ghi lại tất cả những sai lầm trong giao dịch hàng ngày. Đừng chỉ ghi nhớ trong đầu – hãy viết ra cụ thể. Những lần vào lệnh vội vã, không tuân thủ kỷ luật, hay quá tự tin mà bỏ qua phân tích.
Học cách phân tích sai lầm:
Lỗi nào khiến bạn thua lỗ lớn nhất?
Sai lầm nào lặp lại nhiều lần?
Bạn cần làm gì để sửa chữa những sai lầm đó? 
Điểm chung của những trader thành công không phải là họ không bao giờ mắc sai lầm, mà là họ luôn phân tích những thất bại và không bao giờ để mình phạm cùng một lỗi quá nhiều lần. Sai lầm là những bài học quý báu, và nếu bạn không học được từ chúng, bạn đang lãng phí tiền bạc và thời gian của bạn.
Trading là hành trình, không phải đích đến. Thời gian sẽ chứng minh rằng nếu bạn nghiêm túc nhìn nhận sai lầm của mình, bạn sẽ từng bước trở thành một trader giỏi hơn. 
Hãy nhớ: thất bại là một phần của cuộc chơi, không thất bại thì làm sao biết cách để chiến thắng, nhưng đừng để thất bại đánh gục bạn, hãy "thất bại nhỏ nhiều lần" để không bị loại ra khỏi cuộc chơi tài chính trước khi có thể bắt đầu bước đi trên đôi chân của mình.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi bắt đầu đặt cược và đặt tiền xuống 
thì cái tâm mình mà xao động,
bất an thì chính cái muốn đó không phù hợp 
khi cái mình muốn giảm lại hoặc đúng đắn hơn 
thì lúc đặt tiền xuống mình cảm thấy thảnh thơi vô tư 
thì y rằng lệnh đó sẽ win, hoặc sl ko thấy cay cú
nên ae phải đưa mình về trạng thái bình an, vui vẻ khi giao dịch,
đừng cố gắng tự làm khó chính mình,
bằng cách đi vol lớn hay nhồi dame, DCA 
để mong cầu kỳ vọng quá lớn, với trạng thái hồi hộp, lo lắng 
và kết quả là gì chắc ae đều biết.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Tiếng gọi của thị trường luôn có sức hút mạnh mẽ, dễ dàng khiến ta bị cuốn vào mà không nhận ra. Khi cảm giác thôi thúc "muốn vào lệnh" xuất hiện, hãy dừng lại và tự hỏi: Tại sao mình lại muốn làm điều này? Đây là bước đầu để nhận thức rõ thói quen của bản thân.
Chúng ta cần học cách nhận biết những cảm giác này, không vội vàng hành động, mà thay vào đó, từ từ thay đổi thói quen theo thời gian. Khi đã rèn luyện được sự tỉnh táo, mỗi lần cảm giác thôi thúc trỗi dậy, ta sẽ nhận ra: “À, đây chính là trạng thái dễ khiến mình mất tiền.”
Lúc đó, điều tốt nhất bạn có thể làm là đứng dậy, rời xa màn hình để tâm trí lắng dịu. Chỉ quay lại khi tinh thần đã ổn định và sẵn sàng đưa ra những quyết định sáng suốt hơn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Tâm Lý Giao Dịch
Tâm lý vững vàng mới là thứ quyết định bạn sống sót được bao lâu trên thị trường. Nhưng nói thật, không ai sinh ra đã có tâm lý thép cả. Nó được mài dũa từ những lần cháy tài khoản, những đêm mất ngủ, những lần mất tự tin về bản thân, bị bạn bè người thân cười chê,...
Mỗi lần mất tiền là một lần nhận ra mình đã sai ở đâu, một lần bị thị trường tát thẳng mặt để tỉnh ra. Và dần dần, bạn học cách chấp nhận, cách quản lý cảm xúc, và cách đứng dậy sau mỗi lần ngã.
Không có sách vở nào dạy bạn điều này, cũng chẳng có khóa học nào nói chính xác cảm giác khi tài khoản bạn bốc hơi. Chỉ khi bạn thực sự bước chân vào thị trường, ăn đủ đau thương từ nó, bạn mới lớn lên và hiểu ra giá trị của một tâm lý bình tĩnh và kiên nhẫn là như thế nào. Đây không phải thứ có được ngày một ngày hai, mà là cả một quá trình trả giá và học hỏi từ những sai lầm thất bại của chính bản thân.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Thị trường là một nơi thú vị, nhưng cũng đầy khắc nghiệt. Hồi mới vào nghề, mình từng nghĩ rằng cơ hội lúc nào cũng tràn ngập, cứ giao dịch nhiều là kiếm được nhiều. Nhưng dần dà, mình nhận ra một sự thật phũ phàng: thị trường không chỉ những có cơ hội, mà còn là rất nhiều cạm bẫy nguy hiểm được ngụy trang khéo léo.
Những tay chơi kinh nghiệm không vội vã. Họ hiểu rằng không phải tín hiệu nào cũng đáng để mạo hiểm. Có những lúc tốt nhất là không làm gì cả, đứng ngoài quan sát còn hơn lao vào một con sóng đầy rủi ro. Ngược lại, những trader mới thường ngây thơ, giao dịch liên tục, khối lượng lớn, hy vọng kiếm được thật nhiều tiền. Nhưng thị trường chẳng thương xót ai – nó quật ngã những người thiếu kiên nhẫn và quá tự tin nhanh hơn bạn tưởng.
Giao dịch mỗi lệnh giống như đi qua một bãi mìn – một bước sai cũng đủ thổi bay tất cả. Thành công không nằm ở việc bạn giao dịch bao nhiêu, mà ở chỗ bạn biết chọn lọc, chờ đợi và kiên nhẫn. Thị trường luôn đòi hỏi sự tỉnh táo, vì chỉ cần một khoảnh khắc mất tập trung, bạn có thể trả giá bằng cả tài khoản của mình.
Trading là một hành trình dài – không dành cho những kẻ vội vàng, nhưng sẽ thưởng xứng đáng cho ai biết học từ thất bại và trưởng thành sau mỗi lần vấp ngã.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi bạn vội bấm Buy/Sell mà không kiểm tra kỹ setup, đó không phải thị trường ép bạn – mà chính bạn tự đẩy mình vào rủi ro. Sợ "mất cơ hội," nghĩ "ổn rồi, vào luôn!" – nhưng sau đó, điều chờ đợi bạn là sl . Rồi sau khi sl bạn quay lại nhìn biểu đồ, mới thấy thiếu 1-2 yếu tố vào lệnh, hoặc thậm chí chẳng có yếu tố nào khớp với hệ thống giao dịch / kế hoạch giao dịch bạn đã đặt ra ban đầu.
Đây chính là cái bẫy tâm lý mà thị trường giăng sẵn. Nó kích thích lòng tham, đánh vào nỗi sợ, ép bạn hành động theo cảm xúc thay vì lý trí. Và tin tôi đi, market maker, nhà cái... chúng nó hiểu tâm lý này còn rõ hơn bạn hiểu chính mình. Đó là cách chúng kiếm tiền / khai thác – từ những sai lầm cảm xúc của các trader nhỏ lẻ.
Trading không phải cuộc chơi cảm xúc. 
Nếu bạn muốn tồn tại? Hãy tuân thủ nguyên tắc. 
Kiểm tra setup kỹ lưỡng, đợi đúng tín hiệu, rồi mới vào lệnh. 
Không đủ điều kiện? Đứng ngoài, giữ vốn. 
Kỷ luật mới là thứ giúp bạn tồn tại lâu dài trên thị trường,
không phải một vài pha FOMO bốc đồng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Mỗi phương pháp giao dịch đều hướng tới một mục tiêu chung: nắm bắt được xu hướng thị trường. Nhưng dù chiến lược có hay đến đâu, khi áp dụng vào thực tế thì mắt xích yếu nhất lại là chính  con người.
Thiếu kỷ luật, quản lý vốn kém, những cảm xúc như tham lam, sợ hãi, lo lắng, hưng phấn – tất cả đều có thể trở thành “cái bẫy” mà trader tự đặt ra cho mình. Bởi vậy, bên cạnh những phân tích khách quan, điều quan trọng nhất là phải hiểu và làm chủ tâm lý của chính mình để nhìn rõ thị trường một cách toàn diện hơn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi bạn phân tích thị trường, bạn đang nhìn vào hành vi đám đông.
Các đám đông cư xử giống nhau trong các nền văn hóa khác nhau trên các lục địa khác nhau. Các nhà tâm lý học xã hội phát hiện ra một số quy luật chi phối hành vi đám đông, và một trader cần hiểu chúng để nhìn cách đám đông thị trường ảnh hưởng đến anh ấy`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Cơ hội thì thấy đó nhưng vấn đề gồng lời, gồng lỗ của mỗi cá nhân khác nhau, vì tâm lý khác nhau , mà để muốn gồng lời tốt thì phụ thuộc lại kiến thức, kinh nghiệm, trải nghiệm và vị thế bản thân, mà mỗi cá nhân kiến thức, kinh nghiệm, trải nghiệm khác nhau, nên kết quả sẽ khác nhau, kết lại phần thưởng luôn dành cho những người làm tốt hơn, bất kể các lĩnh vực nào cũng vậy. Vậy nên đừng trách bản thân mình, cứ thất bại, cứ trải nghiệm, học hỏi, rèn luyện để mài giũa, sau này cơ hội khác chúng ta sẽ là người chiến thắng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trong đầu tư, ai cũng nhắm đến lợi nhuận. Đặc biệt là những người mới, luôn tập trung vào việc làm sao để "nhân đôi, nhân ba" số vốn của ho. Họ chưa đủ trải nghiệm kinh nghiệm,, chưa nếm đủ thất bại từ thị trường, nên họ thường bỏ qua cái gọi là rủi ro trong giao dịch.

Nhưng đối với những người đã trải qua bao thăng trầm, đã nhiều lần bị market vả sml thì tư duy lại khác hẳn. Đối với họ, bảo toàn vốn mới là nguyên tắc sống còn. Vì họ hiểu một điều đơn giản: còn tiền trong tài khoản thì ngày mai thị trưởng sẽ luôn luôn có cơ hội cho chúng ta làm lại. Còn hết tiền thì game over.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Cảm giác lo sợ xuất phát từ việc chúng ta không nhìn vào đúng tài khoản giao dịch của mình. Bản chất và chất lượng giao dịch của chúng ta phụ thuộc vào việc chúng ta Quản Lý Vốn như thế nào trong giao dịch.
`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Tại sao biết hết rồi mà vẫn thua, vì chưa đủ trải nghiệm, kinh nghiệm,..
Vì trader là một QUÁ TRÌNH
Không phải biết hết rồi sẽ thắng, nó cần phải có các giai đoạn trong trading.
Điều này ko ai tránh khỏi, và ko có con đường tắt`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Phía bên trái màn hình những thứ đã xảy ra rồi, ai cũng dễ dàng phân tích được.
Nhưng phía bên phải màn hình là tương lai, là những thứ không chắn chắc, là lòng tham và nỗi sợ hãi sẽ chi phối thị trường.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Tại sao chúng ta không kỷ luật trong giao dịch, có rất nhiều yếu tố, nhưng những yếu tố chính là do chúng ta thiếu kiên nhẫn với thị trường, không có kế hoạch & hệ thống giao dịch rõ ràng và có những thói quen xấu trong giao dịch.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Thành công trong giao dịch không chỉ phụ thuộc vào phân tích chính xác mà còn vào thời điểm hành động. Tâm lý là yếu tố quyết định, phân tích thì hay mà tâm lý như hạch cũng vứt. Kinh nghiệm thực chiến quan trọng hơn lý thuyết`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Ý nghĩa stop-loss
Trong giao dịch tài chính như forex, stop-loss là một công cụ cực kỳ quan trọng để bảo vệ vốn đầu tư. Đặt stop-loss có nghĩa là xác định một mức giá tối đa bạn sẵn lòng chấp nhận mất trước khi đóng vị thế. Mục tiêu là giảm thiểu tổn thất khi thị trường di chuyển ngược lại dự đoán của bạn. Một khi đã đặt stop-loss, quan trọng là không điều chỉnh hoặc tháo bỏ nó, để duy trì tính kỷ luật và quản lý rủi ro hiệu quả trong giao dịch.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Việc bạn xử lý giao dịch một cách có ý thức hay vô thức sẽ quyết định tài khoản của bạn , kỷ luật follow theo hệ thống của bạn một cách nhất quán thì thành công sẽ đến với bạn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Jesse Livemore",
    time: "12 giờ trước",
    content: "",
    fullContent: `Kinh nghiệm cho thấy một lệnh sẽ thắng là thấy một khoản nhuận ngay khi khớp lệnh giao dịch trong tâm lý đúng thời gian – chính là vào thời gian, khi mà động lực của sự biến động giá là rất mạnh và cổ phiếu chỉ đơn giản là phải tăng theo. Không phải là những giao dịch của thầy làm lên điều đó, mà chính là lực đứng đằng sau một cổ phiếu đặc trưng nào đó rất mạnh. Cổ phiếu chỉ đơn giản là bắt buộc phải đi theo con đường đó. - nếu ngay khi giao dịch giá đi ngược lại nhận định của mình có thể nên đặt lệnh cắt hoà và chờ thời điểm một cơ hội khác.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `"Chỉ khi bạn không ngừng nỗ lực để hòa nhập hoàn toàn vào thị trường giao dịch, bạn mới có thể khám phá sâu sắc và đa chiều của những cơ hội mà bạn có thể tận dụng."`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Chúng ta thường thua là do tính hay thay đổi kế hoạch ban đầu, vào lệnh rồi mà còn phân tích này phân tích nọ, phân tích lại rồi sửa stoploss , sửa entry, sửa target , rồi lại loss, lại cháy tài khoản vì những lần sửa lệnh. Nói giá như ban đầu mình giữ như vậy là ngon rồi, mua ra bán vào chi cho mệt , tối ưu đâu ko thấy toàn thấy tối thui mặt mày luôn.

Cách chữa bệnh hay thay đổi trong giao dịch :
Trước khi vào lệnh thì hãy phân tích thật kỹ và thận trọng tính toàn đường đi nước bước thắng thua như thế nào rồi xuống tiền.
Còn sau đó để thị trường sẽ đưa bạn ra khỏi thị trường.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nhiều người hay nghĩ muốn đầu tư hiệu quả thì phải liên tục dán mắt vào thị trường, nhưng thực tế không cần phải vậy. Thị trường có lúc cần chờ đợi, không phải lúc nào cũng có cơ hội rõ ràng để vào lệnh. Quan trọng là kiên nhẫn, đợi cho các điều kiện phù hợp xuất hiện. Ép mình phải giao dịch liên tục không chỉ gây mệt mỏi mà còn ảnh hưởng xấu đến sức khỏe và đời sống. Thay vì chạy theo số lượng giao dịch, hãy tập trung vào chất lượng của từng giao dịch.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Đừng chỉ nghĩ đến việc kiếm tiền,
hãy nghĩ đến việc giao dịch tốt.
Điều quan trọng nhất của việc giao dịch tốt,
là làm theo những gì bạn đã lên kế hoạch.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Không như nhiều người nghĩ, trading đòi hỏi tính kiên nhẫn của một trader nhiều hơn là sự nhanh nhẹn.

1. Chờ Đợi Xu Hướng Rõ Ràng
Khi xu hướng thị trường chưa rõ ràng, trader phải kiên nhẫn chờ đợi cho đến khi xu hướng trở nên rõ ràng hơn.

2. Tìm Điểm Entry Tốt
Khi xu hướng đã rõ ràng, trader tiếp tục ngồi chờ để tìm điểm entry (vào lệnh) tốt hơn.
Ngay cả khi đã tìm được điểm entry tốt, trader vẫn phải chờ đợi tín hiệu xác nhận để vào lệnh.

3. Xác Nhận Tín Hiệu
Sau khi vào lệnh, trader vẫn phải tiếp tục chờ đợi tín hiệu để thoát khỏi thị trường một cách hiệu quả.

Và nếu bạn là một người THIẾU KIÊN NHẪN, thì nghề trader có thể không phù hợp với bạn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Muốn giao dịch kiếm lợi nhuận ổn định, thì việc quản lý vốn là điều hiển nhiên phải có ở mỗi trader chuyên nghiệp, các trader chuyên nghiệp chỉ chấp nhận rủi ro tối đa 1-2% cho mỗi giao dịch để bảo vệ tài khoản của mình.Còn những trader nghiệp dư thường thất bại bởi vì 3 nguyên nhân :

1/ Đi vol to quá sức chịu đựng của tài khoản
2/ Không chấp nhận dừng lỗ
3/ DCA trong khi 1 lệnh vẫn đang âm.

Nếu nhìn ra lỗi rồi xem có khắc phục được không. Nếu không, có thể đã đến lúc cân nhắc thay đổi hướng đi trong nghề nghiệp.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Tâm lý trong đầu tư là thứ ít ai để ý, nhưng lại ảnh hưởng cực kỳ lớn. Khi bị lỗ, nhiều người cứ cố “gồng lỗ”, và viện đủ lý do để không cắt lệnh, nhưng thực ra, sâu bên trong là đang hy vọng. Hy vọng giá sẽ quay lại điểm entry để cắt hoà.

Nhưng nếu mãi mà giá vẫn chẳng ngóc đầu lên, cứ ì ạch đi ngang, thì cảm giác hy vọng đó dần chuyển thành sự chán nản. Và khi chán nản đủ lâu, nỗi sợ hãi mới thực sự xuất hiện.

Thị trường luôn có cách đẩy chúng ta vào các trạng thái tâm lý đó, và công cụ mạnh nhất của nó chính là "thời gian." Thị trường có rất nhiều thời gian để chờ, nhưng các trader thì thường không đủ kiên nhẫn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Bất kể thị trường nào, cũng sẽ có những cú sập không thương tiếc. Mỗi lần sập là một đợt thanh lọc, loại bỏ những kẻ không đủ bản lĩnh để chiến đấu. Những ai vay mượn, huy động vốn với hy vọng đổi đời nhanh chóng cuối cùng chỉ nhận lấy thất bại, rồi âm thầm rời bỏ thị trường.

Chỉ có những người lì đòn, chịu được áp lực mới sống sót qua những đợt sóng dữ và từ đó dần trở thành những tay chơi thực thụ. Cứ mỗi lần thị trường “tắm máu” là một lần nó mạnh mẽ hơn, chuẩn bị cho một chu kỳ khác lớn hơn. Dù là chứng khoán, bất động sản hay coin củng, qua bao lần đổ máu, thì các chỉ số vẫn tiếp tục tăng theo năm tháng. Thị trường lớn mạnh hơn sau mỗi đợt thanh lọc, và đó chính là cách nó phát triển.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi tham gia những trò cờ bạc mang tính giải trí, bạn không đơn giản là chơi để chống lại các tỷ lệ cược. Bạn còn phải chiến đấu với một kẻ thù được tạo ra trong nghệ thuật của sự lừa dối và ma mãnh.

Mọi trò chơi may rủi đều được thiết kế với sức hấp dẫn khiến cho người chơi bị cuốn vào lâu hơn, và ngay cả khi hết tiền và rời đi, họ cũng nghĩ rằng mình đã làm tốt hơn cơ hội mình có được.

Đối với nhiều người, những kết quả được sắp đặt và thiết kế cẩn thận này vẫn khiến họ hài lòng và thỏa mãn khi chơi. Mặc cho hết tiền, con bạc vẫn ra về mà không mảy may suy nghĩ.

Nhưng cờ bạc không chỉ là lời hứa suông về vận may, rằng vào một lúc nào đó bạn sẽ trúng một giải độc đắc.

Đối với những cá nhân nhạy cảm với cờ bạc, móc câu mà những nhà thiết kế trò chơi đã tạo ra thực sự quá nham hiểm. Còn giải pháp cho vấn đề nan giải này là gì? Nó vẫn nằm trong vòng quay vô tận của những cỗ máy đánh bạc.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Tại sao nhiều người thua khi giao dịch Forex dù chỉ có lệnh mua hoặc bán?

Nguyên nhân chính không nằm ở hệ thống giao dịch hay kế hoạch giao dịch, mà ở sự kỷ luật. Một hệ thống giao dịch tốt hay kế hoạch hợp lý cũng trở nên vô nghĩa nếu thiếu kỷ luật trong thực hiện.

Càng ít kỷ luật, cảm xúc sẽ càng chi phối quyết định giao dịch của bạn. Điều này khiến bạn mất kiểm soát, giao dịch lệch khỏi kế hoạch ban đầu và dần dần làm hao mòn tài khoản cho đến khi không còn gì.

Điều này giống như một con bạc ngồi vào bàn cá độ. Ban đầu, anh ta có chuỗi thắng liên tiếp, ví tiền dày lên trông thấy. Nhưng rồi, sau vài ván thua, anh ta quyết định đặt cược toàn bộ số tiền đã thắng. Kết cục, anh rời bàn với một chiếc ví trống rỗng.

Trong giao dịch Forex, ưu tiên hàng đầu không phải là kiếm được bao nhiêu lợi nhuận, mà là BẢO VỆ NHỮNG GÌ BẠN ĐANG CÓ. Khi bạn hết tiền, mọi cơ hội đều trở nên vô nghĩa.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trading không phải là con đường làm giàu nhanh chóng.
Thực tế, 95% ae tham gia thị trường đều thất bại. Nguyên nhân thất bại có nhiều, nhưng sâu xa nhất chính là thiếu kiên trì và không chờ đợi thời điểm chín muồi của bản thân.

Phần lớn mọi người vào thị trường với mong muốn kiếm tiền nhanh, chính cái tư duy này khiến họ mất tiền và bị loại khỏi thị trường sau vài tháng hoặc vài năm giao dịch.

Nếu anh em không thực sự đam mê, không yêu thích việc khám phá thị trường, không sẵn sàng đầu tư thời gian và chấp nhận "học phí" ban đầu để trau dồi kỹ năng giao dịch và tích lũy kinh nghiệm, thì tốt nhất nên dừng lại sớm. Bởi lẽ, khi mục tiêu chỉ là kiếm tiền nhanh mà thiếu đi sự đam mê thì công việc giao dịch không phù hợp với ae. Trading đòi hỏi sự kiên nhẫn, kỷ luật và tinh thần học hỏi không ngừng, nếu ae không có những điều này, việc thành công trên thị trường là gần như không thể.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Hãy cứ chịu khó gieo hạt, trồng cây, tưới tắm,...đồng thời vun bồi học hỏi kỹ thuật gieo trồng để làm sao cây ít chết, phát triển nhanh & cho năng suất cao. Đến một ngày nào đó khi bạn già & mệt ngồi dưới một gốc cây, đó rất có thể là cây mà chính bạn trước kia đã gieo trồng & chăm sóc. Bạn xứng đáng được hưởng trái ngọt & bóng mát.

Trong 5-7 năm đầu tiên của sự nghiệp bạn nên tập trung gieo trồng. Tuổi trẻ bây giờ có nhiều bạn trồng thì không muốn trồng chỉ đòi hái quả. Bạn thử nghĩ xem, bạn muốn hái quả mà không chịu trồng cây, đầu tư thời gian & công sức chăm bón thì có phải bạn phải đi ăn cắp không. Mà có ăn cắp thì bạn cũng thấp thỏm không yên, có nhiều tiền cũng không vẻ vang gì.

Nên làm gì cũng thuận theo tự nhiên, đừng khôn lỏi đi tắt đón đầu, đôi khi cái giá bạn phải trả sẽ đắt vô cùng. Cái gì thì cái năng lực của mình đến đâu mình hưởng đến đó là viên mãn nhất. Không có tiền đã khổ đã nhục, nhưng có nhiều tiền mà không có kiến thức thì còn nhục hơn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trong cuộc sống và hành trình giao dịch, mọi việc đều do chính bản thân ta.
Nhân quả không phải là câu chuyện may rủi hay hoàn cảnh,
mà là kết quả từ những quyết định và hành động của chúng ta
Khi giao dịch, đừng đổ lỗi cho thị trường hay sàn nó kill.
Chính bạn mới là người quyết định lệnh mua hay bán 1 cặp tiền tệ hay 1 cặp giao dịch nào đó.
Nếu vào thị trường với tâm lý chủ quan,
không có bất cứ 1 plan cụ thể nào,
hay kỳ vọng hão huyền cái lệnh đó sẽ win
thì bạn chỉ đang tự làm khổ mình.
Hãy chuẩn bị thật kỹ, nắm rõ luật chơi,
và đánh giá khả năng giao dịch của bản thân trước khi xuống tiền.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Cảm giác "tự do" trong đầu tư xuất hiện khi bạn tự tin vào quyết định của mình, không bị ảnh hưởng bởi những ý kiến từ bên ngoài. Nhiều nhà đầu tư thường bị lạc hướng bởi những lời khuyên từ các diễn đàn hay cộng đồng, khiến họ quên rằng họ có thể tự xây dựng chiến lược riêng.

Hãy dành thời gian để tự mình suy nghĩ, xem lại các kế hoạch cá nhân mà không tìm kiếm sự xác nhận từ người khác. Khi bạn không còn để ý đến những nhận định bên ngoài, bạn sẽ cảm nhận được sự "tự do" thật sự trong giao dịch.

Điều quan trọng là không để xã hội quyết định bạn phải làm gì. Hãy kiên định với mục tiêu của bản thân. Một khi bạn vượt qua nỗi sợ hãi của sự đơn độc và bắt đầu tận hưởng nó, bạn sẽ tìm thấy con đường riêng của mình trong đầu tư, tự do và vững vàng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Ralph Waldo Emerson từng nói rằng trong cuộc sống, bạn nhận được những gì bạn cho đi. Nếu bạn muốn có nhiều hơn, bạn phải đóng góp nhiều hơn cả về chất lượng lẫn số lượng. Điều này cũng đúng trong giao dịch tài chính. Nhiều người chỉ nhìn vào lợi nhuận của người khác mà không thấy những gì họ đã đầu tư: thời gian, công sức, học hỏi và vốn liếng. Trước khi mong muốn thành công, hãy tự hỏi liệu bạn đã sẵn sàng trả giá đủ lớn chưa? Thành công không có đường tắt; nó là kết quả của quá trình chăm chỉ và đầu tư. Khi bạn đã phát triển đủ về kiến thức và tài chính, thành quả sẽ đến với bạn.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Thị trường được tạo bởi hành vi mua bán của mỗi cá thể
Hành vi mua bán được tạo nên bởi tâm lý giao dịch của từng cá nhân
Tâm lý giao dịch được tạo nên bởi 2 cảm xúc chính : tham lam và nỗi sợ hãi của mỗi người chúng ta
Tham lam và nỗi sợ hãi là bản chất trong mỗi con người
Mà bản chất con người thì không bao giờ thay đổi, nên thị trường hay lặp đi lặp lại các mô hình giống nhau
Nên hãy dựa vào tâm lý bản thân, tâm lý market để tránh những vùng quá mua, quá bán của thị trường khi tham gia giao dịch.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Đừng bao giờ để mức thua lỗ quá 10% lượng vốn đầu tư. Livermore học được điều này khi làm việc trong các cơ quan môi giới khi đăng ký với mức giới hạn 10% và tự động bán ra nếu thua lỗ vượt quá mức giới hạn. Đây là một trong những nguyên tắc quan trọng trong quản lý tiền.

Bạn có thể kiếm được một khoản tiền lớn từ sự kiên nhẫn chờ đợi chứ không phải chỉ từ trí tuệ. Vấn đề khó nhất bạn phải đối mặt là kiên nhẫn và chờ đợi một dấu hiệu rõ ràng của thị trường có thể tham gia giao dịch.

Thị trường có sức cám dỗ rất mạnh, có thể khiến bạn vội vã tham gia thực hiện một giao dịch mà không có bất cứ một cơ sở nào. Lỗi này có thể khiến các nhà giao dịch mất đi rất nhiều tiền. Bạn phải chắc chắn có một cơ sở rõ ràng khi bắt đầu một cú trade, và một sơ sở rõ ràng khi cắt lỗ hoặc chốt lời.

Chỉ khi tất cả các yếu tố của thị trường đều có lợi cho bạn, bạn mới nên tham gia một cú trade. Không ai có thể giao dịch vào mọi lúc và lúc nào cũng chiến thắng. Có những lúc bạn phải hoàn toàn đứng ngoài thị trường. (Livermore)`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Kẻ thù lớn nhất của trader không phải là thị trường, mà chính là bản thân anh ta. Cảm xúc như hi vọng và sợ hãi là hai thứ luôn tồn tại trong mỗi con người, nhưng khi giao dịch, chúng lại là nguyên nhân dẫn đến thất bại.

Khi lệnh đang lỗ, nhiều người không dám cắt vì hi vọng giá sẽ quay đầu. Họ bám víu vào điều đó, để rồi thua lỗ càng lúc càng lớn hơn. Ngược lại, khi lệnh có lời, họ lại sợ mất số lợi nhuận nhỏ  trước mắt, vội vàng thoát ra thay vì để lệnh chạy xa hơn.

Một trader giỏi là người biết kiểm soát cảm xúc của chính mình. Anh ta không bao giờ để hi vọng mù quáng kéo mình xuống, mà luôn sẵn sàng cắt lỗ ngay khi cần thiết. Đồng thời, anh ta cũng không sợ hãi khi đang có lời, anh ta luôn luôn kiên nhẫn chờ thị trường cho anh ta điểm ra.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Thiếu kiên nhẫn là điểm yếu chí mạng của nhiều trader. Nỗi lo "sợ hết cơ hội" hay "người khác ăn hết phần của mình" dễ khiến bạn nôn nóng và vào lệnh bừa bãi.

Hãy luôn nhớ rằng, 70% thời gian thị trường đi ngang, gần như không có điểm vào lệnh rõ ràng, chỉ 30% là thị trường có xu hướng mạnh.

Kiên nhẫn là công cụ giúp bạn tránh được những entry xấu, và có một entry chất lượng, nó sẽ giúp bạn giữ vị thế khi có lãi / và dễ dàng cắt lỗ khi sai. Còn để kiên nhẫn được thì câu trả lời nằm bên trong bản thân của mỗi người.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Lòng tham, nỗi sợ hãi, và hy vọng – những cảm xúc rất con người – lại chính là "kẻ thù" nguy hiểm nhất của mọi trader.

Trading không đơn thuần là sân chơi dành cho những người giỏi phân tích. Ngoài kia, có không ít admin, leader vẽ chart rất đẹp, dự đoán rất đúng, nhưng vẫn thất bại. Lý do là vì sao? Bởi sau khi vào lệnh, mọi thứ không còn nằm ở lý trí mà phụ thuộc vào khả năng kiểm soát cảm xúc của anh ta.
Khi đi vol lớn, lòng tham, hy vọng và nỗi sợ hãi càng dễ bị kích động, dẫn đến những quyết định mất kiểm soát. Nhiều trader bị cuốn vào vòng xoáy tâm lý này, dẫn đến trí óc bị tê liệt và mù quáng, rồi tự hủy hoại kế hoạch ban đầu của chính mình. Dù trước đó phân tích đúng 100%, thị trường chạy đúng như kỳ vọng, nhưng kết quả vẫn là không kiếm được tiền, tệ hơn nữa là mất tiền.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi đã bước chân vào nghề này đủ lâu, bạn sẽ phải đối mặt với một sự thật đau đớn: cắt lỗ không phải là kỹ năng, mà là bài học vô giá đánh đổi bằng máu và tiền.

Là con người, ai chẳng sợ thừa nhận mình sai. Nhưng chính cái sự cố chấp, không dám đối diện với việc mình đã sai, đã đẩy nhiều người vào vòng xoáy nguy hiểm, ôm lệnh lỗ từ ngày này qua ngày khác, nuôi hy vọng mong manh rằng giá sẽ quay đầu. Sự chờ đợi đó không cứu được bạn, nó chỉ lặng lẽ tiễn tài khoản của bạn vào một ngày không xa.

Một lệnh thua không thể đánh bại bạn, nhưng cái tư duy cố chấp, từ chối sự thật, mới là thứ hạ gục bạn. Sai là sai, đúng là đúng. Thị trường không quan tâm bạn nghĩ gì, nó chỉ vận hành theo quy luật riêng của nó, lạnh lùng và vô cảm đến tàn nhẫn.

Nếu lệnh đã tới điểm stoploss, hãy cắt lỗ, cắt lỗ và cắt lỗ.
Đừng tự trách bản thân, cũng đừng dằn vặt khi thua lỗ. Cắt lỗ không phải thất bại, mà là hành động bảo vệ tài khoản và cho bạn nhiều cơ hội khác hơn để làm lại trong tương lai.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Để tồn tại lâu trên thị trường, bạn cần một kế hoạch cụ thể cho từng kịch bản của đường giá. Thị trường không phải lúc nào cũng đi theo phân tích của bạn. Nếu không có sự chuẩn bị trước, bạn sẽ dễ rơi vào trạng thái hy vọng mù quáng, mong chờ giá quay đầu trong bất lực.
KẾ HOẠCH RÕ RÀNG sẽ giúp bạn giữ vững tâm lý, loại bỏ sự sợ hãi và đưa ra quyết định dứt khoát. Khi một lệnh giao dịch đi sai kế hoạch và may mắn về bờ, thì bạn đừng cố gắng gồng lời. Bởi vì ngay từ đầu, điểm vào lệnh của bạn đã sai, và khi sai, chúng ta không có quyền hy vọng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi đã bước chân vào nghề này đủ lâu, bạn sẽ phải đối mặt với một sự thật đau đớn: cắt lỗ không phải là kỹ năng, mà là bài học vô giá đánh đổi bằng máu và tiền.
Là con người, ai chẳng sợ thừa nhận mình sai. Nhưng chính cái sự cố chấp, không dám đối diện với việc mình đã sai, đã đẩy nhiều người vào vòng xoáy nguy hiểm, ôm lệnh lỗ từ ngày này qua ngày khác, nuôi hy vọng mong manh rằng giá sẽ quay đầu. Sự chờ đợi đó không cứu được bạn, nó chỉ lặng lẽ tiễn tài khoản của bạn vào một ngày không xa.
Một lệnh thua không thể đánh bại bạn, nhưng cái tư duy cố chấp, từ chối sự thật, mới là thứ hạ gục bạn. Sai là sai, đúng là đúng. Thị trường không quan tâm bạn nghĩ gì, nó chỉ vận hành theo quy luật riêng của nó, lạnh lùng và vô cảm đến tàn nhẫn.
Nếu lệnh đã tới điểm stoploss, hãy cắt lỗ, cắt lỗ và cắt lỗ.
Đừng tự trách bản thân, cũng đừng dằn vặt khi thua lỗ. Cắt lỗ không phải thất bại, mà là hành động bảo vệ tài khoản và cho bạn nhiều cơ hội khác hơn để làm lại trong tương lai.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Thương Trường Như Chiến Trường
Thương trường chẳng khác gì chiến trường. Trên chiến trường, binh sĩ nào cũng phải chuẩn bị kỹ càng từ kỹ năng chiến đấu, cách sinh tồn, cho đến áo giáp, vũ khí, và cả những kế hoạch tác chiến cẩn thận. Nhưng ngay cả khi đã trang bị đầy đủ, họ vẫn chẳng thể đảm bảo chiến thắng 100%. Nếu ra trận mà thắng thì tốt, nhưng nếu thua mà vẫn bảo toàn mạng và sống sót trở về thì đã là một kỳ tích.
Trader chúng ta cũng như những chiến binh ấy, mỗi lần vào lệnh là một lần đánh trận. Điều đầu tiên cần làm là làm sao để bảo toàn tài khoản( mạng sống) khi gặp thất bại. Nếu bạn có thể sống sót sau chuỗi thua lỗ, đó đã là một thành công lớn. Vậy mà nhiều người, chẳng có chút “kỹ năng chiến đấu” nào, không có “áo giáp,” không có “vũ khí,” cũng chẳng có kế hoạch cm gì cả mà cứ lao thẳng vào thị trường như những con thiêu thân.
Càng nguy hiểm hơn khi có những người mới học được chút ít kỹ năng, thử vài lần thấy thắng đã vội nghĩ mình tài giỏi, lao ngay ra chiến trường khua tay khua chân mà chẳng hề lường trước hậu quả. Kỹ năng chưa vững, kinh nghiệm chưa đủ, nhưng lại tự tin thái quá, thì việc cháy tài khoản chỉ là sớm hay muộn mà thôi.
Trong khi đó, hãy nhìn các chiến binh thực thụ. Họ không ngừng rèn luyện mỗi ngày. Họ tập tháo lắp súng, lau chùi vũ khí, học cách sinh tồn trong những hoàn cảnh khắc nghiệt nhất. Họ rèn luyện từng chút một, ngày qua ngày, đến khi nhuần nhuyễn mọi kỹ năng. Trader cũng cần như vậy. Không phải cứ học vài tuần, thử vài lệnh thắng là có thể tự nhận mình “cứng.” Phải cần thời gian, cần kinh nghiệm, trải nghiệm và những thất bại để trưởng thành.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `THE KEY 2025 : SỰ RÕ RÀNG
TẠI SAO AE VẪN PHÁ KỶ LUẬT DÙ ĐÃ CÓ QUY TẮC RỒI
Tại sao ae biết sai rồi mà vẫn chưa sửa
Nó nằm phần lớn ở hệ thống giao dịch KHÔNG RÕ RÀNG
- Một là chưa có hệ thống giao dịch của cá nhân, giao dịch theo kèo admin,leader nhóm, group
- Hai là hệ thống giao dịch quá rắc rối, quá nhiều quy tắc, khó để làm theo, vào lệnh tặc lưỡi bỏ đi quy tắc, đa số là dẫn đến lệnh ẩu, phá kỷ luật là vì vậy.
- Ba là hệ thống giao dịch không rõ ràng, còn mơ màng, chung chung không cụ thể chi tiết.
Để giải quyết vấn đề trên thì ae nên bắt đầu xây dựng hệ thống giao dịch bắt đầu với 1-2 điều kiện vào lệnh đơn giản, rồi nâng lên khi 1-2 điều kiện ban đầu đã thành thói quen, là vào lệnh luôn luôn có 1-2 điều kiện đó, rồi nâng lên 3 điều kiện, rồi nâng lên 4 điều kiện sau khi những điều kiện ban đầu đã thuần thục, chứ đừng áp đặt 1 lần 10-20 điều kiện mới vào lệnh, cực kỳ rất khó để làm theo, và điều kiện nó thì phải rõ ràng như ban ngày , chứ đừng ảo ảo thực thực.
Ví dụ điều kiện rõ ràng như:  Cắt lỗ 1% tài khoản, là 10$ trên 1000$
Là 1 lệnh đặt stop loss ở đâu, đòn bẫy thế nào thì khi chạm điểm sl thì phải thua là 10$ .
Ae người mới bắt đầu từ đó, từ từ làm theo rồi nhuẫn nhuyễn tạo được một bộ điều kiện cho riêng bản thân, phù hợp với vị thế tài chính cá nhân, hoàn cảnh gia đình. Rồi từ từ hệ thống giao dịch cá nhân của ae nó sẽ hiện ra RÕ RÀNG sau vài năm tu luyện.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Hai năng lực mạnh nhất của con người:
Trí nhớ: giúp ta lưu giữ những bài học, nhưng nếu không biết kiểm soát, nó chỉ khiến ta mắc kẹt trong những đau khổ, thất bại của quá khứ.
Trí tưởng tượng: cho ta sức sáng tạo và khả năng vạch ra kế hoạch, nhưng nếu lạm dụng, nó dễ dẫn đến ảo tưởng và kỳ vọng không thực tế.
Chúng ta thường vận hành hai năng lực này sai cách, để rồi chính chúng trở thành gánh nặng, làm mờ đi thực tại. Thay vì phục vụ ta, chúng lại điều khiển ta, dẫn đến đau khổ và thất vọng.
Cốt lõi của vấn đề nằm ở việc nhận diện và làm chủ hiện tại. Khi trí nhớ và trí tưởng tượng được sử dụng đúng chỗ, chúng trở thành công cụ mạnh mẽ để xây dựng một cuộc sống vững vàng và ý nghĩa, chứ không phải những xiềng xích vô hình.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trader – Nghề của những nhà quản lý rủi ro chuyên nghiệp

Càng ở lâu trong thị trường, mình nhận ra có 2 điều mà trader không bao giờ kiểm soát được:
1️⃣ Giá sẽ đi về đâu.
2️⃣ Khi nào nó sẽ xảy ra.

Nhưng đó không phải vấn đề, vì công việc thực sự của trader không phải là “dự đoán thị trường,” mà là QUẢN LÝ RỦI RO.
- Nếu thua, mình biết trước sẽ mất bao nhiêu nhờ SL.
- Nếu thắng, mình biết sẽ kiếm được bao nhiêu nhờ TP.

Làm trader nghĩa là làm một nhà quản lý rủi ro chuyên nghiệp. 

Công việc của một nhà quản lý rủi ro chuyên nghiệp là:
✅ Lập kế hoạch giao dịch rõ ràng.
✅ Tuân thủ nghiêm ngặt hệ thống đã xây dựng.

Dự đoán đúng hay sai chỉ là một phần của trò chơi. Cái khiến trader khác biệt với người chơi cờ bạc là cách họ kiểm soát rủi ro.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trong các lựa chọn mua, bán hay đứng ngoài, thì ĐỨNG NGOÀI thị trường thường là quyết định khôn ngoan nhất. 
Hãy chờ đợi một set up giá đúng vào đúng thời điểm trên biểu đồ, đừng vội vàng nhảy ngay vào giao dịch chỉ vì tài khoản của bạn đang có tiền. 
Giao dịch chậm đi một chút, là cách tiếp cận khôn ngoan nhất.
Và cách kiếm tiền nhanh nhất là kiếm tiền thật chậm.

P/s: Viết cho những bạn hay copy bài mình mà *éo ghi nguồn, thì chỉ càng chứng tỏ bạn chưa sẵn sàng đối mặt với SỰ THẬT: kiến thức đó không phải của bạn, và cái tôi vẫn đang che lấp sự trưởng thành cần có, và mãi làm thanh khoản cho market thôi.. đm, chửi vậy là lịch sự lắm rồi đấy :)))`,
    shares: 28,
  },
  {
    id: 5,
    author: "Jesse Livemore",
    time: "12 giờ trước",
    content: "",
    fullContent: `Bất cứ khi nào tôi đủ kiên nhẫn để đợi thị trường đến điểm mà tôi gọi là Pivotal Point, Điểm then chốt hay điểm cơ sở - trước khi bắt đầu giao dịch, tôi sẽ luôn có thể kiếm tiền trong các hoạt động của mình. Bởi khi đó tôi sẽ khởi động cuộc chơi của mình ngay vào thời điểm tâm lý ban đầu của một đợt biến động. Tôi không bao giờ tốn thời gian lo lắng về một lý do đơn giản nào đó mà hành động nhanh chóng và bắt đầu tích lũy ngay khi các hướng dẫn của tôi nói tôi phải làm vậy. Tất cả những gì tôi phải làm sau đó là ngồi thật vững và để thị trường tự vận động, biết rằng nếu tôi làm vậy, bản thân sự vận động của thị trường theo thời gian cũng sẽ truyền đến tín hiệu báo cho tôi biết khi nào phải chốt lời. Và bất cứ khi nào tôi có đủ lý trí và kiên nhẫn để chờ đợi tín hiệu thì nó sẽ đến. Kinh nghiệm cá nhân của tôi là chưa bao giờ được lãi nhiều từ những giao dịch mà tôi không tham gia ngay từ giai đoạn đầu của đợt biến động đó. Và lý do là tôi đã bỏ lỡ mất phần tích lũy lợi nhuận ban đầu; đây là yếu tố cần thiết để nhà đầu tư can đảm và kiên nhẫn chờ đợi đến khi đợt biến động chấm dứt, hay kiên nhẫn nắm giữ khi thị trường có những điều chỉnh nhẹ, thường sẽ lặp lại liên tục trước khi hoàn tất đợt biến động đó. Theo thời gian, thị trường sẽ cho bạn tín hiệu tích cực về thời điểm tham giá (nếu bạn kiên nhẫn chờ đợi,) đồng thời chắc chắn cũng cho bạn tín hiệu khi nào cần thoát ra. "Thành rome không được dựng lên trong một ngày: và không có đợt biến động quan trọng nào chỉ diễn ra trong một ngày hay thậm chí một tuần. Nó cần thời gian để hoàn tất xu hướng. Điều quan trọng là một phần lớn biến động thị trường thường xảy ra vào 48 giờ cuối cùng của cuộc chơi và đây là thời điểm quan trọng nhất để tham gia.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trong các lựa chọn mua, bán hay đứng ngoài, thì ĐỨNG NGOÀI thị trường thường là quyết định khôn ngoan nhất.
Hãy chờ đợi một set up giá đúng vào đúng thời điểm trên biểu đồ, đừng vội vàng nhảy ngay vào giao dịch chỉ vì tài khoản của bạn đang có tiền.
Giao dịch chậm đi một chút, là cách tiếp cận khôn ngoan nhất.
Và cách kiếm tiền nhanh nhất là kiếm tiền thật chậm.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Thói quen sĩ diện và cách ta tương tác với cái tôi thường rất phức tạp. Ta thường tự giữ lại những chi tiết thắng lợi, để thể hiện cho mình là một người thành công, nhưng khi gặp thất bại, ta lại cảm thấy khó lòng thú nhận và che giấu đi.
Điều này phần nào xuất phát từ mong muốn tôn vinh cái tôi của chúng ta. Chúng ta muốn tự hào về bản thân, muốn người khác nhìn thấy mình là người xuất sắc, thành công. Nhưng khi gặp khó khăn, chúng ta lại sợ rằng việc thừa nhận sự thất bại sẽ làm tổn thương cái tôi đó.
Nhưng từ đâu mà cái tôi này ra đời? Có thể cái tôi được hình thành từ nhiều yếu tố khác nhau, từ cách chúng ta sinh ra và lớn lên trong một xã hội, đến cách chúng ta tương tác với thế giới xung quanh.
Cái tôi không chỉ là về việc muốn thể hiện bản thân, mà còn liên quan đến việc xác định bản thân trong một cách nào đó. Đó có thể là sự tự tin, lòng kiêu hãnh, hoặc sự nhạy cảm đối với sự đánh giá từ người khác. Đối với mỗi người, cái tôi mang ý nghĩa và hình thành theo cách riêng biệt.
P/s: Nên lên mxh thì lệnh thắng up story kèm nhạc giựt gựt cap cut, còn lệnh thua thì đe*o thấy đâu :))`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi giao dịch tài chính nếu ta đạt trạng thái  "mặc kệ lệnh" trong lúc lệnh đang chạy
Thì lúc đó ta đang rơi vào trạng thái giao dịch tốt nhất 
Để đạt trạng thái "mặc kệ lệnh" như vậy 
Thì chúng ta chỉ cần làm một việc
Là chúng ta hạ volume tới mức để bản thân ta
Rơi vào trạng thái "không còn nỗi đau hoặc ít nỗi đau nhất" khi lệnh đó thua.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nếu là trader mình nghĩ nên bỏ pp DCA khi âm đi, và luôn đặt stoploss cho mỗi chiến lược giao dịch
Vì đánh theo kiểu DCA này, phương pháp này rất thịnh hoành, đa số trader mới đều biết và dùng pp này, vì thị trường 70-80% là đi ngang và chạy trong 1 biên độ giá nào đó
Rồi DCA rất nhiều lần nó cho mình về bờ, nhưng lãi tí lại chốt non vì được về bờ đi đa số sẽ thoát hoặc lãi ít là chạy rồi
Dù pp này đúng 99 lần chỉ 1 lần thị trường có xu hướng mạnh là thổi bay cả tài khoản, vì càng âm càng DCA, khó có thể cắt lỗ, vay mượn thêm để DCA , nhưng sai chỉ 1 lần là logout ra khỏi thị trường vĩnh viễn, ko còn cơ hội để quay lại market, vì nợ nần quá nhiều rồi.
Nên số đông trader mới vào nghề ko tồn tại quá 3 năm là vì vậy, nên ae thấy đa số trader là newbie là nhiều, còn ae trader kỳ cựu 7,8 năm là rất ít.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Trong cuộc sống, áp lực thường khiến con người dễ bị lạc hướng và đuổi theo dòng chảy. Đặc biệt trong giao dịch, cám dỗ để theo đuổi các hành động của người khác có thể là một nguy hiểm lớn, dù đôi khi bạn có thể bỏ lỡ các cơ hội quan trọng. Đó là lý do tại sao việc có một hệ thống giao dịch và tuân thủ nguyên tắc quản lý vốn là cực kỳ quan trọng. Chúng không chỉ đại diện cho quyết định cá nhân hợp lý mà còn là cánh cửa mở ra cho sự tự chủ và định hình rõ ràng trước khi bạn thực hiện bất kỳ động thái nào trên thị trường.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Ở cái thị trường này, thằng nào kỉ luật, kiên nhẫn chắc chắc thắng, vì đa số các người tham gia giao dịch là vô kỷ luật, dẫn đến thua lỗ, cháy tài khoản , việc 1 trader tuân theo kế hoạch của mình thì gần như rất khó để market loại a ta ra khỏi cuộc chơi.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Ý nghĩa của 'STOP LOSS' là gì, nghĩa là khi ta dính stop loss là nhận định của ta đã sai,
và ta kết thúc giao dịch đó , ko có gì nữa cả. Stop loss là chuyện đương nhiên.
Bởi vì ta cố chấp ko chấp nhận mình sai, nên mới dời stoploss, hay tệ hơn là ko cài stop loss.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Ở thị trường tài chính này, 90% người chơi là thua lỗ:
- Vì không quản lý vốn, không quản lý cảm xúc, không có kế hoạch giao dịch, không có hệ thống giao dịch,
 và không tuân thủ nguyên tắc giao dịch của mình, không có kinh nghiệm giao dịch, 
và có tính bảo thủ, cố chấp, thù hằn market , DCA khi sai, giao dịch quá nhiều lệnh, đi volum quá lớn,
không cắt lỗ, kỳ vọng quá cao, hy vọng quá nhiều, sợ hãi khi có lời dẫn tới chốt nốt non,..
=> tránh và khắc phục những lỗi này và trau dồi giao dịch thì sau vài năm chiến thắng những người chơi này là việc không khó.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nguyên tắc khi cài stoploss:
Là không được tháo hay di dời điểm stoploss, hãy để stoploss làm nhiệm vụ của nó, nó giúp bạn  bảo toàn nguồn vốn trước những biến động lớn của thị trường.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Được - mất luôn đi đôi với nhau
Lúc này được, lúc kia mất
Nó như ngày và đêm
Lúc này sáng, lúc kia tối
Đó là một vòng lặp của chu kỳ
Khi thắng khi thua cũng như vậy
Lúc thắng , lúc thua là chuyện bình thường trong giao dịch
Đừng quá cảm xúc khi thua và thắng xuất hiện
Để làm sao thắng thua không ảnh hưởng tới mình
Là đặt cái tôi của mình dưới market
Là đặt số tiền mình vào lệnh
Nếu sl, mình vẫn thoải moái với số tiền đó
Đừng bị ảo giác, miệng nói bô bô là sl vẫn thoải moái 
khi tài khoản có 100tr, mà sl kêu 30-40 chục vẫn thoải moái
Đó là bạn đang nói dối với chính mình
Hãy trung thực nhìn nhận lại, muốn mà thoải moái với tk 100tr
chỉ có 1 cách là đi vol 1tr thôi
còn lại chỉ là lời biện mình cho quan điểm ngu dốt của mình`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Mỗi lần thất bài đau đớn, là một bài học đắt giá
Hãy trân trọng, biết ơn những thất bại này
Chính chúng sẽ là thứ giúp ta trưởng thành
Hãy ghi lại những thất bại đó
Rồi sau này nhìn lại, chúng ta sẽ cảm ơn nó
Nhờ nó mà ta biết sai ở đâu mà sửa
Nếu không có nó, không biết đâu mà sửa để đi lên
Thì hóa ra thất bại là một điều tốt
Nó chỉ không tốt khi ta không rút ra được gì từ thất bại đó.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Việc mà tiền nằm trong tài khoản, mà nhìn chart mà không trade thì phải gọi là đẳng cấp lắm
Vì thị trường luôn mời gọi chúng ta vào, cứ như luôn luôn có cơ hội kiếm tiền mọi lúc, mọi thờ igian
đó là cái tâm mình phản ứng với market
tâm mình càng yếu thì càng dễ bị market dụ dỗ
tâm càng cứng cáp thì luôn vững chãi trước lời mời gọi của market
để tâm cứng cáp thì phải trải qua thất bại và tự ngẫm, rồi tìm cách không lặp lại
và tu tâm bằng nhiều pp khác nhau, để mới có thể đứng vững trên thị trường
một bài học mấy người vượt qua, vượt qua được là chặng đường thành công của bạn qua một bậc thang mới.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Không vào lệnh khi biểu đồ không cho vào thì đã rất thành công rồi
Đa số trader mãi giao dịch hằng ngày, luôn luôn tìm điểm entry để vào lệnh
Với suy nghĩ là phải làm mới có ăn
Nghề trader nó không như mọi nghề khác
Gần như công việc của trader như lính bắn tỉa
công việc chính của trader là ngắm thật kỹ
canh vị trí, canh điểm chí mạng, canh gió, canh khoảng cách,...
khi kiểm tra mọi thứ đầy đủ rồi mới bóp cò
cho do có trúng mục đích hay không
thì lính bắn tỉa đã tiết kiệm rất nhiều đạn
vì ngắm lâu mới bắn
còn trader chúng ta, cũng phải tư duy như lính bẳn tỉa
phải để đạn chúng ta dành cho phát súng có tỉ lệ chính xác cao nhất
chứ đừng sài phung phí, đến khi mục tiêu vào tầm bắn thì sờ túi thì đạn đã hết`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nói KHÔNG với giao dịch không đúng set up của mình,nếu vẫn cố chấp vào lệnh không đúng set up của mình thì là thằng trader không có nhận thức rồi, luôn u mê bởi những cạm bẫy mà market giăng ra.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Những thói quen nên loại bỏ khi muốn kiếm tiền từ thị trường này:
Là việc đầu tiên là đừng bận tâm, soi mói túi tiền của người khác
Miệng cứ hỏi, ông này có mấy chục k, bà kia mấy trăm ngàn đô
Cái lệnh idol của tao đi nhất việt nam, ko ai sánh bằng
Ông kia đợt rồi lãi 200k$ , bà kia vừa rồi gồng lệnh cháy 300k$
Ae nếu có thói quen này thì bỏ ngay đi
Cứ mãi soi mói túi tiền của người khác ko làm ae giàu lên đâu
Quá bận tâm việc ông A kiếm được mấy trăm ngàn đô
Mình cũng phải được như ông A, không được mấy trăm, cũng phải được vài chục ngàn đô
Trong khi vị thế thì đéo có, tiền có mấy đồng bạc, 
rồi nảy sinh đi vay mượn để mong được như người ta
rồi nạp lên sàn vẫn chưa đủ, vay mượn thêm đòn bẩy để kiếm được như ông A
Trong khi kiến thức, kinh nghiệm, trải nghiệm thì lủng ca lủng củng, bập bọe
Chưa chứng minh được mình đã kiếm lợi nhuận ổn định trong thị trường
Mà cũng mong muốn được như người ta 
Bởi cái mong muốn ấy mới giết chết ae 
Ae giao dịch với cái tâm thế , số tiền vay mượn đó
Đảm bảo với ae sẽ không bao giờ kiếm được tiền đâu
Kiếm bao nhiêu cũng trả lại hết thôi
Điều tối kỵ nhất của trader : Là không sử dụng tiền vay mượn để trade
Chính cái việc soi mói túi tiền người khác làm thúc đẩy ae để mong muốn được như người ta, nếu ae có thói quen đó thì stop lại đi nha
P/s: Viết cho một người bạn ở ngoài, nói ra trước mặt thì mất lòng, nên tâm sự với ae trên này vậy`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `CÁCH ĐỂ TỒN TẠI VÀ KIẾM TIỀN TRONG MARKET 
Rất đơn giản, là KHÔNG LÀM những gì mà các trader thua lỗ, trader cháy tk đã làm và đang làm, 95% trader thất bại đều lặp đi lặp lại những hành vi thua lỗ dưới đây.
- Thất bại do đánh ngược xu hướng thị trường -> Chỉ giao dịch thị trường có xu hướng rõ ràng 
-Thất bại do không quản lý vốn -> Quản lý vốn từ khi lúc nạp tiền vào mất hết vẫn thoải moái, và giao dịch cắt lỗ 1 -> 5% / lệnh.
-Thất bại do giao dịch quá nhiều phương pháp dẫn đến nhiễu loạn, tẩu hoả nhập ma, giao dịch mệt mỏi, sinh ra hành động ngớ ngẩn -> Chỉ giao dịch 1 phương pháp hợp với mình, và đào sâu nó. 
- Thất bại do không biết nhật ký giao dịch -> Viết nhật ký để biết lý do vào lệnh, xem lại lệnh đó đã đủ hết điều kiện trong hệ thống mình chưa , và lý do vào lệnh, trạng thái tâm lý khi trade khi lệnh chạy thế nào , lệnh lỗi tìm điểm khắc phục, lệnh đúng phát huy.
- Thất bại là do không định vị được vị thế bản thân trong trading, 5tr,10tr mà đòi 1 tháng kiếm 10tr 20tr 50tr / tháng , , ít tiền thì ăn ít, muốn ăn 5tr / tháng thì nạp vào 500tr thì dễ hơn đúng không  
-> Định vị lại vị thế tài chính cá nhân , con nhà nghèo thì đừng đú vol theo những trader khác.
- Thất bại là kỳ vọng quá cao hơn những gì market cho -> Hạ thấp kỳ vọng, lấy đủ số tiền cần lấy . ( tham lam là nguyên nhân cơ bản của mọi thất bại )
- Thất bại là do quá sợ hãi khi giao dịch, lệnh đang lỗ thì sợ lỗ nhiều hơn, lệnh đang dương thì sợ giá quay đầu, đến điểm entry của mình rồi thì sợ không dám vào lệnh -> Cách để không sợ hãi chỉ có cách là quản trị vốn thông minh 
- Trade what you see, not what you think -> Là giao dịch những gì mình thấy , chứ đừng nghĩ giá sẽ tăng, giá sẽ giảm, trader mà nghĩ là chết  m* rồi.
- Trader thất bại là giao dịch quá nhiều, vừa tốn phí , vừa tốn quá nhiều năng lượng , đến khi lệnh chạy đúng phân tích thì năng lượng đã cạn kiệt, ko thể gồng lời nổi -> Giao dịch ít lại , timing những vùng giá để chờ buy, những vùng giá để chờ sell , chứ lúc nào tài khoản cũng có lệnh thì là cờ bạc rồi.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `HY VỌNG & SỢ HÃI – 2 TÂM LÝ ĐIỂN HÌNH KHI GIAO DỊCH CỦA TRADER

Nếu đã từng trade, chắc chắn ae đã trải qua hai cảm giác này: 
SỢ HÃI khi lệnh đang lãi – HY VỌNG khi lệnh đang lỗ. Và chính 2 cái tâm lý này khiến ae mãi mãi mắc kẹt trong vòng luẩn quẩn: CHỐT NON - GỒNG LỖ - CHÁY TÀI KHOẢN

Vì khi tài khoản đang xanh, lúc này thay vì để lệnh tiếp tục đi theo xu hướng của nó, ae bắt đầu SỢ rằng : "Lỡ giá quay đầu thì sao? Lỡ giá về entry thì sao? Thôi chốt luôn cho chắc" , và thế là ae CHỐT NON , chính cái tâm lý này, hành vi này làm ae GỒNG LỜI RẤT KÉM

Còn khi tài khoản đang âm, lúc này thay vì cắt lỗ đúng theo phương pháp giao dịch, ae lại bắt đầu HY VỌNG rằng: "Thôi, ráng chút nữa nó hồi lại mình sẽ thoát", rất nhiều lần market cho ae về bờ một cách thần kỳ, nhưng lâu dần ae tự mình thành thói quen GỒNG LỖ RẤT GIỎI , chính cái thói quen chết người này sẽ tiễn tài khoản của ae một ngày không xa.


Vậy ae phải tư duy lại và đảo ngược 2 tâm lý trên. 

Lệnh dương thay vì SỢ HÃI, ae hãy mang tâm lý HY VỌNG giá đang chạy đúng phương pháp của mình thì việc gì phải sợ, nếu thị trường vẫn còn ủng hộ thì tiếp tục GỒNG LỜI

Lệnh âm thay vì HY VỌNG, ae hãy mang tâm lý SỢ HÃI , SỢ HÃI rằng nếu mình không cắt lệnh này thì tài khoản mình sẽ bị market bào mòn đến cạn kiệt , có khi cháy tài khoản, CẮT ĐI , cắt lỗ mình sẽ chờ cơ hội khác tốt hơn.

NÊN NHỚ:
Nhà cái GỒNG LỜI RẤT GIỎI ( đó chính là khi ae gồng lỗ )
Nhà cái GỒNG LỜI RẤT KÉM ( đó chính là khi ae gồng lời )
Vậy tổng cuộc chơi ae xem ai là người tồn tại, ae hay market , 95% trader ngoài kia GỒNG LỖ RẤT GIỎI và GỒNG LỜI RẤT KÉM`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Chia sẻ về kinh nghiệm gồng lời
1/ Đi vol phù hợp với bản thân
Ae chưa gồng lời được thì ae phải hạ vol xuống, và tìm ra vol phù  hợp với mình mới có thể gồng lời được.
Ví dụ: Bình thường ae trade đặt sl 100$ cho 1 lệnh, lúc vào lệnh ae có hành vi theo dõi chart liên tục, cảm xúc hồi hộp và lệnh chạy được tí sợ giá quay đầu thì chốt non, và lệnh âm thì tháo sl hoặc DCA thêm thì vol đó ko phù hợp với ae, ae hạ còn 50$ , 30$ ,20$ thử giao dịch thử xem vol nào mà ae vào lệnh, ae ko còn hành cầm đt check chart thường xuyên nữa, mặc kệ lệnh đó chạy như thế nào thì đó là vol phù hợp với ae, và sl ae ko còn cay cú nữa, rồi từ đó ae mới có thể gồng lời được
2/ Tin vào hệ thống giao dịch của mình 
- Là ae vào lệnh sẽ ko biết giá đi về đâu đâu, nhưng ae biết hệ thống của mình dài hạn sẽ có lợi nhuận , nên ae sẽ chấp nhận nhiều lúc giá chạy gần tới tp rồi quay đầu hay giá quét sl rồi chạy tới tp , => nếu ae chưa có hệ thống ổn định thì ae phải xem lại hệ thống giao dịch của mình 
3/ Là do ae biết quá nhiều thứ, ae học ptkt nhồi nhét quá nhiều ptkt , nhìn đâu cũng thấy cản , thấy cản sinh ra sợ hãi nên chốt non , chưa kể ảnh hưởng tín hiệu ngược của leader , hội nhóm khác ... => cách giải quyết, chọn pp ae cảm thấy hợp nhất và đào sâu vào nó 
4/ Ae bị giới hạn màn hình điện thoại / máy tính của ae, khi giá tăng, giá nằm gần trên màn hình của ae, ae nghĩ giá đã cao rồi, tâm lý sinh ra sợ hãi, sợ hãi thì chốt , nên ko thể gồng được lời , vì vậy đừng có giới hạn đỉnh đáy của thị trường bằng màn hình của chúng ta
5/ Để gồng lời tốt là ae cần phải đủ số giờ bay (tối thiểu 3,5 năm), thằng làm nghề lâu năm thì phải gồng giỏi hơn thằng mới vào nghề chứ, sao so bì được, nên ae cần thời gian để thẩm thấu market
6/ Học cách chấp nhận 
- Chấp nhận nhiều lúc giá gần chạm tp thì market quét về sl ở et
- Chấp nhận nhiều lúc quét sl rồi chạy full tp 
- Chấp nhận nhiều lúc thiếu vài pip giá chạy ko đón 
- Chấp nhận những thứ mà mình không thể kiểm soát được`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `KHOẢNG CÁCH TỪ BIẾT ĐẾN LÀM

Biết tập gym sẽ có một sức khỏe tốt, nhưng mấy ai tập , mấy ai duy trì được thành thói quen mỗi ngày

Biết dậy sớm sẽ tốt cho sức khỏe, cảm giác sảng khoái hơn, có nhiều thời gian dành cho bản thân để đọc sách, thiền,chạy bộ , nhưng mấy ai làm, mấy ai duy trì được

Biết đọc sách là rất tốt , đầu óc mở mang hơn , thông minh sáng dạ hơn, mà mấy ai đọc, mấy ai duy trì thành thói quen mỗi ngày được

Biết ngủ đúng giờ là tốt , để ngày mai sẽ tỉnh táo để làm việc , mà mấy ai đi ngủ đúng giờ, và mấy ai duy trì được thành thói quen

Biết QUẢN LÝ VỐN là sẽ tồn tại được trong trading, nhưng mấy ai LÀM được, mấy ai duy trì đều được lệnh nào cũng đi vol cũng bằng nhau

AI AI CŨNG BIẾT - MÀ MẤY AI CHỊU LÀM VÀ KIÊN TRÌ TẠO THÀNH MỘT THÓI QUEN, LÚC ĐÓ KHÔNG CÒN NỖ LỰC ĐỂ ĐỌC SÁCH, CHẠY BỘ, NGỦ ĐÚNG GIỜ, QUẢN LÝ VỐN NỮA , LÚC ĐÓ NÓ TRỞ THÀNH THÓI QUEN VÔ THỨC, NHƯ MỖI SÁNG AE DẬY ĐIỀU ĐẦU TIÊN AE LÀM LÀ GÌ, LÀ ĐA SỐ SẼ ĐI ĐÁNH RĂNG, AE CÓ LÚC NÀO HỎI , TẠI SAO MÌNH PHẢI ĐÁNH RĂNG, THÔI HÔM NÀY NHÁT QUÁ ĐỂ NGÀY MAI ĐÁNH RĂNG, HAY LÀ MÌNH SẼ ĐÁNH RĂNG VÀO BUỔI CHIỀU.

ĐÓ AE ĐÃ HIỂU RA VẤN ĐỀ CHƯA, KHI AE TẠO THÀNH THÓI QUEN THÌ AE KO CẦN CỐ GẮNG NỮA. TỪ ĐÓ SAU THỜI GIAN DÀI TỰ BẢN THÂN AE SẼ TỰ TỐT LÊN THÔI. CŨNG NHƯ GIAO DỊCH AE QUẢN LÝ VỐN THÀNH THÓI QUEN, THÌ AE SẼ KHÔNG CÒN NHỒI DAME/ ĐÁNH VOL LỚN ĐỂ BỊ LOẠI RA KHỎI CUỘC CHƠI, LÚC NÀY AE SẼ TỒN TẠI ĐƯỢC VỚI THỊ TRƯỜNG NÀY.

NÊN KHOẢNG CÁCH TỪ BIẾT ĐẾN LÀM NÓ XA VỜI VỢI.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Viết cho ae đã trade lâu ( bài viết không dành cho ae newbie)

Anh em có để ý tại sao mình có phương pháp rồi, hệ thống rồi, nguyên tắc rồi
Mà nhiều lần giao dịch, chúng ta vẫn biết pp rõ của mình, có 4,5 điều kiện mới được vào lệnh, thực hiện lệnh. 
Nhưng nhiều lần vẫn tặc lưỡi bỏ qua 1,2 điều kiện , tâm trí lúc đó thoáng qua hình như là sai sai nè, mà lúc đó cái thằng tham lam nó tặc lưỡi, có sao đâu, trade là xác xuất mà, thôi kệ đi, cũng như nhau thôi, vào lệnh thôi, nghĩ gì cho nhiều, rồi lệnh giao dịch đó nó cho ae nhiều lần có lợi nhuận, bắt đầu ae nghĩ à,  đâu cần đủ bộ nguyên tắc vẫn ăn mà, xác xuất mà, cần gì phải nguyên tắc rập khuôn, lâu dần ae hình thành thói quen tặc lưỡi, đến khi điều kiện thị trường không còn thuận lợi nữa, chính bộ nguyên tắc nó sẽ bảo vệ ae , nhưng ae đã quen với việc tặc lưỡi đó, nên thành ra ae vẫn vào lệnh , trong khi bộ nguyên tắc thì không đủ điều kiện vào lệnh, lúc này thị trường sẽ lấy lại hết những khoản lãi mà ae đã kiếm được, dù ae vẫn còn những nguyên tắc khác ko làm ae cháy tk, nhưng tài khoản ae vẫn là con số âm, ae dần hoài nghi năng lực bản thân của mình, rồi ae sẽ rời bỏ thị trường. 

Bây giờ ae đã nhận thức được lý do vì sao chưa, nên ae hãy đừng tạo mình thói quen giao dịch xấu, chính nó sẽ tiễn ae ra khỏi thị trường. Ae không cần giao dịch quá nhiều đâu, trading nó ko phải như những nghề bình thường khác, nghề trade này làm nhiều nhất là KHÔNG LÀM GÌ, KHÔNG LÀM GÌ là  lúc này ae có thời gian quan sát market, kiên nhẫn chờ đợi đúng timing, đúng setup của ae thì ae mới giao dịch vào , đừng vội vàng mà lao theo TIẾNG GỌI CỦA THỊ TRƯỜNG để ĐÁNH MẤT BẢN THÂN MÌNH`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi không xác định được điểm vào lệnh
Thì chỉ có cách duy nhất là thuận theo dòng nước
Là giao dịch thuận theo xu hướng chính của các khung thời gian lớn H4 or D1
Đợi chờ giá hồi về các VÙNG HỖ TRỢ / KHÁNG CỰ của khung thời gian lớn
Thì mở các khung thời gian nhỏ hơn để điểm vào lệnh
Và cắt lỗ, chốt lời theo khung thời gian nhỏ để tối ưu
Đó là cách đi theo đám đông, thuận xu hướng của thị trường, 
Đám đông có thể ngu dốt, nhưng đừng bao giờ chống lại nó`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `THÔI THÚC KHÓ CƯỠNG TRONG TRADING

Trong trading, có một cảm giác rất quen thuộc mà ae ai cũng từng trải qua đó là trạng thái: "thôi thúc khó cưỡng".

Nó không phải là tín hiệu setup rõ ràng.
Không phải là kế hoạch mà ae đã vạch sẵn.
Mà nó đơn giản chỉ là... cái cảm giác phải vào lệnh ngay lập tức.

"Vì nghĩ đây là cơ hội ngon ăn, hiếm có, không vào giờ thì sẽ bỏ lỡ cơ hội ăn chắc trong tầm tay, entry lúc này là không còn nằm trong hệ thống giao dịch của ae nữa, và kèm theo đó là không sl, vol to, không quản lý vốn và một dòng suy nghĩ như đinh đóng cột trong đầu là "lệnh này mình sẽ win".

Cái sự thôi thúc khó cưỡng đó sinh ra từ tâm lý FOMO (sợ bỏ lỡ), từ sự tham lam, từ nỗi sợ tụt lại phía sau, sợ không còn cơ hội nào nữa trong tương lai, nên tâm trí ae lúc đó không còn minh mẫn nữa, lúc này ae giao dịch theo cảm xúc và dẫn đến hàng loạt sai lầm phía sau nào là DCA để về bờ, trả thù thị trường , kết quả là gì thì chắc ae cũng đã biết, cháy tài khoản là điều dĩ nhiên . 

Vậy khi có trạng thái cảm xúc "THÔI THÚC KHÓ CƯỠNG" này lặp lại khi ae giao dịch, ae hãy dừng lại 5s hỏi mình rằng: Đây là entry dựa trên hệ thống của mình hay cảm xúc, ae bắt đầu kiểm tra checklist điều kiện vào lệnh đã đủ chưa, đủ rồi thì nghĩa là lệnh này ae đang giao dịch trên hệ thống của mình thì ok vào lệnh, còn chưa đủ nghĩa là ae đang bị cảm xúc dẫn dắt hành động, lúc này thì ae tắt máy, tắt app đi ra ngoài, ae lặp đi lặp lại quá trình này dần dần, thì ae sẽ chữa được bệnh này, từ đó hành trình trading ae sẽ có cú nhảy vọt về phương diện tâm trí và cảm xúc.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Khi không xác định được điểm vào lệnh
Thì chỉ có cách duy nhất là thuận theo dòng nước
Là giao dịch thuận theo xu hướng chính của các khung thời gian lớn H4 or D1
Đợi chờ giá hồi về các VÙNG HỖ TRỢ / KHÁNG CỰ của khung thời gian lớn
Thì mở các khung thời gian nhỏ hơn để điểm vào lệnh
Và cắt lỗ, chốt lời theo khung thời gian nhỏ để tối ưu
Đó là cách đi theo đám đông, thuận xu hướng của thị trường, 
Đám đông có thể ngu dốt, nhưng đừng bao giờ chống lại nó`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nghiên cứu sự thất bại của người khác để tự soi lại chính bản thân mình
 

Ae sẽ thấy rất nhiều , ko chỉ riêng trong trading mà trong lẫn cuộc sống bên ngoài chúng ta , những người thất bại thường có những hành vi, cảm xúc, hành động, tính cách như thế nào, ae cứ viết ra coi, ví dụ như : tính cách nóng nảy, làm gì cũng qua loa, làm ăn xổi , nhắm cái lợi trước mắt ko nhìn về dài hạn, luôn luôn thu lợi cho mình đầu tiên rồi mới tới người khác, khởi đầu cái gì đó thì rất hào hứng xong thì được thời gian thì nản, còn lời hứa thì như gió bay ngang đầu, mới làm được tí thì than mệt xong nói xấu sếp, nói xấu đồng nghiệp , luôn luôn trong trạng thái là nạn nhân của một sự việc và sẵn sàng bật công tắc đổ lỗi, đổ trách nhiệm lên người khác khi có vấn đề, ae coi xem mình có những hành vi vậy ko , đó là bên ngoài cuộc sống của ae. 

Vậy thì ae tự ngẫm xem trong trading những đặc điểm, tính cách của mình đang ok chưa: có còn fomo ko, có còn đi nhìn túi tiền người khác, có còn tham lam vô độ để nhồi vol gỡ lại khi lệnh trước loss, có còn quá tự tin vào bản thân mình ko, có còn sợ hãi ko dám vào lệnh khi thị trường setup đúng entry của mình, có còn đặt quá kỳ vọng vào 1 kèo để định giang sơn ko, có còn phán xét, chê bai phân tích của người khác, có còn hy vọng khi kèo đang lỗ hay có còn sợ hãi khi đang gồng lãi, có còn chấp vào đúng/sai (nhị nguyên) của từng lệnh không?

CHỐT LẠI LÀ CÓ ĐANG QUẢN LÝ VỐN KO :))`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `BỚT TÍNH TOÁN CHI LI VÀ HÃY THOẢI MOÁI HƠN VỚI MỌI NGƯỜI.

Ở ngoài cuộc sống ae hãy bớt toan tính với người khác đi, bớt khắt khe với chính mình và trong trading ae cũng vậy bớt trả giá entry từng pip, từng cây nến… thì tự nhiên thấy nhẹ đầu hơn, dễ trade hơn. Market cũng đỡ căng với ae hơn, ae sẽ không còn cảm giác bị market “hành” nữa, mà giống như đang “đi cùng” với nó.

Có giai đoạn mình cũng như nhiều ae, lúc nào cũng muốn ăn trọn con sóng, từ đáy lên đỉnh, không sót một pip nào. Nhưng sau này mới hiểu: chẳng ai ăn được trọn cả con sóng mãi mãi đâu, cố quá thì quá cố.

Nhất là lúc vừa mới thắng to, có lời lớn, bắt đầu tiếc nuối mấy lệnh nhỏ. “Biết vậy nãy vô volume lớn hơn tí là giờ ăn x2 x3 rồi…”, chính cái suy nghĩ đó là lúc ae bắt đầu toan tính với ngài market.

Nhiều ae nghĩ rằng nếu mình có 100k, mình sẽ kiếm vài chục nghìn đô mỗi tháng, tính ra tháng sương sương có 400,500tr mỗi tháng, nghe lý thuyết thì hay đấy, nhưng vào thực tế thì khác hẳn. Kể cả ae có kiếm được, thì ae cũng sẽ thua lại nhanh thôi. Vì sao? Vì ae chưa đủ trình đánh được tài khoản 100k ấy.

Thực ra, thị trường trả ae bao nhiêu là tùy vào năng lực, tâm lý, kinh nghiệm và vốn liếng của ae ở thời điểm đó, giống như việc ae đi làm, chức vụ nhân viên thì cuối tháng nhận lương nhân viên, chức vụ quản lý thì phải nhận lương hơn lương thằng nhân viên chứ, ae làm nhân viên mà đòi nhận lương quản lý thì sao "sếp market" cho được, lợi nhuận ae đạt được phải vừa với năng lực, tâm lý và hoàn cảnh vị thế tài chính của bản thân mình.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Bạn chẳng cần phải là một học giả lỗi lạc mới hiểu được điều này. 
Chỉ cần quan sát bản thân mà thôi. Bạn sẽ thấy hễ khi nào bạn thực hiện một hành động mà không có sự kỳ vọng, trải nghiệm sống của bạn sẽ khác về chất lượng so với những lần bạn thực hiện nó mà có sự kỳ vọng. Một ví dụ tiêu biểu là hãy nhớ lại những lần bạn chơi một trò gì đó mà bạn thích. Bạn đắm mình vào trò chơi đó bằng đam mê và toàn bộ tâm trí, và tất nhiên là bạn chơi để giành phần thắng, nhưng bạn không suy sụp nếu thua cuộc. Đó là bởi bạn đã tận hưởng quá trình chơi đến nỗi bạn sẵn sàng chơi lại. Nếu bạn chơi trong vui sướng thì kết quả không còn thực sự quan trọng. Nếu bạn có thể đưa sự tỉnh thức này vào mọi khía cạnh trong cuộc sống, trải nghiệm sống của bạn sẽ biến chuyển mạnh mẽ. Trên hết, bạn chỉ có thể giành phần thẳng nếu bạn chơi giỏi, chứ không phải vì bạn khao khát chiến thắng.

Còn trong trading:

Bạn chẳng cần phải là một trader kỳ cựu mới hiểu được điều này.
Chỉ cần quan sát chính mình khi giao dịch. Bạn sẽ nhận ra: hễ khi nào bạn vào lệnh mà không dính mắc vào kỳ vọng – nghĩa là bạn vào lệnh như một phần tự nhiên của chiến lược, không run sợ, không quá phấn khích – thì trải nghiệm giao dịch của bạn khác hẳn. Tâm bạn vững, đầu óc minh mẫn, và bạn dễ chấp nhận kết quả dù thắng hay thua.

Hãy nhớ lại những lần bạn trade với tâm thế “thử nghiệm" hay “vào lệnh đúng bài rồi, kết quả tính sau" – lúc đó bạn trade rất mượt. Không phải vì may mắn, mà vì bạn đang ở trạng thái tối ưu nhất: tỉnh táo, không bị chi phối. Ngược lại, khi bạn trade với sự kỳ vọng cao – kiểu như "lệnh này phải thắng để gỡ", "lệnh này mà sai là sml", bạn gần như luôn phá vỡ kỷ luật, vào ra sai điểm, và tự đẩy mình vào vòng xoáy cảm xúc.

Nếu bạn thật sự đắm mình vào quá trình trading, giống như chơi một trò chơi bạn yêu thích – bạn sẽ tập trung tối đa, phân tích kỹ, phản ứng linh hoạt, và không sụp đổ chỉ vì một cú SL. Bởi vì bạn hiểu rằng: cái bạn theo đuổi là kỹ năng, là tiến bộ, là chiến lược – không phải là một kết quả nhất thời.

Và nếu bạn mang được sự tỉnh thức đó vào mỗi phiên giao dịch, mindset của bạn sẽ chuyển hóa. Tài khoản cũng sẽ theo đó mà đi lên.
Bởi vì cuối cùng, bạn chỉ có thể thắng nếu bạn trade giỏi – chứ không phải vì bạn khao khát thắng.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `LÀM SAO ĐỂ KỶ LUẬT TRONG TRADING?

Sau vài năm trên thị trường,ae học từ đông sang tây, tìm và xây dựng hệ thống giao dịch phù hợp với bản thân mình, và có kinh nghiệm giao dịch thực chiến 3-5 năm để tích luỹ "tâm lý chiến" thì để muốn kiếm tiền bền vững trong thị trường này là ae phải "ĐI VOL PHÙ HỢP VỚI BẢN THÂN MÌNH", vì khi "ĐI VOL PHÙ HỢP VỚI BẢN THÂN MÌNH" thì ae sẽ tự khắc kỷ luật dễ dàng, không còn ham muốn vào lệnh, không còn bị fomo, không còn DCA khi âm, không còn cháy tài khoản, không còn sợ hãi khi đang lãi, không còn bị hoảng loạn hay sợ hãi khi thị trường biến động mạnh, hay không còn hưng phấn khi thắng lớn, không còn hay check màn hình lệnh đang lãi hay đang lỗ => LÚC NÀY ae giải được bài toán "LÀM SAO ĐỂ KỶ LUẬT" .

"VẬY ĐỂ KỶ LUẬT ĐƯỢC THÌ AE PHẢI ĐI VOL PHÙ HỢP với VỊ THẾ TÀI CHÍNH CÁ NHÂN CỦA BẢN THÂN MÌNH"

VẬY LÀM SAO ĐỂ TÌM VOL PHÙ HỢP VỚI BẢN THÂN, thì bắt buộc ae phải test thôi, ví dụ như trước kia ae stop loss 200$/lệnh ae vẫn hay có hành vi " kiểm tra điện thoại liên tục" thì vol này không phù hợp với ae rồi, ae hạ dần xuống 100$,50$,30$,20$,10$ , giảm tới vol nào mà ae vào lệnh ae không còn hành vi "kiểm tra điện thoại lệnh đang lãi hay đang lỗ nữa" thì vol này là "VOL PHÙ HỢP VỚI AE".  Rồi tiếp tục trade vol đó thời gian dài điểm kiểm nghiệm hành vi /cảm xúc bản thân, nếu vẫn over trader thì hãy hạ thấp dần xuống để tìm đúng VOL của mình. 
Chúc ae tìm được VOL PHÙ HỢP VỚI BẢN THÂN MÌNH.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: `Nếu bạn xử lý giao dịch được thực thi trong Hiện Tại một cách có ý thức, bạn sẽ không tạo ra bất kỳ giao dịch được thực thi trong Tương Lai nào mang tính thôi thúc khó cưỡng. Đây chính là mấu chốt việc xử lý giao dịch và loại bỏ một loạt sai lầm không đáng có ở thì Tương Lai.`,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },

  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  {
    id: 5,
    author: "Gemi",
    time: "12 giờ trước",
    content: "",
    fullContent: ``,
    shares: 28,
  },
  
  

];

const normalizeForSlug = (value: string) =>
  value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9\s-]/g, ' ')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();

const buildSlug = (post: Omit<SocialPost, 'slug' | 'views'>, index: number) => {
  const source = post.content?.trim().length
    ? post.content
    : post.fullContent.split('\n').find((line) => line.trim().length > 0) ?? `post-${post.id}`;

  const normalized = normalizeForSlug(source).slice(0, 60).replace(/-+/g, '-');
  return normalized ? `${normalized}-${post.id}-${index}` : `post-${post.id}-${index}`;
};

const randomViews = () => Math.floor(Math.random() * 801) + 200;

export const socialPosts: SocialPost[] = rawSocialPosts.map((post, index) => ({
  ...post,
  slug: buildSlug(post, index),
  views: randomViews(),
}));

export const findSocialPostBySlug = (slug: string) =>
  socialPosts.find((post) => post.slug === slug);

export const getSocialPostHref = (slug: string) => `/blog/social/${slug}`;
