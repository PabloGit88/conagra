/*
SQLyog Ultimate v10.00 Beta1
MySQL - 5.6.20 : Database - conagra
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
USE `conagra`;

/*Table structure for table `language_token` */

CREATE TABLE `language_token` (
  `id` int(11) NOT NULL,
  `token` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UNIQ_206FA56A5F37A13B` (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `language_token` */

insert  into `language_token`(`id`,`token`) values (61,'back_to_home'),(23,'brands_info_act2'),(24,'brands_info_hunts'),(27,'brands_info_pam'),(29,'brands_info_peterpan'),(28,'brands_info_snackpack'),(26,'brands_info_swissmiss'),(25,'brands_info_wesson'),(73,'brands_trainee_brand_information'),(72,'brands_trainee_curious_facts'),(71,'brands_trainee_main_title'),(52,'conagra_brand_types'),(60,'conagra_clase_marcas_comercial'),(58,'conagra_clase_marcas_consumo'),(59,'conagra_clase_marcas_private'),(6,'conagra_information_platform'),(11,'conagra_latam_belice'),(21,'conagra_latam_brasil'),(17,'conagra_latam_colombia'),(16,'conagra_latam_costarica'),(19,'conagra_latam_ecuador'),(13,'conagra_latam_elsalvador'),(12,'conagra_latam_guatemala'),(14,'conagra_latam_honduras'),(15,'conagra_latam_nicaragua'),(22,'conagra_latam_panama'),(20,'conagra_latam_paraguay'),(18,'conagra_latam_peru'),(70,'conagra_latam_see_country'),(51,'conagra_operations_reports'),(50,'conagra_our_purpose'),(57,'conagra_our_purpose_text'),(49,'conagra_who_is'),(30,'curious_facts_act2'),(31,'curious_facts_hunts'),(33,'curious_facts_pam'),(35,'curious_facts_peterpan'),(34,'curious_facts_snackpack'),(32,'curious_facts_wesson'),(46,'general_observations_hunts'),(9,'login_cancel'),(7,'login_email'),(10,'login_login'),(8,'login_password'),(53,'logout'),(2,'menu_brands_training'),(3,'menu_conagra_latam'),(4,'menu_planograms'),(5,'menu_promos'),(1,'menu_who_we_are'),(44,'planograms'),(85,'planograms_generales_for_products_hunts'),(37,'planograms_generals_act2'),(38,'planograms_generals_hunts'),(41,'planograms_generals_pam'),(43,'planograms_generals_peterpan'),(42,'planograms_generals_snackpack'),(40,'planograms_generals_swissmiss'),(39,'planograms_generals_wesson'),(87,'planograms_horizontal'),(84,'planograms_shelf_layout'),(45,'planograms_suggested'),(86,'planograms_suggested_complete_block'),(64,'quien_es_consumidor'),(67,'quien_es_consumidor_asterisk'),(65,'quien_es_consumidor_description'),(66,'quien_es_consumidor_li'),(62,'quien_es_marca_consumo'),(63,'quien_es_marca_consumo_page'),(68,'quien_es_private_box1'),(69,'quien_es_private_box2'),(47,'recommended_planimetry_hunts'),(82,'signup_cancel'),(77,'signup_country'),(78,'signup_distributor'),(80,'signup_email_placeholder'),(83,'signup_enter'),(79,'signup_name_placeholder'),(81,'signup_password_placeholder'),(88,'signup_phone_placeholder'),(76,'suggested_planogram_main_title'),(48,'varieties_peterpan'),(36,'welcome'),(56,'who_we_are_brands_consume'),(75,'who_we_are_commercial_foods'),(55,'who_we_are_description'),(74,'who_we_are_private_brand'),(54,'who_we_are_we_make_food');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
