<?php

namespace Odiseo\Bundle\ConAgraBundle\Form\Type\Filter;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class TranslationFilterType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
        ->add('language', 'entity', array(
        		'required' => false,
    			'class' => 'Odiseo\Bundle\ConAgraBundle\Entity\Language',
    			'placeholder' => 'Lenguaje',
        		'label'    => 'Lenguaje'
        ))
        ->add('languageToken', 'autocomplete', array(
        		'class' => 'Odiseo\Bundle\ConAgraBundle\Entity\LanguageToken'
        ))
        ;
    }

    public function getName()
    {
        return 'odiseo_conagra_translation_filter';
    }
}
