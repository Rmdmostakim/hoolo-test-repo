import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import BlogFeed from "../../Blog/BlogFeed";

function Terms() {
    return (
        <>
            <ContentWrapper>
				<Container fluid>
					<section className="blog-page section-padding">
						<Container>
							<Row>
							 <BlogFeed/>
							</Row>
						</Container>
					</section>
				</Container>
			</ContentWrapper>
        </>
    )
}

export default Terms;
