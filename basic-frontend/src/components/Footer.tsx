export default function Footer() {
    return (
        <footer
            style={{
                width: "85vw",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: "#f0f0f0",
                paddingLeft: "0.5rem",
                paddingRight: "0.5rem",
            }}
        >
            <div>
                <hr style={{ width: "100%" }} />
                <div>
                    <div>
                        가짜책방 | 대표자: ileskey | 가짜주소: 서울특별시 동작구
                        상도로 369 숭실대학교 (정보섬) |
                    </div>

                    <div>
                        가짜사업자등록번호: 222-22-22222 | 가짜전화: 1234-5678 |
                    </div>
                    <div>가짜이메일: fakeBook@email.com</div>
                </div>
            </div>
        </footer>
    );
}
